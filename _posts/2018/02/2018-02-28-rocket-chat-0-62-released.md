---
title: "Rocket.Chat 0.62.0 Released"
date: 2018-02-28 10:00:00
categories:
  - Releases
author: Rodrigo Nascimento
cover: /images/posts/2018/03/2018-02-2018-02-28-rocket-chat-0-62-released.jpg
---

**WARNING:** Upgrade to 0.62.0 if you customize Rocket.Chat and are using Graphics Magick or Image Magick (usually via RocketChatFile API).
That API was removed in the new image library and package installation is dependent on the Operational Sytem in use. More information is available [here](https://github.com/RocketChat/Rocket.Chat/pull/9711).

## Rocket.Chat Server Release 0.62.0 Available Immediately

The team at Rocket.Chat is delighted to announce the immediate availability of Rocket.Chat server release 0.62.0.


This release brings together a range of features development and bug fixes, and significantly improves the stability and usability of the new UI introduced in 0.59.0.


## New Features

### [#7098](https://github.com/RocketChat/Rocket.Chat/pull/7098) Alert admins when users require approval & alert users when the account is approved/activated/deactivated
When a new user registration requires approval, Rocket.Chat will send an email to all admins to inform them and direct them to the administration panel to approve the registration.
The user will then be notified via email when their account has been approved or when it has been activated/deactivated by the admins.


<div class="right image">
  <p>
    <img src="images/posts/2018/03/2018-02-2018-02-28-rocket-chat-0-62-released/admin-email-alert.png" alt="Message Actions (Edit & Delete)"/>
  </p>
</div>

### [#9642](https://github.com/RocketChat/Rocket.Chat/pull/9642) Browse more channels / Directory
Not it's possible to discover new channels and users using the new `Directory page acessible by the Globe icon, their it's possible to enter a text to filter and select between Channels and Users.

### [#9687](https://github.com/RocketChat/Rocket.Chat/pull/9687) Global message search (beta: disabled by default)
Global Search is on experimental feature and is disabled by default, admins can active at `Administration > Messages > Global Search`.

When activated users will be able to see results in search panel (on contextual bar) from other channels if the checkbox `Global Search` is activated.

TODO: Image from PR here?

### [#8158](https://github.com/RocketChat/Rocket.Chat/pull/8158) GraphQL API
We are introducing our first GraphQL API, it's experimental and disable by default, to enable it go to `Administration > General > GraphQL API`.

### [#9255](https://github.com/RocketChat/Rocket.Chat/pull/9255) Livestream tab
This new feature allows admins to enable a livestream tab on channels (public and private). The tab's livestream source can be edited by users who have the edit-room permission, every user on the channel can see the tab and watch the livestream once it is set.

Currently we are using youtube video player, so this is a limiting factor for other APIs at the moment.

TODO: Image from PR

### [#9717](https://github.com/RocketChat/Rocket.Chat/pull/9717) Message read receipts
Now it's possible to see who read each message, for performance reasons this feature is disabled by default and can be enabled at `Administration > Messages > Show Read Receipts`.

Activating `Show Read Receipts` users will be able to see who read each message and activating `Detailed Read Receipts` we will show the time when each user read each message.

TODO: Images from PR
### [#9608](https://github.com/RocketChat/Rocket.Chat/pull/9608) New sidebar layout
We improved the sidebar layout to add more configuration options, now it's possible to change the list density among `Extender`, `Medium` and `Condensed` and hide the items avatas as well.

TODO: Images

It's possible to quickly change the list sorting and grouping.

TODO: Images

### [#9793](https://github.com/RocketChat/Rocket.Chat/pull/9793) Version update check
Now Rocket.Chat will alert admins via a top banner and via Rocket.Cat message when a new version is available and if there is security updates.

TODO: Image from PR


## More Information on Release 0.62.0

For details of what is included in this exciting 0.62.0 release, please see our [release notes](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.62.0).
