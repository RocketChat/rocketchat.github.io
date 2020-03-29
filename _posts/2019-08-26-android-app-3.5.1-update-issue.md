---
title: Android native app upgrading failed on Google Play?
date: 2019-08-26 12:00:00 Z
categories:
- News
author: Marina Vdovkina
cover: "/images/posts/2019/08/postmortem-android-3.5.1.png"
featured: true
---

Android native app users on Google Play may encounter failure when upgrading from 3.5 to 3.5.1.  

This problem is [widely reported](https://github.com/RocketChat/Rocket.Chat.Android/issues/2461).

### 3.5.1 Android Native app is up and running

First the good news, we are pleased to announce that the Android native app 3.5.1 is fully functional and no damage is done.

Unfortunately, we have to ask all our Android native app users to:

*  uninstall the app
*  reinstall the app 
*  re-login to their servers

By this time, we know that many of you have already done this.

So far no major issues have been detected with the latest app version. If you still experience any interruptions, please reach out to us at <mailto:support@rocket.chat> for help.

### What happened with the update?

As much as we strive to deliver a seamless service, yet we are discovering that there are a few things that are really fail-safe.
Lifting the veil, we have been cherishing an idea to migrate all our Android users to our React Native application (aka Experimental), and we still hope to have this done on a short-term horizon. In order for us to provide a smooth transition, we should have had specific data organized in our native application to spare our users' time and effort on re-adding their servers in the new application and signing in again.

A bitter piece of our experience shows that the changes that could have done the trick are irreversible. Well, not in a sound way. Basically, before we launch the [Rocket.Chat](https://rocket.chat) native application, we should have included a certain identificator which was supposed to be used by another app in future (Experimental in our case) to borrow the users' access details and servers, so that the migration would happen almost unnoticed to the user.
Apparently, this had been overseen as at the time of launching our first Android app we did not realize the necessity of the migration support. So, we ended up adding the required data to the latest version of Android app, hoping that it will still do its job.

However, it turned out that adding the identificator to the app after an initial install will make the application data inaccessible, as there is no way to add it through an update. That is the very reason why the update would fail for our Android users. Thankfully, deleting and reinstalling the application is still a workaround.

We've learnt from this experience and hope that the inconveniences caused by the hiccough to our Android users have not been critical.
We'd like to bring our sincere apologies for the interruptions to those who were affected, and assure that we'll do our best to ensure smooth updates in the future. Thank you for staying with [Rocket.Chat](https://rocket.chat) and for your continuous support!

Stay tuned for future updates. Let's keep the 🚀 flying!
