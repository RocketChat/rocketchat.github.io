---
date: 2017-12-06 10:00:00
title: How Classuite built their product with Rocket.Chat
categories:
  - Customer Success
  - Features
  - Community
date: 2017-12-18 08:00:00
author: Louise Message
cover: /images/posts/2017/12/how-classuite-built-their-product-with-rocket-chat/cover-classuite.jpg
redirect_from: /2017/01/22/improving-education-one-classroom-at-a-time/
---
Open source software, like Rocket.Chat, can reduce licensing fees, time and cost to develop software. Classuite used Rocket.Chat's mobile SDKs, customized the UI and features to rapidly and affordably create their classroom chat product for teachers and students.

## Styling the user interface

Classuite created a custom theme with bold colors and more spacing. They customized the right sidebar by removing advanced features, giving teachers and students easy access to essential actions like searching for users, viewing profiles and sharing resources. The result is a clean and simplified user experience, which is easy to learn but still lets students and teachers communicate and collaborate in real time.

![Classuite teacher profile](/images/posts/2017/12/how-classuite-built-their-product-with-rocket-chat/12-15-2017-classuite-teacher-profile.png)

[Read Rocket.Chat's documentation](https://rocket.chat/docs/developer-guides/ui-and-theming/themes/#custom-themes) on retheming a chat client.

## Channels as classrooms

Rocket.Chat's channels have been renamed to classes and are private by default. Only teachers can create a class and invite students to join by giving them a unique code to gain access. Modifying Rocket.Chat's privacy features enabled Classuite to create a secure clasroom-based chat system only accessible to the teacher and invited students.

> _“We want everyone - especially the students, who are oftentimes nervous or shy about expressing their opinions and experiences - to feel comfortable discussing their ideas, knowing that only their classmates and teacher will have access to the conversations.”_

![Classbot sends a unique class invitation code to a teacher](/images/posts/2017/12/how-classuite-built-their-product-with-rocket-chat/12-15-2017-classuite-teacher-class-creation.png)

Learn how to customize [Rocket.Chat's permissions](https://rocket.chat/docs/developer-guides/realtime-api/method-calls/create-private-groups/#create-private-groups) in the documentation.

## Extending the default chatbot

Classbot is a custom chatbot that greets users and introduces Classuite. Personalized user interactions show teachers how to create their first class. Students are encouraged to begin collaborating with peers through private and group messaging. Joining a new community can be challenging but Classbot explains where to begin and the next steps to take.

![Classbot shows a teacher how to start using Classuite](/images/posts/2017/12/how-classuite-built-their-product-with-rocket-chat/12-15-2017-classuite-classbot-teacher.png)

Learn how to set up your own chatbot with [Rocket.Chat's Hubot](https://rocket.chat/docs/administrator-guides/hubot/) in our documentation.

## Rocket.Chat's mobile SDKs

Classuite are using Rocket.Chat's mobile SDKs, which allow app developers to easily add real-time chat backed by a Rocket.Chat server to native Android and iOS apps, to create mobile apps with custom features for the classroom such as private workspaces, polls and richer resource sharing.

> _“Rocket.Chat made it possible for us to reach unforeseen development speed. We knew what we wanted to achieve with our product but we didn't want to reinvent the wheel, so relying on open-source software with a superb community has proven to be one of the best decision we have made yet.”_ - Joaquin Traverso

Learn how to use Rocket.Chat's mobile SDKs for [iOS](https://github.com/RocketChat/Rocket.Chat.iOS) and [Android](https://github.com/RocketChat/Rocket.Chat.Android) in our documentation.

## Experience open source team chat

Classuite are releasing their mobile app powered by Rocket.Chat's mobile SDKs in January 2018. To learn more about Classuite [visit their website](http://classuite.com).

To get started with your own customizable open source team chat solution, [download and install Rocket.Chat](https://rocket.chat/download) or [start a free 30-day Rocket.Chat Cloud trial](https://rocket.chat/cloud#pricing).

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@kellybrito?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from J. Kelly Brito"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">J. Kelly Brito</span></a>
