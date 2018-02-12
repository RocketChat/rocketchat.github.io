---
title: "Announcing the Rocket.Chat Zapier Integration"
categories:
- Releases
- Features
date: 2017-05-24 10:30:05
author: Bradley Hilton
cover: /images/posts/2017/05/announcing-zapier-integration/zapier-logo-colored.png
redirect_from: /blog/announcing-zapier-integration
---

Do you want to connect all of your most valued resources and use Rocket.Chat as your hub of communication?

## Fantastic idea!

The stumbling block: you have limited development expertise and you simply cannot get Rocket.Chat's Incoming and Outgoing Integrations to work for you.

Our solution for you: Rocket.Chat's Zapier Integration.

[What exactly is Zapier?](https://zapier.com/learn/getting-started-guide/what-is-zapier/ "What is Zapier?")

Zapier is an online service that helps all of your applications work together.

A Zap is an automated workflow that connects two or more apps; when something happens in one application, an action is triggered in another. Zaps can be simple or as complicated as you need them to be.

Zapier provides an incredibly flexible and powerful infrastructure that makes connecting Rocket.Chat to other applications easy and intuitive.

Our Zapier Application is in invite only status. However, once we reach at least 10 active users, we will then be able to apply for public beta. Public beta will allow anyone to see our application listed on Zapier's directory, which already contains more than 750 that you can connect to.

## Getting Started

Before we get started, please ensure that your Rocket.Chat server's version is at least v0.49.3.

Once this is verified, getting started is easy. You will need a Zapier account to start using it, so if you don't already have one then head on over and [create a free account now](https://zapier.com/sign-up/ "Zapier Sign Up"). Once your Zapier account is ready, log into your Zapier account and click this [invitation link](https://zapier.com/developer/invite/32270/7c3feadc825db6ae9023ea2983e88875/) ([http://bit.ly/2rLotv5](https://zapier.com/developer/invite/32270/7c3feadc825db6ae9023ea2983e88875/)). You will see an invitation screen which looks like the screenshot below:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/invite.png?)

Press the orange "Accept Invite & Build a Zap" button to add the invite only application to your Zapier account.
Note: You will not be able to see Rocket.Chat in the Application Directory until you accept this invite -- or until our Zapier application goes into public beta.
After you click to accept, you will be taken to the following screen:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/first-zap-blank.png?)

## Creating Your First Zap

Now that you have accepted our invitation, let's create your first Zap with Rocket.Chat. We will connect Google Calendar and create an event whenever you say a phrase like "!calendar Zapier Review tomorrow at 4pm" in a private channel.

Until further notice, please do the steps listed on our [Zapier Documentation](https://rocket.chat/docs/administrator-guides/integrations/zapier/#zapier) to ensure your Zapier settings inside Rocket.Chat are up to date. [https://rocket.chat/docs/administrator-guides/integrations/zapier/#zapier](https://rocket.chat/docs/administrator-guides/integrations/zapier/#zapier)

First up, select the Rocket.Chat application and then select the "New Message Posted to Private Group" trigger as seen in the following screenshot:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/zapier-select-trigger.png?)

Click "Save + Continue" and the next screen will have you connect your Rocket.Chat account to Zapier.
Click on "Connect a New Account" then, in the window which pops up, enter the domain where your Rocket.Chat is accessed publically from and include the last slash.

In this example, I will use "https://zapier-test-1.rocket.chat/" as my domain.

If you click continue, and are not currently logged into your Rocket.Chat, you will be brought to a login screen. After you login, or if you were already logged in, you will be presented with the following screen:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/oauth-screen.png?)

Click the "Authorize" button and your Rocket.Chat account will now be connected to Zapier.
Now, click the blue "Save + Continue" button on Zapier to select the private group you want to use. Note: The private group should already exist.

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/private-group.png?)

Click on the blue "Continue" button.

Now click on the blue "Connect & Continue" button: Zapier is now waiting for you to send a new message inside the private group you selected.

I would recommend that you send something like "!calendar Zapier Review tomorrow at 4pm".

Once this is complete and Zapier sees your message, click on the orange "Continue" button. This is where Zapier tells you that your Zap is lacking an "Action" step, go ahead and click the link prompting you to add one now.

The first step is to ensure the message Zapier is handling starts with "!calendar", so the first action we need is the "Filter".
Once you have that selected, the "Only continue if"¦" will appear. Click the blue "Save + Continue" button and fill it out like the screenshot:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/private-group.png?)
"The message's text" -> "(Text) Starts with" -> "!calendar"

Once completed, click on the blue "Continue" button.

Then click the blue "Test Filter" button and ensure it passes. If it does, then click the gray "Add a step" button.

We now need to remove the "!calendar" text so that Google doesn't try to parse that text.

We do this with Zapier's "Formatter" Action. Click on that one and then select the "Text" action:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/formatter-action.png?)

Click on the blue "Save + Continue" button. Go to the "Transform" drop down and select the "Replace" option. Fill it out with something similar to the following screenshot:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/formatter-filled.png?)

The input field should be the message from Rocket.Chat's event and the find should be the value "!calendar[:space:]".

Click the blue "Continue" button and, on the next screen, click the blue "Create & Continue" to verify it correctly removes the "!calendar" text.

Once that is successful, then click the gray "Add a step" button.

Since we are going to connect Google Calendar, search for calendar and then select Google Calendar.

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/google-calendar.png?)
Since we are wanting to create a new event via a message, select the "Quick Add Event" action and then click the blue "Save + Continue" button.

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/calendar-action.png?)

Connect your Google Calendar account if you don't have one already.

Once your account is connected, click the blue "Continue" button. The Google Calendar "Quick Add Event" details screen should now be visible; select the calendar you want the events to be created on.

Then, on the "Describe Event", click the input field's right icon and from the drop down select Step 3's "Text" option:

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/calendar-action.png?)

Once you've done that, click the blue "Continue" button.

On the next screen click the blue "Create & Continue" button, verify your event was successfully created and click the orange "Finish" button.

Now you can turn your Zap on and use it to schedule meetings on your calendar. Awesome!

![](https://cdn-my.konecty.com/rest/image/outer/1/750/rocketchat/BlogPost/28/images/zap-done.png?)

We look forward to hearing all the different applications you connect together to bring your data in and out of Rocket.Chat! You can let us know via our [Facebook](https://www.facebook.com/RocketChatApp/) or Tweet us [@Rocketchat](https://twitter.com/RocketChat)
