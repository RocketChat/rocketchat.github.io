---
title: Rocket.Chat News, Gabriel talks about 2.3.4 release, new features improve efficiency
  and Omnichannel gains analytics
date: 2019-10-23 12:00:00 Z
categories:
- Videos
videoURL: https://www.youtube.com/embed/SG_itf3wJ_U
author: Marti Stephen
cover: "/images/blog/news-video.png"
featured: false
---

Hi everyone! Here’s the November report and news about Version 2.3.4. Our CEO, Gabriel Engel, begins with some new features at Rocket.Chat.

## New Features

There’s now a setting to dismiss desktop notifications only after they’ve been dealt with. You can access this new feature in Administrative Settings. The idea is to help users return to previous screens, so they can still see their  push notifications. They’ll no longer disappear. We say thanks to @mpdbl for help on this one.

Another new feature makes it easier for administrators to set up new users. They can now set a random password for users to speed up on-boarding. We think you’ll like this addition a lot.

## Omnichannel

We’re proud to say that Omnichannel is now used by some large organizations on all their customer-facing apps. It’s on their mobile apps, websites, Facebook, and WhatsApp, involving thousands of agents. In part because of this, we are rebranding livechat to Omnichannel in our communications and manuals. As you may know, livechat is really just one feature of Omnichannel. By the way, if you see text that still brands Omnichannel as livechat — let us know. It would be great to have your help with this.

Also, because Omnichannel is really one of our strongest assets, we’re putting more into it by improving its analytics. Our new analytics, reflecting industry standards, include average time response; average duration of conversation; and some reporting about specific users. And it doesn’t stop there — more analytics are coming in the future.

## Performance Improvements

In November we brought a lot of performance improvements to the foreground. We’d like to bring to your attention how we’ve been tackling performance bottlenecks by removing some publications and changing them to a single REST endpoint. This involved replacing livechat subscriptions like pages visited, externalMessages, departmentAgents subscription, and visitor Information, as well as personal Access Tokens and snippetedMessage. This is ongoing work, and there are more replacements to come. This boosts performance because of a smaller memory footprint.

The front-end team is also working on improving performance by removing computations from message templates. This results in fewer points of recalculation the system tracks for rendering something when settings change. We know these changes don’t happen often for example, only when an administrator is changing some settings. So, we thought that rather than put the calculations on the message level, move them into the context of the whole UI. Of course, on any settings change, the entire screen is recalculated, but now that event is less frequent. The bottom line is it saves a lot of memory and processing cycles when these computations aren’t inside each message.

Since our goal is to make Rocket.Chat as efficient as possible, we’re in the process of moving a lot of the libraries that Rocket.Chat uses to a Lazyloading interface. This means that features only load into the browser as needed. So far, we’ve moved the livechat, Chart, and QRcode libraries. It makes the download bundle slimmer and parsing is faster. Because this all improves user experience, we’ll continue moving libraries. And to slim down even more, we’ve started searching and removing unused subscriptions, at this time we removed the EmojiCustom subscription.

## Progress incorporating React

We’ve rewritten a big chunk of the Administration UI to incorporate React. In the admin interface you’ll now see that all sections below the search bar are using React components and Fuselage—our new design system for components. Check out the [Rocket.Chat Fuselage GitHub repository](https://github.com/RocketChat/Rocket.Chat.Fuselage).

The UI should be snappier and only dynamically load when required. You’ll notice that the design looks a lot fresher and very clean. We’re also targeting the components of the screens above the search bar. Please give it a try and help us out with feedback. If you like it, let the front-end and design teams know. And let us know what you don’t like about it, so that we can make it better. Thank you.

## Bug Fixes

Among several bug fixes we’d like to point out that we’ve completely resolved issues on the settings for audio on alerts and channels. Now your sound settings for notification channels are working as expected, and there will be no noisy surprises.

To get the full report from Gabriel, watch our November video at <https://youtu.be/SG_itf3wJ_U> . We’ll soon be back with news for the month of December.