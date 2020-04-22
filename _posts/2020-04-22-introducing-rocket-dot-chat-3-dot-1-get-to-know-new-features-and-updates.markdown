---
title: 'Introducing Rocket.Chat 3.1: Get To Know New Features & Updates'
date: 2020-04-22 10:36:00 Z
---

After significant development and thanks to our team and community, we are delighted to announce the arrival of Rocket.Chat 3.1.0, full of exciting features!

In this post, we will give you a quick overview of the main features brought by our latest release. Find the entire list of new features, updates, and bug fixes here.

## 🚀 New features released with Rocket.Chat 3.1

## #1) Direct messages between multiple users

Thanks to this feature, there is no need to create a private channel to have a chat with multiple users anymore. 

Just go to **Create New (last icon on top right corner) > Direct Messages **and choose as many users as you want to have a direct discussion with :)

![direct messages.gif](/uploads/direct%20messages.gif)

Important: every room composed of a certain group of people is unique. This means that if you wish to include more people in your direct messages, another room for direct interaction will be created.

## 
\#2)  A Brand New Engagement Dashboard (Enterprise Edition)

![engagement.gif](/uploads/engagement.gif)

The Engagement Dashboard shows the administrator how his team is using Rocket.Chat's server. It presents stats about the usage in terms of users, messages, and channels. Through the panel, you'll find relevant information such as:

* Top 5 most popular channels

* Periods of the day when the chat is busier

* When your team is most active at Rocket.Chat

* What channels you currently have

Only available for Enterprise clients, administrators can access it by clicking in **Administration > Engagement Dashboard**.

## #3) Enterprise Edition Merge

We combined Rocket.Chat Enterprise Edition (EE) and Rocket.Chat Community Edition (CE) into a single codebase. We foresee numerous benefits to the community after this change; read more about the reasons behind it and  details [here](https://rocket.chat/2020/03/28/moving-to-a-single-codebase/).

As the Community Edition remains open source and MIT licensed, this change is planned to run smoothly.  The only actual difference  is that Enterprise Edition becomes source-available with a proprietary license.

Now, you'll find a folder called **ee** when accessing GitHub's repository. It has the entire Enterprise codebase under a different license:

![Screen Capture on 2020-04-20 at 21-54-35.gif](/uploads/Screen%20Capture%20on%202020-04-20%20at%2021-54-35.gif)

Rocket.Chat is still free and open-source as always; but since the code is more transparent, users now can read and check the code of EE features. Also, it is worth mentioning that you are able to delete the entire EE repository if you wish to.

## #4) Setting to enable E2E encryption for Private and Direct Rooms By Default (BETA)

Rocket.Chat has always been a safe platform to communicate. And you can never be too careful in times when **zoombombing** (when strangers join your private videoconference without permission) becomes a thing.

This feature allows every conversation room to have E2E encryption. Since it is not activated by default, you will need to do that by following these steps: 

Access **Administration**> **E2E Encryption> Enabled**, then define if you want to Enable Encryption for Direct Rooms and/or Private Rooms by default.

![e22.gif](/uploads/e22.gif)

Important: Since E2E Encryption is still in beta, we don't support it on mobiles yet.

## #5) Two Factor Authentication Via Email

Another great feature to ensure security to users when performing certain actions in Rocket.Chat. **It adds an extra verification step** by asking for a code sent to the user's email to be able to proceed with a certain action.

For instance, if you wish to update your profile status or your name, or if you are an administrator editing someone else's profile, the system may require an extra confirmation of your identity.

The email code will only be required if the email is verified and if no TOTP was configured. This feature is optional per user and server-wide and will be enabled by default only for new installations.

**Here's how you can activate it if you are a regular user:**

![2FA.gif](/uploads/2FA.gif)

In addition, administrators can disable the feature or determine if the feature will be available for the users and if they will "auto opt-in". Just access **Administration > Accounts > Two Factor Authentication **and define the system preferences for your team.

## #6) Translation via MS Translate

A brand new option to translate your message, this feature allows anyone's message to be translated through Microsoft's translation service, with an interface very similar to Google and DeepL.

## #7) Save Time With The Info Panel For Agents (Omnichannel)


This feature allows agents to see all information regarding clients automatically when they enter an omnichannel room.

Ultimately, it should save time for agents dealing with massive tickets to quickly edit information, close or forward the conversion.

## 
\#8) Last, But Not Least: Merging Sort List \+ View Mode


We merged the Sort List and the View Mode to improving Rocket.Chat's user interface and design. Now, you can do the following things from the same menu:

* Sort conversations by last activity or alphabetical order

* View conversations in extended, medium or condensed mode

* If you want to group discussions or no; in case yes, you can group them by type, favorite or placing unread ones on top


In order to access it, just click in Sort (top left menu) and define your preferences:

## Next Steps: How To Update Your Rocket.Chat To Version 3.1?


**If you host in our cloud: **The release happens automatically on our cloud, which means that no further action is required from your side. In addition, as upgrading instances might take a few weeks, feel free to reach out to ask us to upgrade your version for you sooner.


**If you use the self-managed version: **Depending on the installation mode, you might need to update your server manually. It should be easily done by following these instructions.

## **Got questions? Want to learn more about the behind-the-scenes in Rocket.Chat?**

![Screenshot 2020-04-22 at 11.41.33.png](/uploads/Screenshot%202020-04-22%20at%2011.41.33.png)

**[Join the Ask Me Anything, with Gabriel Engel, Rocket.Chat's founder & CEO](https://rocket.chat/2020/04/24/ask-gabriel-anything/?utm_source=blog&utm_medium=banner&utm_campaign=amagabriel)**

A live session with our founder & CEO, Gabriel Engel to explore product releases, improvements and answer questions from clients and the community.

**Date**: 24th April at 2:00 PM (GMT-3)
**How to save your spot?** 👇🏾

1. Enter the AMA official Rocket.Chat Group [here](https://open.rocket.chat/channel/ask-gabriel-anything)

2. Post your question there & we'll keep you updated about the next steps.