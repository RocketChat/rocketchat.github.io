---
title: "Rocket.Chat Android 2.1.1 Released"
categories:
  - Releases
date: 2018-05-04 08:00:00
author: Rocket.Chat Team
cover: /images/posts/2018/04/2018-05-04-rocket-chat-android-2-1-released.md/cover.jpg
---

Rocket.Chat is proud to announce its Rocket.Chat Android 2.1.1 release with the following features and changes:

- New authentication methods
- Improved attachments
- Bug fixes (such as: users will now receive notifications when the app is in the background)
- Additional features (see below)

## New authentication methods

<div class="left copy">
<p>
  Custom OAuth and GitLab URL authentication are now supported.
</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/04/2018-05-04-rocket-chat-android-2-1-released.md/oath-en.png"/>
  </p>
</div>
<div class="clear"></div>

## Improved attachments

<div class="left copy">
<p>
  All types of attachment files are now supported (PDFs, documents, spreadsheets, etc) and you can now save image attachments in your gallery when viewing it in fullscreen.
</p>
<p>
'Real name' mentions are now supported.
</p>
</div>
<div class="right image">
  <p>
    <img src="/images/posts/2018/04/2018-05-04-rocket-chat-android-2-1-released.md/pdf attachment supported.png"/>
  </p>
</div>
<div class="clear"></div>


## Additional features

- French and Spanish language support
- See other users' statuses and change your own status
- Password recovery (requires server version 0.64 or greater)

## 2.1.1 Bug fixes

- Allow redirections on the server when connecting to a new host
- Fixed a crash on a specific kind of room with specific permissions

## Requirements

Rocket.Chat Android 2.1 requires:

- Rocket.Chat Server minimum version 0.63.1 or 0.64 for password recovery
- SSL enabled server ([check](https://www.ssllabs.com/ssltest/) your server)

## Open source

Just like Rocket.Chat Server, all the code from the [SDK](https://github.com/RocketChat/Rocket.Chat.Kotlin.SDK) and [App](https://github.com/RocketChat/Rocket.Chat.Android) are open source under the MIT license.
Fork them, create new features, squash bugs and submit a pull request to share your work with the community.

## Contributors

This release was made possible by the amazing work of the following contributors. Thank you all for your commitment to Rocket.Chat.

- <a target="_blank" href="https://github.com/divyanshub024">@divyanshub024</a>
- <a target="_blank" href="https://github.com/filipedelimabrito">@filipedelimabrito</a>
- <a target="_blank" href="https://github.com/leonardoaramaki">@leonardoaramaki</a>
- <a target="_blank" href="https://github.com/luciofm">@luciofm</a>
- <a target="_blank" href="https://github.com/MariusVolkhartr">@MariusVolkhart</a>
- <a target="_blank" href="https://github.com/TheMythPT">@TheMythPT</a>

## Download and Review

You can download or update the app from the [Google Play Store](https://play.google.com/store/apps/details?id=chat.rocket.android) or download the [.apk](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.1.0)
from the GitHub repo.

We'd also really appreciate your reviews on the Google Play Store.

## Release changelog

For a full list of features added and bugs fixed, please see the full
[Rocket.Chat Android 2.1 release changelog](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.1.0) on GitHub.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@graeme_nicholl?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Graeme Nicholl"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Graeme Nicholl</span></a>
