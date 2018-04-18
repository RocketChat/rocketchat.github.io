---
title: "Rocket.Chat Android 2.0 Released"
categories:
  - Releases
date: 2018-04-11 08:00:00
author: Rocket.Chat Team
cover: /images/posts/2017/11/rocket-chat-ios-1-7-released/cover-ios1.7.jpg
---

Rocket.Chat is proud to announce Rocket.Chat Android 2.0 release with the following features and changes:

*add mention that we are proud of our new easier to use UI*

- Increased speead and connection reliability
- Offline support
- Improved layouts
- OAuth, LDAP, CAS authentication
- Reactions and emojis
- Full screen images and videos

## The reliability of the connection

*Rafael's copy*

We started the development of this app with one main goal: the networking layer needs to be perfect! We know that many of you had problems with the previous version of the app related to network connection, the app reconnecting many times and many network calls not working. Well, turns out that part of this problem was the code of the previous app, and this problem is gone now. The network layer of the application was complete rewritten, in a separated SDK (written in Kotlin, link here 1) that handles all the WebSocket and HTTP calls to the app, with a much more reliable solution than before.

## Speed

*Rafael's copy*

The speed of this app is glorious. You’ll notice when you scroll throught the messages. It feels good, it never freezes the scrolling and everything that doesn’t depend on networking is as fast as it can be with the hardware available.

## Offline support

*Rafael's copy*

This version doesn’t have offline support yet for all data. We do have offline support to one thing right now that we consider very important: sending messages. If you send a message and you’re offline, the app will handle the offline part for you and send it immediatly as you have internet connection. A more advanced offline support will be available soon in the next versions of the app.

## Layout

*Rafael's copy*

We changed the layout. A lot. And for the better. :slight_smile:

As you open the app, you’ll notice that the layout is very straighforward. You’ll see your conversations sorted by activity, you can read the last message of the conversation without opening it and you can change the sorting of the list to be by activity or alphabetically (we’re adding more options in future releases). We really hope you like this layout and get to use even more the app.

The layout is evolving on every release and we’re sure that in the next releases you’ll be convinced that this layout is for the better, if you’re not convinced yet.

### Authentication

<div class="left copy">
<p>

</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/04/2018-04-18-rocket-chat-android-2-releaed/authentication.png"/>
  </p>
</div>
<div class="clear"></div>

### Chats List

<div class="left copy">
<p>

</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/04/2018-04-18-rocket-chat-android-2-releaed/chats.png"/>
  </p>
</div>
<div class="clear"></div>

### Emoji Keyboard + Reactions

<div class="left copy">
<p>

</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/04/2018-04-18-rocket-chat-android-2-releaed/emojis.png"/>
  </p>
</div>
<div class="clear"></div>

## Features

We focuseed on the most requested fand important features the community has been asking for:

- OAuth Authentication for Google, GitHub, GitLab and LinkedIn
- LDAP and CAS Authentication
- Reactions and Emoji keyboard
- Edit your profile
- Full screen images and videos

## Requirements

Rocket.Chat Android 2.0 requires:

- Rocket.Chat Server minimum version0.63.1
- SSL enabled server ([check](https://www.ssllabs.com/ssltest/) your server)

## Open source

Just like Rocket.Chat Server all the code from the [SDK](https://github.com/RocketChat/Rocket.Chat.Kotlin.SDK) and [App](https://github.com/RocketChat/Rocket.Chat.Android) are open source under MIT license.
Fork it, create new feautures, squash bugs and submit a pull request to share your work with the community.

## Contributors

This release was made possible by the amazing work of the following contributors. Thank you all for your commitment to Rocket.Chat.

- <a target="_blank" href="https://github.com/divyanshub024">@divyanshub024</a>
- <a target="_blank" href="https://github.com/Shailesh351">@Shailesh351</a>
- <a target="_blank" href="https://github.com/robertwessen">@robertwessen</a>
- <a target="_blank" href="https://github.com/samrmur">@samrmur</a>
- <a target="_blank" href="https://github.com/aniketsingh03">@aniketsingh03</a>
- <a target="_blank" href="https://github.com/SyamSundarKirubakaran">@SyamSundarKirubakaran</a>
- <a target="_blank" href="https://github.com/pcforgeek">@pcforgeek</a>
- <a target="_blank" href="https://github.com/TheGamer007">@TheGamer007</a>
- <a target="_blank" href="https://github.com/leonardoaramaki">@leonardoaramaki</a>
- <a target="_blank" href="https://github.com/luciofm">@luciofm</a>
- <a target="_blank" href="https://github.com/filipedelimabrito">@filipedelimabrito</a>

## Download and Review

You can download or update the app from the [Google Play Store](https://play.google.com/store/apps/details?id=chat.rocket.android) or download the [.apk](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.0.0)
from the GitHub repo.

We'd also really appreciate your reviews on the Google Play Store.


## Release changelog

For a full list of features added and bugs fixed, please see the full
[Rocket.Chat Android 2.0 release changelog](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.0.0) on GitHub.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@andreoiide?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Andrea Enríquez Cousiño"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Andrea Enríquez Cousiño</span></a>
