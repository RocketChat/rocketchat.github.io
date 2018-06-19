---
title: "Rocket.Chat Android 2.4 Released"
categories:
  - News
date: 2018-06-7 08:00:00
author: Rocket.Chat Team
cover: /images/posts/2018/06/2018-06-7-android-2-4-release/cover.jpg
featured: true
---

Rocket.Chat is proud to announce its Rocket.Chat Android 2.4 release with the following highlighted features and changes:

* Read receipts [#1338](https://github.com/RocketChat/Rocket.Chat.Android/pull/1338)
* Files list now available [#1304](https://github.com/RocketChat/Rocket.Chat.Android/pull/1304)
* Push notifications from GCM to FCM now migrated [#1312](https://github.com/RocketChat/Rocket.Chat.Android/pull/1312)
* New notification feature that allows user [#1322](https://github.com/RocketChat/Rocket.Chat.Android/pull/1322)
* Fixes related to push notifications [#1300](https://github.com/RocketChat/Rocket.Chat.Android/pull/1300), [#1299](https://github.com/RocketChat/Rocket.Chat.Android/pull/1299),
* Google Smart Lock feature improved [#1334](https://github.com/RocketChat/Rocket.Chat.Android/pull/1334)
* Bug fixes

## Read receipts

You can now see who read the message and when. The feature needs to be enabled on the server that you're logged into in order to appear on the app.

<img src="/images/posts/2018/06/2018-06-7-android-2-4-release/read-receipts-in-message.png">

<img src="/images/posts/2018/06/2018-06-7-android-2-4-release/Read-receipts-message-info.png">

## Files list now available

The files list enables you to see all the files that have been sent on any given channel. It can be accessed on the context menu (top right) of the screen.

<img src="/images/posts/2018/06/2018-06-7-android-2-4-release/files-list.png">

## Push notification migration

Push notifications have been migrated from GCM to FCM. For more information, [check out](https://rocket.chat/docs/administrator-guides/notifications/push-notifications/#push-notifications) our newly updated guide to push notifications.

## Fixes related to push notifications

* Better multi-server support for push notifications

* Notifications will now show when a user logs in and out with different users

## New notification feature

Users can now hop to a chat room by tapping a notification.

## Google Smart Lock feature improved

Google Smart Lock has been refactored for 2.4: to use it, one must now tap the key icon on the righthand side of the username/email field.

<img src="/images/posts/2018/06/2018-06-7-android-2-4-release/smart-lock.png">

## Bugs fixed

* Fixed a bug related to starting new DMs after a search [#1321](https://github.com/RocketChat/Rocket.Chat.Android/pull/1321)
* Fixed a bug related to offline sending messages not being sent [#1316](https://github.com/RocketChat/Rocket.Chat.Android/pull/1316)
* Fixed a bug related to RTL layout [#1301](https://github.com/RocketChat/Rocket.Chat.Android/pull/1301)
* Fixed download buttons [#1318](https://github.com/RocketChat/Rocket.Chat.Android/pull/1318)
* Fixed a bug that may have been causing the "Send" button to stay hidden [#1320](https://github.com/RocketChat/Rocket.Chat.Android/pull/1320)

## Requirements

Rocket.Chat Android 2.4.0 requires:

* Rocket.Chat Server minimum version 0.64.2
* SSL enabled server ([check](https://www.ssllabs.com/ssltest/) your server)

## Open source

Just like Rocket.Chat Server, all the code from the [SDK](https://github.com/RocketChat/Rocket.Chat.Kotlin.SDK) and [App](https://github.com/RocketChat/Rocket.Chat.Android) are open source under the MIT license.
Fork them, create new features, squash bugs and submit a pull request to share your work with the community.

## Contributors

Both releases were made possible by the amazing work of the following contributors. Thank you all for your commitment to Rocket.Chat.


* <a target="_blank" href="https://github.com/divyanshub024">@divyanshub024</a>
* <a target="_blank" href="https://github.com/filipedelimabrito">@filipedelimabrito</a>
* <a target="_blank" href="https://github.com/leonardoaramaki">@leonardoaramaki</a>
* <a target="_blank" href="https://github.com/luciofm">@luciofm</a>
* <a target="_blank" href="https://github.com/Poussinou">@Poussinou</a>

## 2.3.0 and 2.3.1 Fixes:

These were predominantly crash fixes, please see [#1345](https://github.com/RocketChat/Rocket.Chat.Android/pull/1345) and [#1351](https://github.com/RocketChat/Rocket.Chat.Android/pull/1351) for more details.

## Download and Review

You can download or update the app from the [Google Play Store](https://play.google.com/store/apps/details?id=chat.rocket.android) or download the [2.4.0.apk](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.4.0)
from the GitHub repo.

We'd also really appreciate your reviews on the Google Play Store.

## Release changelogs

For a full list of features added and bugs fixed, please see the full
[Rocket.Chat Android 2.4](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.4.0),[Rocket.Chat Android 2.3.2](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.3.2), [Rocket.Chat Android 2.3.1](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.3.1),[Rocket.Chat Android 2.3.0](https://github.com/RocketChat/Rocket.Chat.Android/releases/tag/v2.3.0)  release changelogs on GitHub.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@robergd?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Rober González"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Rober González</span></a>
