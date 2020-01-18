# Mobile Container

**Prevent Mobile from tracking your visits to other websites**

Mobile Container is an add-on you can install on Firefox to prevent Mobile from tracking your activity on other websites, so you can continue to use Mobile while protecting your privacy.

**Note:** To learn more about Containers in general, see [Firefox Multi-Account Containers](https://support.mozilla.org/kb/containers).

## How does Mobile Container work?

The Add-on keeps Mobile in a separate Container to prevent it from following your activity on other websites. When you first install the add-on, it signs you out of Mobile and deletes the cookies that Mobile uses to track you on other websites. 

Every time you visit Mobile, it will open in its own container, separate from other websites you visit.  You can login to Mobile within its container.  When browsing outside the container, Mobile won’t be able to easily collect your browsing data and connect it to your Mobile identity.

## How do I enable Mobile Container?

We’ve made it easy to take steps to protect your privacy so you can go on with your day.

1. [Install Mobile Container](https://addons.mozilla.org/firefox/addon/mobile-container/). This will log you out of Mobile and delete the cookies it’s been using to track you.
2. Open Mobile and use it like you normally would.  Firefox will automatically switch to the Mobile Container tab for you.
3. If you click on a link to a page outside of Mobile or type in another website in the address bar, Firefox will load them outside of the Mobile Container

## How does this affect Mobile’s features?

Mobile Containers prevents Mobile from linking your activity on other websites to your Mobile identity. Therefore, the following will not work:

### “Like” buttons and embedded Mobile comments on other websites.

Because you are logged into Mobile only in the Container, “Like” buttons and embedded Mobile comments on other websites will not work.

### Logging in or creating accounts on other websites using Mobile

Websites that allow you to create an account or log in using Mobile will generally not work properly.

## Will this protect me from Mobile completely?

This add-on does not prevent Mobile from mishandling the data it already has or permitted others to obtain about you. Mobile still will have access to everything that you do while you are on mobile.com or on the Mobile app, including your Mobile comments, photo uploads, likes, and any data you share with Mobile connected apps, etc.  

Other ad networks may try to link your Mobile activities with your regular browsing. In addition to this add-on, there are other things you can do to maximize your protection, including changing your Mobile settings, using Private Browsing and Tracking Protection, blocking third-party cookies, and/or using [Firefox Multi-Account Containers](https://addons.mozilla.org/firefox/addon/multi-account-containers/ ) extension to further limit tracking.

## How do I use Containers for other websites?

Good news! Containers aren’t just for Mobile. You can use Containers to prevent websites from linking your identities across the Web by installing [Firefox Multi-Account Containers](https://addons.mozilla.org/firefox/addon/multi-account-containers/).

To learn more about how Multi-Account Containers work, see our support page at [Firefox Multi-Account Containers](https://addons.mozilla.org/firefox/addon/multi-account-containers/).

## Development

1. `npm install`
2. `./node_modules/.bin/web-ext run -s src/`

### Testing
`npm run test`

or

`npm run lint`

for just the linter

### Links

- [License](./LICENSE.txt)
- [Contributing](./CONTRIBUTING.md)
- [Code Of Conduct](./CODE_OF_CONDUCT.md)
