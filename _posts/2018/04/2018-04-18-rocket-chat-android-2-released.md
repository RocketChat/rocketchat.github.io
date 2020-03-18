---
title: "Rocket.Chat Android 2.0 Released"
categories:
  - News
date: 2018-04-11 08:00:00
author: Rocket.Chat Team
cover: /images/posts/2017/11/rocket-chat-ios-1-7-released/cover-ios1.7.jpg
featured: true
---

Rocket.Chat is proud to announce its Rocket.Chat Android 2.0 release with the following features and changes:

* New networking layer
* Offline message composer
* Improved easier to use UI
  * New authentication layout
  * New chat list layout
  * Reactions and emojis keyboard

## New networking layer

When we started the development of the new Rocket.Chat Android app we wanted to make sure the networking layer was robust and stable. With 2.0 we have completely rewritten the network layer in a separate Kotlin SDK which handles all the WebSocket and HTTP communicaton. We are very happy with the results, and if you are coming from our legacy Cordova app you will notice a dramatic improvement in connection reliability and speed.

## Offline message composer

If you send a message while you’re offline, the app will queue the message and send when you have an internet connection. In the next version of the app we will support more offline functionality.

## Improved easier to use UI

We've reworked and improved many layouts of the app to bring you the fastest and most straightforward
Rocket.Chat mobile experience yet.

### Authentication

<div class="left copy">
<p>
  We've added new authentication methods to the sign in screen.
</p>
</div>
<div class="right image">
  <p>
    <img src="{{'/images/posts/2018/04/2018-04-18-rocket-chat-android-2-released/authentication.png' | relative_url}}"/>
  </p>
</div>
<div class="clear"></div>

### Chats List

<div class="left copy">
<p>
  Conversations are now sorted by activity by default, you can read the last message of the conversation without opening it and the sort order can be toggled between activity or alphabetically.
</p>
</div>
<div class="right image">
  <p>
    <img src="{{'/images/posts/2018/04/2018-04-18-rocket-chat-android-2-released/chats.png' | relative_url}}"/>
  </p>
</div>
<div class="clear"></div>

### Emoji Keyboard + Reactions

<div class="left copy">
<p>
  You can now react and add emojis with the new emoji keyboard which works just like Rocket.Chat web or desktop.
</p>
</div>
<div class="right image">
  <p>
    <img src="{{'/images/posts/2018/04/2018-04-18-rocket-chat-android-2-released/emojis.png' | relative_url}}"/>
  </p>
</div>
<div class="clear"></div>

## Other features

* OAuth Authentication for Google, GitHub, GitLab and LinkedIn
* LDAP and CAS Authentication
* Edit your profile
* Full screen images and videos

## Requirements

Rocket.Chat Android 2.0 requires:

* Rocket.Chat Server minimum version 0.63.1
* SSL enabled server ([check](https://www.ssllabs.com/ssltest/) your server)

## Open source

Just like Rocket.Chat Server, all the code from the [SDK](https://github.com/RocketChat/Rocket.Chat.Kotlin.SDK) and [App](https://github.com/RocketChat/Rocket.Chat.Android) are open source under the MIT license.
Fork them, create new features, squash bugs and submit a pull request to share your work with the community.

## Contributors

This release was made possible by the amazing work of the following contributors. Thank you all for your commitment to Rocket.Chat.

* <a target="_blank" href="https://github.com/divyanshub024">@divyanshub024</a>
* <a target="_blank" href="https://github.com/Shailesh351">@Shailesh351</a>
* <a target="_blank" href="https://github.com/robertwessen">@robertwessen</a>
* <a target="_blank" href="https://github.com/samrmur">@samrmur</a>
* <a target="_blank" href="https://github.com/aniketsingh03">@aniketsingh03</a>
* <a target="_blank" href="https://github.com/SyamSundarKirubakaran">@SyamSundarKirubakaran</a>
* <a target="_blank" href="https://github.com/pcforgeek">@pcforgeek</a>
* <a target="_blank" href="https://github.com/TheGamer007">@TheGamer007</a>
* <a target="_blank" href="https://github.com/leonardoaramaki">@leonardoaramaki</a>
* <a target="_blank" href="https://github.com/luciofm">@luciofm</a>
* <a target="_blank" href="https://github.com/filipedelimabrito">@filipedelimabrito</a>

## Download and Review

You can download or update the app from the [Google Play Store](https://play.google.com/store/apps/details?id=chat.rocket.android) or download the [.apk](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.0.0)
from the GitHub repo.

We'd also really appreciate your reviews on the Google Play Store.

## Release changelog

For a full list of features added and bugs fixed, please see the full
[Rocket.Chat Android 2.0 release changelog](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.0.0) on GitHub.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@andreoiide?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Andrea Enríquez Cousiño"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Andrea Enríquez Cousiño</span></a>
