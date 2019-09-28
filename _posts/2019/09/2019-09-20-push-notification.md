---
title: "Changes to notification behavior"
categories:
- News
- Product
date: 2019-09-20 12:00:00
author: Diego Sampaio
cover: /images/posts/2019/09/push/bell.jpg
featured: true
---

## Current state

Rocket.Chat has always tried to be smart when sending mobile notifications. We don't want to disturb you with useless notifications, but we understand this is confusing to our users. Users expect notifications and think there are bugs when none are actually being sent.

We have created a diagram to show the current conditions that cause Rocket.Chat to send a notification:

<a href="https://whimsical.com/PRwN4MWNsxSwqHjHXaPUuC"><img src="/images/posts/2019/09/push/diagram.png" style="width: 50%"></a>

The conditions are hard to understand by new Rocket.Chat users, so we decided to change to a more predictable and consistent approach to benefit our users.

## Coming changes

Starting at Rocket.Chat version **2.1.0**, the value for **Desktop Notification Default Alert** and **Mobile Notifications Default Alert** will be **All Messages**. When updating to version 2.1.0 or later the servers that were still using the previous default value **Mentions**, **will have** the value updated to **All Messages**.

Large rooms (with more than 100 members) are still prevented from sending notifications on all messages. There is a setting that can be changed to increase this number called **Maximum Channel Size for ALL Message** (under Admin > Message) but **please use this setting with caution** as it may cause performance issues.

## Future actions

To match the expectations of our users, we know there is room for improvement. So we are planning to refactor the push notification logic as a whole with the following key things in mind:

* Allow scaling to larger rooms - no need to worry about the "Maximum Channel Size for ALL Message" setting anymore;
* Remove a notification from mobile devices if that message was read on another device;
* Do not rely on connection status to send a notification, but instead create a queue of notifications and send them if the messages were not seen in any device for a certain amount of time - no "magic" anymore, you'll always get a notification on your phone if don't read a message.

We will also create a troubleshooting screen on our mobile apps to help you identify any push issues you might have.

We will begin making the changes over the coming months and we think they will improve your experience using Rocket.Chat. We will also be re-evaluating the push notification limits on our pricing plans, taking into account the increased usage.

Thank you for your patience and continued support!
