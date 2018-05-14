---
title: "Rocket.Chat 0.62.0 Released"
date: 2018-03-06 10:00:00
category:
  - News
author: Rodrigo Nascimento
cover: /images/posts/2018/03/2018-03-06-rocket-chat-0-62-released/cover.jpg
featured: true
---

## Rocket.Chat Server Release 0.62.0 Available Immediately

The team at Rocket.Chat is delighted to announce the immediate availability of Rocket.Chat server
0.62.0.

This release brings together a range of features development and bug fixes, and significantly
improves the stability and usability of the new UI introduced in 0.59.0.

## New Features

### [#7098](https://github.com/RocketChat/Rocket.Chat/pull/7098) Alert admins

<div class="left copy">
  <p>
    When a new user registration requires approval, Rocket.Chat will inform all admins via email and
    direct them to the administration panel to approve the registration.
    The user will then be notified via email when their account has been approved or when it has
    been activated/deactivated by the admins.
  </p>
</div>
<div class="right image">
  <p>
    <img
    src="/images/posts/2018/03/2018-03-06-rocket-chat-0-62-released/admin-email-alert.png" alt="Alert Admins"/>
  </p>
</div>
<div class="clear"></div>

### [#9642](https://github.com/RocketChat/Rocket.Chat/pull/9642) Discover channels

Look out for the globe icon to discover and filter new channels and users.

### [#9687](https://github.com/RocketChat/Rocket.Chat/pull/9687) Global message search

Global Search is an experimental feature and is disabled by default. Admins can activate it through
their server settings `Administration > Messages > Global Search`.

Once activered, search resultes will include information from other channels if the
`Global Search` option is checked.

### [#8158](https://github.com/RocketChat/Rocket.Chat/pull/8158) GraphQL API

We are releasing the first experimental version of our GraphQL API, Admins can activate it through
their server settings `Administration > General > GraphQL API`.

### [#9255](https://github.com/RocketChat/Rocket.Chat/pull/9255) Livestream tab

<div class="right copy">
  <p>
    This new feature allows admins to enable a livestream tab on channels (public and private).
    The tab's livestream source can be edited by users who have the edit-room permission; every user
    on the channel can see the tab and watch the livestream once it is set.
  </p>
  <p>
    Currently we support the YouTube video player.
  </p>
</div>
<div class="left image">
  <p>
    <img src="/images/posts/2018/03/2018-03-06-rocket-chat-0-62-released/livestream-panel.png" alt="Livestream Panel"/>
  </p>
</div>
<div class="clear"></div>

### [#9717](https://github.com/RocketChat/Rocket.Chat/pull/9717) Message read receipts

<div class="left copy">
  <p>
    It's now possible to see who read each message.
    For performance reasons this feature is disabled by default. Admins can activate it through
    their server settings `Administration > Messages > Show Read Receipts`.
  </p>
  <p>
    By activating `Show Read Receipts` users will see who reads each message and by activating
    `Detailed Read Receipts` they we will see when users read each message.
  </p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/03/2018-03-06-rocket-chat-0-62-released/read-receipt-admin.png" alt="read receipt"/>
  </p>
</div>
<div class="clear"></div>

### [#9608](https://github.com/RocketChat/Rocket.Chat/pull/9608) New sidebar layout

We have improved the sidebar layout to add more configuration options:

* The sidebar can use an `Extended`, `Medium` or `Condensed` view.
* Avatars can be shown or hidden.
* The sidebar sorting and grouping can be changed.

### [#9793](https://github.com/RocketChat/Rocket.Chat/pull/9793) Version update check

<div class="right copy">
  <p>
    Rocket.Chat will alert admins via a banner and direct message when a new version is available
    and if there are security updates.
  </p>
</div>
<div class="left image">
  <p>
    <img src="/images/posts/2018/03/2018-03-06-rocket-chat-0-62-released/version-update.png" alt="Version update"/>
  </p>
</div>
<div class="clear"></div>

## More Information on Release 0.62.0

For more details on the 0.62.0 release, please see our [full release notes](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.62.0).

**WARNING:** In Rocket.Chat 0.62. Graphics Magick and Image Magick have been removed from the new
image API. If you depend on them for your customizations you can instalal them via your system
package manager. For more information see the change [ pull request](https://github.com/RocketChat/Rocket.Chat/pull/9711).

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@spacex?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from SpaceX"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">SpaceX</span></a>
