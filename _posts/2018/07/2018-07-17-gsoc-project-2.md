---
title: Dark mode and Black mode - New themes for Rocket.Chat's iOS app (GSoC 2018
  project)
date: 2018-07-17 08:00:00 Z
categories:
- News
author: Isabella Russell
cover: "/images/posts/2018/07/2018-07-17-gsoc-project-2/iPhone X-dark-mode-cover.png"
featured: true
ios_release: true
---

_This series of blog posts will share the [Google Summer of Code](https://rocket.chat/docs/contributing/google-summer-of-code) projects that our 2018 cohort of students are working on. Community members are encouraged to join them in creating and testing these exciting new areas of features.<br/>Each project will have their open source repository listed.  Please feel free to drop in and say hello, or join in the action with your own issue or code contribution.<br/>_

## Dark mode and Black mode - New themes for Rocket.Chat's iOS app
**Student: Samar Sunkaria    Mentors: Matheus Cardoso, Filipe Alvarenga**

Welcome back to our 2018 GSoC blog series! Up next is Samar's project that aimed to help users to choose from a three new themes in the Rocket.Chat iOS app. All of us have different tastes in terms of color and style, and this project has helped us make sure that a greater number of people really enjoy the app to its fullest potential!

The project started from an issue on GitHub, which then graduated to the ideas list for Google Summer of Code. This is where it was picked up and it has since been brought to life over the summer.

### Just in time for iOS 3.0.0

Rocket.Chat's iOS native app has been rapidly gaining features and increased stability since the beginning of this year (2018).  As of July, after hundreds of revisions, feature enhancements and bug fixes - the iOS app has become a solid world-class app capable of holding its own among the best production apps available on the App Store.  That's when team lead Rafael Kellermann Streit and project lead Matheus Cardoso noticed that the user experience was falling just short of perfect...

That is where Samar's GSoC project comes in! Thanks to Samar's hard work, users will now be able to choose between Light, Dark and Black mode, which is especially exciting as the themes developed are among the key features of this newest native app release: Rocket.Chat for iOS v3.0!

![suite of themes](/images/posts/2018/07/2018-07-17-gsoc-project-2/Artboard1 cover.png)

As Samar says, now that the app is live with its new themes,

> "it is fascinating to compare [the finished result] with the project goal originally submitted as part of the GSoC proposal."

In the original proposal Samar suggested

> "adding the ability to theme the app on a per view controller basis including all the subviews contained in it."

This is actually the form the themes have taken and so Samar feels it is very exciting to know that the project stayed true to its original goals and intentions.

### Improving UX

This project is rooted in improving the user experience of the app. There are many factors that play into making an app enjoyable to use, and we really hope that this feature is one of them.

Samar's work also goes some way towards bridging the gap between the ultra-customizability of the web interface versus the mobile apps. With the completion of this project, it is hoped that we have inched closer in the direction of total customizability of the iOS app.

![all devices and themes](/images/posts/2018/07/2018-07-17-gsoc-project-2/all-devices-and-themes.png)

### Overcoming some technical challenges

One of the major technical challenges that potentially impeded this project was keeping all the theming-related code at arm’s length of the rest of the app's code. This is where Swift shines. Pretty much all of the code related to theming the application is declared in extensions,which also allowed us to provide some basic behavior for all the frequently used UIKit classes. <br/> This greatly reduced the code the team had to write to theme each view. In several cases, no extra code was required to be added to a view, to enjoy the benefits of being themed.

This project touches every part of the app, and anyone else working on the codebase should also be clued into working with themes, so a doc has been created to walk them through its usage
and implementation: <https://github.com/RocketChat/Rocket.Chat.iOS/pull/1602>

### About the creator: Samar Sunkaria


Samar Sunkaria has finished his third year of a Computer Engineering degree. In his own words:
> "I love to tinker around with software, make stuff and see things spring to life from lines of code. This perpetual desire to make something new, and learn tons along the way brought me to code on mobile apps, just because of the instant gratification of running something on your phone, and showing it to the people around you."

Working with Rocket.Chat over the summer 'was an absolute blast'. Samar has particularly enjoyed working on a project with multiple people working on the same codebase, 'marching towards the one unified goal of making a great app'. He feels he has learnt a lot over the past few months through contributing to several different projects and issues aside from his own designated project for GSoC, and is now even a collaborator on the Rocket.Chat.iOS GitHub repository!

We are really happy to hear that Samar feels the Rocket.Chat team have helped him identify the educational path he wishes to pursue next.

What's next for Samar? He will now take some time out and pause his graduation to attend the Apple Developer Academy in Italy- exciting stuff!

Any parting thoughts?

> "I honestly feel that it would be a great summer for anyone who has had the privilege of enjoying it half as much as I did."

Great news! Thank you for your contribution to Rocket.Chat this summer!

![samar sunkaria](https://scontent-bom1-1.cdninstagram.com/vp/9678abd64209a9b3525de621d3a0c6a3/5BD38779/t51.2885-15/e35/15803605_952240744912926_8876631162315866112_n.jpg)
