---
title: "Testing React Native for Rocket.Chat: a progress report"
categories:
- Product
- Case studies
date: 2018-11-13 08:00:00
author: Isabella Russell
cover: /images/posts/2018/11/2018-11-13-reactive-native-update/ios-prints-RN.png
featured: true
---

After years of success with React.js, described by its creators as ‘a javascript library for building  user interfaces’, Facebook released a new framework called React Native in 2015, using the knowledge of its ancestor to develop mobile apps for iOS and Android. Unlike alternative frameworks that build hybrid apps based on webviews, React Native creates truly native apps which is why it sparked our interest here at Rocket.Chat! You have probably already seen React Native in action without realizing: Facebook and Instagram are already using it in their apps for instance.

## Features

### Cross-platform collaboration

Standard app development using mainstream frameworks entails using separate teams for iOS and Android, making it harder to sync new features or spot potential bugs, let alone work on fixing them in a timely fashion. React Native changes all of that by making it possible to work across platforms and unite teams and their knowledge. Plus there’s a bonus: it’s also possible to share code with web developers thanks to React Native being based on React.js!

React Native also supports Flexbox which means you can use the exact same layout code and write apps for iOS, Android and web that are all driven by one shared codebase instead of having to learn three different engines. The same team can work on a new feature by sharing views, requests, status while another team review its pull requests.

### Readymade ecosystem

Being built on React.js brings with it a huge community to contribute and build libraries and tools to improve development, while ensuring you can use any npm module that suits your needs.
React Native enables you to BYOE (bring your own editor) to the room. Instead of being forced to use Xcode or Android Studio, you can choose from VS Code, Atom, Sublime Text, or even Vim if you’d like to.

### Hot reloading

React Native allows you to see changes instantly instead of having to wait until you restart your app to potentially spot any errors or changes that have not worked as expected.

### Live Updates

Thanks to React Native, it is no longer necessary to go through the pre-existing lengthy release process which used to involve sending the new release to the stores and waiting for Apple’s approval before seeing the next killer feature in the store, ready for download.
React Native has services like Microsoft’s VS App Center with its CodePush tool, which immediately releases updates to your users. The bottom line is that you can now publish updates to your app whenever you like.

### The cons

Although React Native has a variety of amazing advantages, it does have some downsides. [This blog post](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018) by Facebook provides insight into the current state of React Native, including what it is doing to invest in its future by working on a 'large-scale rearchitecture' to improve the framework's flexibility and its integration 'with native infrastructure in hybrid JavaScript/native apps'.

## Rocket.Chat and React Native

![react native rocket.chat](/images/posts/2018/11/2018-11-13-reactive-native-update/ios-RN-device-shots.png)

At Rocket.Chat we care about user experience and are always looking at ways to improve it, so we have been evaluating React Native for a while now by building it for our platform, and it's been awesome! <br/>Here is what we’ve built so far:

- Send message

![chat demo and send message](/images/posts/2018/11/2018-11-13-reactive-native-update/RN-chat-demo.gif)

- Authentication (OAuth)
- Message: Markdown, system messages, links, images, replies, alias, etc.
- Day separation
- Load more on scroll
- Multiple servers

![group channels](/images/posts/2018/11/2018-11-13-reactive-native-update/RN-order-chats.gif)

- Segmented subscriptions
- Change user status
- Upload image (take or choose from lib)
- Record and upload audio
- Upload files

![Upload files](/images/posts/2018/11/2018-11-13-reactive-native-update/RN-attachments-demo.gif)

- Sign up
- Autocomplete: Username, all, here, channels, emojis
- Terms of service and privacy policy
- Create channel
- Message actions: copy, pin, star, reply, quote, delete, etc
- Channels: Info, edit, members, pinned, starred, etc
- Star channel
- Block/mute user
- Archive/delete channel
- Offline reading
- Edit profile
- Reactions
- Custom emojis
- Deep links

And more! Watch this space for more updates as we continue to build our React Native-based platform for Rocket.Chat :)

Like what you see? Follow our progress and star us on [GitHub](https://github.com/RocketChat/Rocket.Chat.ReactNative)!
