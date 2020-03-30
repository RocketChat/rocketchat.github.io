---
title: AMA webinar, Gabriel talks about our future and our new 2.1.0 release
date: 2019-09-27 12:00:00 Z
categories:
- Videos
videoURL: https://www.youtube.com/embed/i8gZxR56OPc
author: Marti Stephen
cover: "/images/blog/news-video.png"
featured: false
---

Our CEO **Gabriel Engel** shared news about our progress, the future, and Rocket.Chat’s **2.1.0 release** at September’s Ask Me Anything webinar.

One of our main highlights has been **Rocket.Chat’s first refactor of the Federation engine**, and we have been making a deeper dive to accommodate changes. This is not the final version, as it currently runs parallel with the main engine, but the idea is to fully incorporate Federation into the main engine of v3.0. This will allow servers to communicate and users to engage in inter-server communication.

We’re making good progress on our gradual move to the javascript library **React**, too. As part of this, we’ve  changed our set-up wizard, Page Not Found templates, and other templates. It’s the beginning of the process to make the bundle much lighter. Eventually, we’ll be moving component-by-component to a **fully React-based version**.

This means we are also dropping our old **LiveChat** client, replacing it with a version that has more functionality and fresher design, all of this using a slimmer version of React, called **Preact**. It’s significantly improved from our previous implementation. Since it shares the same API with our new mobile application, we’re starting to see a good sharing between our mobile and web clients, and it will keep all our clients in sync in terms of features and capabilities.

It might appear that all we’ve been doing is taking little steps, but the whole **move to React is a very big milestone.** In fact, it’s paving the way for a lot of other things we’re building using React.

We’d like you to know  that **we will only support version 3.4 and higher for MongoDB**, and we are **dropping support for 3.2.** It’s a case of staying current with what Mongo itself supports. The bonus is that by dropping 3.2  support, Rocket.Chat can use the database program’s newer features and support different query types.

We are currently removing outdated or poorly performing parts of the code. To help **Rocket.Chat v2.1.0 perform at its best**, our developers have removed:

- REST endpoint /api/v1/emoji-custom ([#15206](https://github.com/RocketChat/Rocket.Chat/pull/15206))
- REST endpoint /api/v1/info ([#15197](https://github.com/RocketChat/Rocket.Chat/pull/15197))
- GraphQL and grant packages ([#15192](https://github.com/RocketChat/Rocket.Chat/pull/15192))
- Publication roomSubscriptionsByRole ([#15193](https://github.com/RocketChat/Rocket.Chat/pull/15193))
- Publication usersInRole ([#15194](https://github.com/RocketChat/Rocket.Chat/pull/15194))

**Breaking changes** include replacing the tap:i18n package to add support for 3-digit locales and translations. If you have not customized strings and translations, this change shouldn’t affect you.
We’re happy to let everyone know that custom message pop-ups are now available, as are options for Security Assertion Markup Language (SAML) authentication system for individual organizations.

**LDAP User Groups, Roles, and Channel Synchronization are available**. This is the result of a lot of work on user groups, roles, and channel synchronizations to nail that directory.

A shout out to our German contributors for their pull request on **granular permissions**. What a great idea to have permissions for changing settings for different users!

We also integrated [DEEPL](https://www.deepl.com/en/home), a **translator system that uses Machine Learning**, into Rocket.Chat. In fact, **we are inviting the Community** to add more translation services to Rocket.Chat. We will migrate those kinds of contributions into Rocket.Chat Apps so that they can be easily used by everyone.

Here are the recent **bug fixes** for 2.1.0:

- Mark room as read logic ([#15174](https://github.com/RocketChat/Rocket.Chat/pull/15174))
- Forget user session on window close ([#15205](https://github.com/RocketChat/Rocket.Chat/pull/15205))
- Search message wrongly grouping messages ([#15094](https://github.com/RocketChat/Rocket.Chat/pull/15094))
- Rate limit incoming integrations (webhooks) ([#15038](https://github.com/RocketChat/Rocket.Chat/pull/15038))
- User's autocomplete, showing everyone on the server ([#15212](https://github.com/RocketChat/Rocket.Chat/pull/15212))
- IE11 modal, menu action, and edit user page ([#15201](https://github.com/RocketChat/Rocket.Chat/pull/15201))
- Messages search scroll ([#15175](https://github.com/RocketChat/Rocket.Chat/pull/15175))
- Threads contextual bar button visible even with threads disabled ([#14956](https://github.com/RocketChat/Rocket.Chat/pull/14956))
- Custom emoji table scroll ([#15119](https://github.com/RocketChat/Rocket.Chat/pull/15119))
- Direct Message names not visible on Admin panel ([#15114](https://github.com/RocketChat/Rocket.Chat/pull/15114))
- Cached collection calling multiple times sync ([#15104](https://github.com/RocketChat/Rocket.Chat/pull/15104))

Want a peak into some tidbits about our **future**? We are really excited about **Chained Events**. It's an upcoming feature that will use a **blockchain-like** logic to ensure the integrity and continuity of channels’ messages and events.

We’re also in the early stages of integration with **Microsoft Graph** (Mail, Calendar, Contacts, Documents, Directory, Devices, Tasks, Meetings, etc.). And we have  plans for Google G Suite integration.

People have been curious about integrating **PBX**, and we’re glad to report that Rocket.Chat is already in **very early beta** with our partner Comlink.

We’d also like to remind you that **we will terminate support for versions under 1.0 (0.x)**. Please check out our [documentation](https://rocket.chat/docs/getting-support/#supported-versions-of-rocketchat) for more details on this.

If you’d like to see the [full webinar](https://www.youtube.com/watch?v=qysYNQ0vufo), we encourage you to check it out. AMAs are held every month. Also, please use our [question collection channel](https://open.rocket.chat/channel/ask-gabriel-anything) to post any questions you may have about the Rocket.Chat vision. We want you to be informed!
