const MOBILE_CONTAINER_DETAILS = {
  name: "mobile",
  color: "green",
  icon: "fence"
};

const FIREFOX_VERSION = /rv:([0-9.]+)/.exec(navigator.userAgent)[1];

var uaStrings = {
  "Firefox": `Mozilla/5.0 (Android 4.4; Mobile; rv:${FIREFOX_VERSION}) Gecko/${FIREFOX_VERSION} Firefox/${FIREFOX_VERSION}`,
  "Chrome": "Mozilla/5.0 (Linux; Android 7.0; PLUS Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36",
};

var USER_AGENT = uaStrings["Firefox"];

let mobileCookieStoreId = null;

/* eslint-disable no-unused-vars */
function setUA(uaString) {
  USER_AGENT = uaStrings[uaString];
}

async function setupContainer() {
  // Use existing Mobile container, or create one

  const contexts = await browser.contextualIdentities.query({ name: MOBILE_CONTAINER_DETAILS.name });
  if (contexts.length > 0) {
    const mobileContext = contexts[0];
    mobileCookieStoreId = mobileContext.cookieStoreId;
    // Make existing Mobile container the "fence" icon if needed
    if (mobileContext.color !== MOBILE_CONTAINER_DETAILS.color ||
      mobileContext.icon !== MOBILE_CONTAINER_DETAILS.icon
    ) {
      await browser.contextualIdentities.update(
        mobileCookieStoreId,
        { color: MOBILE_CONTAINER_DETAILS.color, icon: MOBILE_CONTAINER_DETAILS.icon }
      );
    }
  } else {
    const context = await browser.contextualIdentities.create(MOBILE_CONTAINER_DETAILS);
    mobileCookieStoreId = context.cookieStoreId;
  }
}

async function setup_url_Listener() {
  async function rewriteUserAgentHeader(e) {
    const current_tab = await browser.tabs.get(e.tabId);
    if (current_tab.cookieStoreId == mobileCookieStoreId) {
      for (var header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = USER_AGENT;
        }
      }
    }
    return { requestHeaders: e.requestHeaders };
  }

  browser.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgentHeader,
    {
      urls: ["<all_urls>"],
      //tabId: 5// even better
    },
    ["blocking", "requestHeaders"]);
}

(async function init() {
  await setup_url_Listener();
  try {
    await setupContainer();
  } catch (error) {
    // TODO: Needs backup strategy
    // See https://github.com/mozilla/contain-mobile/issues/23
    // Sometimes this add-on is installed but doesn't get a mobileCookieStoreId ?
    // eslint-disable-next-line no-console
    console.error(error);
    return;
  }

  //maybeReopenAlreadyOpenTabs();
})();
