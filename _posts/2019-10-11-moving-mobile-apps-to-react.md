---
title: Rocket.Chat is moving its mobile apps to React Native
date: 2019-10-11 21:50:00 Z
categories:
- News
- Product
author: Rodrigo Nascimento
cover: "/images/posts/2019/10/2019-10-11-moving-mobile-apps-to-react.png"
featured: true
---

# Rocket.Chat Reacts!

## Rocket.Chat is moving its mobile apps to React Native

You may have noticed a lot of recent changes with the mobile apps.

Rocket.Chat has been maintaining two native versions of the mobile app, one for Android and one for iOS.
This has proved to be quite problematic and we had to split our resources which is inefficient.
We therefore made the decision to build a new app based on a common framework.
After months of deliberation, testing, and lots of community help, we have finally decided to move to the proven [React Native](https://facebook.github.io/react-native/) framework.

The benefits to users:

- We can concentrate our resources on one codebase rather than two different versions
- Every platform gets the same features at the same time thanks to one codebase
- We can ensure consistency of UI across the two native platforms
- More resources means we can ship new features faster
- More resources means we can fix bugs faster
- Easier contributions in JavaScript; no more Kotlin + Swift + JavaScript
- This will more closely match the web UI being developed in React

As a result of this move, the old Android and iOS apps will be deprecated and seamlessly replaced.

### Join us on this new and exciting chapter in the development of Rocket.Chat!

Please read on if you want to understand a little more of the history behind this move.

## A little more history

Back on August 3rd 2017, after various ongoing technological struggles fixing bugs and releasing features on the Native apps, we decided to start the React Native project with this [first commit](https://github.com/RocketChat/Rocket.Chat.ReactNative/commit/19c8b877759804622fea5efdbd4243465ead2959). At the time it was just an experiment on how we could develop with React Native, and how it would perform compared with the Native apps.

With three developers working in their spare time on this new project, we had a working version in just a few weeks. We decided to make the project official inside the company and to bring in a new and full-time developer to move the experiment forward. We had both the native Rocket.Chat mobile apps under development, and were considering the idea of rewriting the web-client using React, so it seemed to be a good match to allow the developers to deliver the UI via Apps on both the web-client and mobiles.

With the end-user experience in mind, we kept the React Native app as an experimental project with the objective of testing the new technology, getting community feedback and seeing how the community contributors would accept it. We then decided to release the new app as the new Rocket.Chat Experimental app alongside the Rocket.Chat native ones in the stores, but always keeping the Native as the official ones, and updated.

During this process some of our mobile developers decided to move on. We decided to hire new ones, but as we now had the idea of replacing the native mobile apps with the new Experimental mobile app we decided to redeploy our resources, keeping one native developer of each team to help on the native parts of the new apps and to keep maintaining the native SDKs.

We started to move more slowly with new features on our native apps for two main reasons. We would not need many native developers once we were using the replacement app. We wanted feature parity to be able to replace the native apps, which would be hard to achieve if the native teams had 6 times the number of developers that the React Native team had.

Finally, a few months ago we reviewed the star ratings we were receiving in the app stores for each app, the new app usability vs the native apps, and how fast we were moving on the React Native app in development terms. This led us to the decision to migrate from the native apps to the React Native one, and make it official to the public.

Apart from themes and tablet support, we now have both iOS and Android features in sync and are almost finishing everything necessary to replace the native apps. We believe that this change will help us, as developers and as a company, to deliver a better product, faster, reliable, and in sync with the web features.

We are a JavaScript project with JavaScript developers, and this change will allow our whole team, and the entire community, to help with the product development.

In the future, this may allow us to run teams by feature, rather than one monolithic team with every member knowing every conceivable part of the ecosystem. We can have specific areas of knowledge that overlap where required, which will enable us to concentrate knowledge and be more agile.


## The future

The React Native replacements will start in October and will land as beta versions first. After a few weeks of testing, we will start to replace the old versions for everyone. The iOS replacement will happen later this year. The native iOS version had more features than the Android native version, and we decided we would not release it without the feature parity, or at least the most important features.

Both replacements should not affect how you stay in sync with your team(s) conversations. You should not be required to log in to the app again on the update. As a result, we should have a seamless transition and avoid the issues we had as reported in [this blog post](https://rocket.chat/2019/08/26/android-app-3.5.1-update-issue/).

After the replacement, we will still keep the “Experimental” version of the app alive. It will become our “Development channel” allowing users to test both the Official version and the Experimental version at the same time.  Both versions will share credentials via Group ID which helps users maintain their credentials in sync, and to test the new features.

### The Android replacement

We released an Android version 4.0.0 on Google Play beta on October 2nd. We plan to release it as public version on October 14th. The codebase was completely rewritten in Javascript using React Native, but both Android and iOS replacement should not require the user to log in again.

With the new React Native app, our Android version is soon going to receive exciting new features:

- Share Extension
- Threads support
- Favorite, hide or read channels right from the channels list
- Record audio and video
- Notification preferences
- Grouped messages
- Custom fields on signup

We’re working to have grouped notifications and instant reply from notifications in a future release. When iOS replacement happens, the Android app will receive Themes and Tablet support. One of the wonders from React Native is code sharing!

Meanwhile, make sure to [join our beta on Google Play](https://play.google.com/store/apps/details?id=chat.rocket.android).

### The iOS replacement

The reason we won’t replace iOS and Android at the same time is we’re still working to achieve feature parity with the native iOS app. We plan to release a beta by the end of October and the full replacement by November. The same behavior on Android applies to iOS. It’s a completely different code base, but it shouldn’t require users to enter their credentials once again on update.

One major difference between the iOS and Android native apps is the themes and tablet support that the iOS version has. We are in the process of adding this to the React Native version so that when we come to replace the iOS native version there will be no noticeable differences.

At this point the Android user base should have all been migrated to React Native at version 4.0.x so that when 4.1.0 lands it will finally bring iOS and Android into line.

## Beyond

There’s a bright future ahead of this new app. We have plans to work on new features, but we know you care about stability, and we do as well. Here’s a quick list of some of the exciting new features in our pipeline:

- End-to-End encryption
- Accessibility
- Full Discussions support
- Omnichannel support
- Push notification encryption
- Create a UI lib sharing components with web

Please feel free to add to them as a New Feature Request in the [React Native repository](https://github.com/RocketChat/Rocket.Chat.ReactNative) with a title like:

> [NFR - new feature I would like to see]

Of course Pull Requests with you code are always welcomed!

Come and join us to build the best Open Source chat platform in the world!
