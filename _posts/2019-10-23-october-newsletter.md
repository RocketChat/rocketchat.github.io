---
title: Rocket.Chat News, Gabriel talks about Omnichannel and Performance Improvements,
  plus New Features in our new 2.2.0 release
date: 2019-10-23 12:00:00 Z
categories:
- Videos
videoURL: https://www.youtube.com/embed/zyMzjVcomtE
author: Marti Stephen
cover: "/images/blog/news-video.png"
featured: false
---

Hi, guys! Here’s what’s new at Rocket.Chat, straight from Gabriel Engel, our CEO, in October’s Release 2.2.0 new features video to all of you.

First off is an important reminder to check your engine version before running Rocket.Chat. We’ve heard a few reports of people trying to run the wrong engine version, so here’s a note to check that. These are the engine versions that currently work with Rocket.Chat version 2.2.0:

- Node 8.15.1
- NPM 6.9.0
- MongoDB 3.4, 3.6, and 4.0

## New Features

Let’s move on to new features. Rocket.Chat now allows avatars to accept GIFs and SVGs. We convert them to PNGs so you can preserve the transparent image backgrounds.
webinarURL: https://www.youtube.com/embed/wbm_QIWTTgU

We’ve got good news for those of you searching for files you’ve shared on the channel, whether you’re looking for pictures, movies, pdfs, whatever. You can find them more easily now because we’ve  added a file-type filter to Room Files. You’ll see a dropdown to help you search by file type. Thanks to [@juanpetterson](https://github.com/juanpetterson) on that one.

We know that people often have to import conversations from other systems, including legacy systems, into Rocket.Chat. Now you can import direct messages from CSV files. This is easier, and you won’t lose those conversations.

## Omnichannel

Omnichannel is a useful feature that allows external customers to communicate with agents on your server. Essentially it is a Livechat with alternate social network and messaging integration streams.

Omnichannel agents can look forward to several new features that solve some current issues and make them considerably more productive.

As you know, agents can sometimes collect a lot of closed Livechat conversations on the sidebar by the end of the day. Now we’re providing a button that will remove all of the closed Livechat conversations at once. Simple, clean, and elegant, thanks to [@knrt10](https://github.com/knrt10).

Up until now, the Omnichannel router has been preventing new conversations from reaching agents while their status is away or idle. You can now turn that feature off, so that these conversations reach you.

As we noticed the frequent requests for better integration between Omnichannel and external BOTs, we are allowing you to automatically assign new conversations to bot agents first. This feature also allows the bot agent to return the conversation to the queue if it cannot resolve the conversation.

## Performance Improvements

Let’s move on to performance improvements on the platform. Our front-end team has started to decouple React components from Meteor APIs. This means we don’t call any Meteor APIs from inside the components so that you can render them on the Storyboard or other places on the platform. This decoupling greatly speeds up our development, testing, and unit testing processes for our UI components, so we can keep migrating them to React.

As we’re sure you’ve noticed, we are incrementally migrating from Blaze to React, and we’re developing a new library of components called Fuselage. We’ve totally rewritten the Setup Wizard: It now loads only on set up and it’s no longer part of the Meteor package. You can check and contribute to Fuselage here: <https://github.com/RocketChat/Rocket.Chat.Fuselage>

The Administration area is being replaced next, and other areas will follow. When you see an area that’s been changed, please help us battle test it and confirm it’s still working as intended. Thank you!

To see more about the latest improvements, and also to hear about the latest bug fixes, you can check out the full October [News Video](https://youtu.be/zyMzjVcomtE) and [Webinar](https://youtu.be/Akf0COYymns). Also, please use our [question collection channel](https://open.rocket.chat/channel/ask-gabriel-anything) to post any questions you may have about the Rocket.Chat vision.
