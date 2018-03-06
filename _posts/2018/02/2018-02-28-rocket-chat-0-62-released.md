---
title: "Rocket.Chat 0.62.0 Released"
date: 2018-02-28 10:00:00
categories:
  - Releases
author: Rodrigo Nascimento
cover: images/posts/2018/03/2018-02-28-rocket-chat-0-62-released/cover.jpg
---

**WARNING:** Upgrade to 0.62.0 if you customize Rocket.Chat and are using Graphics Magick or Image Magick (usually via RocketChatFile API).
That API was removed in the new image library and package installation is dependent on the Operational Sytem in use. More information is available [here](https://github.com/RocketChat/Rocket.Chat/pull/9711).

## Rocket.Chat Server Release 0.62.0 Available Immediately

The team at Rocket.Chat is delighted to announce the immediate availability of Rocket.Chat server release 0.62.0.


This release brings together a range of features development and bug fixes, and significantly improves the stability and usability of the new UI introduced in 0.59.0.


## New Features

### [#7098](https://github.com/RocketChat/Rocket.Chat/pull/7098) Alert admins

<div class="left copy">
<p>
When a new user registration requires approval, Rocket.Chat will inform all admins via email and direct them to the administration panel to approve the registration.
The user will then be notified via email when their account has been approved or when it has been activated/deactivated by the admins.
</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/03/2018-02-28-rocket-chat-0-62-released/admin-email-alert.png" alt="Alert Admins"/>
  </p>
</div>
<div class="clear"></div>

### [#9642](https://github.com/RocketChat/Rocket.Chat/pull/9642) Browse more channels
Look out for the globe icon to discover and filter new Channels and Users using the new Directory page.

### [#9687](https://github.com/RocketChat/Rocket.Chat/pull/9687) Global message search
Global Search is an experimental feature and is disabled by default. Admins can activate it at `Administration > Messages > Global Search`.

 Activated users will be able to see results from other channels in their search panel (on the contextual bar) if the checkbox `Global Search` is activated.


### [#8158](https://github.com/RocketChat/Rocket.Chat/pull/8158) GraphQL API
We are introducing our first GraphQL API, it's experimental and disabled by default.
To enable it go to `Administration > General > GraphQL API`.

### [#9255](https://github.com/RocketChat/Rocket.Chat/pull/9255) Livestream tab

<div class="right copy">
<p>
This new feature allows admins to enable a livestream tab on channels (public and private). The tab's livestream source can be edited by users who have the edit-room permission; every user on the channel can see the tab and watch the livestream once it is set.
</p>
<p>
Currently we are using YouTube video player, which is a limiting factor for other APIs at the moment.
</p>
</div>
<div class="left image">
  <p>
    <img src="/images/posts/2018/03/2018-02-28-rocket-chat-0-62-released/livestream-panel.png" alt="Livestream Panel"/>
  </p>
</div>
<div class="clear"></div>

### [#9717](https://github.com/RocketChat/Rocket.Chat/pull/9717) Message read receipts

<div class="left copy">
<p>
It's now possible to see who read each message.
For performance reasons this feature is disabled by default and can be enabled at `Administration > Messages > Show Read Receipts`.
</p>
<p>
By activating `Show Read Receipts` users will see who reads each message and by activating `Detailed Read Receipts` they we will see when users read each message.
</p>
</div>
<div class="right image">
  <p>
    <img src="images/posts/2018/03/2018-02-28-rocket-chat-0-62-released/read-receipt-admin.png" alt="read receipt"/>
  </p>
</div>
<div class="clear"></div>

### [#9608](https://github.com/RocketChat/Rocket.Chat/pull/9608) New sidebar layout
We have improved the sidebar layout to add more configuration options. It's now possible to change the list's density to `Extender`, `Medium` or `Condensed` and hide the items avatas as well.

It's now also possible to quickly change the list sorting and grouping.


### [#9793](https://github.com/RocketChat/Rocket.Chat/pull/9793) Version update check

<div class="right copy">
<p>
Now Rocket.Chat will alert admins via a top banner and via Rocket.Chat message when a new version is available and if there are security updates.
</p>
</div>
<div class="left image">
  <p>
    <img src="images/posts/2018/03/2018-02-28-rocket-chat-0-62-released/version-update.png" alt="Version update"/>
  </p>
</div>
<div class="clear"></div>

## More Information on Release 0.62.0

For details of what is included in this exciting 0.62.0 release, please see our [release notes](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.62.0).

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@spacex?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from SpaceX"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">SpaceX</span></a>
