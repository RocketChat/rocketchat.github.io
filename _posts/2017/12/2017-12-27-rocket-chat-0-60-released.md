---
title: "Rocket.Chat 0.60.0 Released"
categories:
	- Releases
	- Apps
date: 2017-12-27 10:00:00
author: Sing Li
server_release: true
---

**WARNING:** BREAKING change when upgrading to 0.60.0. Any user running directly from source/compiled code and upgrading from older versions to 0.60.0 *must* first install [Node.js 8.x](https://nodejs.org/en/download/) in their environment. Rocket.Chat 0.60.0 requires Node 8 to run correctly. If you are using Docker or Snaps just ignore this warning.

## Rocket.Chat Server Release 0.60.0 Available Immediately

Today, the Rocket.Chat team is delighted to announce the immediate availability of Rocket.Chat server release 0.60.0.


This release brings together over a month of features development and bug fixes, and significantly improves the stability and usability of the new UI introduced since 0.59.0.

### Node 8 Support for Developers

Our developers community need to note that this version upgrades Meteor to version 1.6 and brings with it the long awaited Node 8 support.

### LDAP Improvements and TCA

<div class="left copy">
	<p>Of note are major improvements in our LDAP handling for sites with very large user base; implementation of Token Controlled Access (TCA) to channels in partnership with Tokenly;</p>
</div>

<div class="right image">
	<p>
		<img src="/images/posts/2017/12/rocket-chat-0-60-released/tokenly-icon-horiz.png"/>
	</p>
</div>
<div class="clear"></div>

### LiveChat Agent for Facebook Page's Messenger

<div class="left copy">
	<p>LiveChat users will welcome the brand new support for direct inquiries originating from Facebook pages' messenger app.</p>
</div>

<div class="right image">
	<p>
		<img src="/images/posts/2017/12/rocket-chat-0-60-released/facebook_messenger_integration.png"/>
	</p>
</div>
<div class="clear"></div>

### Right to Left Language Support Improvements

Global users operating with Right to Left languages will notice drastic improvement when working with Rocket.Chat. Thanks to our GitHub contributor [@cyclops24](https://github.com/cyclops24) for fixing various long standing RTL bugs.

![RTL chatbox and menu](/images/posts/2017/12/rocket-chat-0-60-released/RTL_chatbox_and_menu.png)

###  Notification improvements

Numerous notification improvements are available in this release, including the widely requested option to set mobile devices to be notified of new messages regardless of presence status.

### Better support for mobile clients

<div class="left copy">
	<p>This new version adds APIs that make communicating with our native mobile clients significantly faster and enable features such as slash-commands, and reply from notification on iOS.</p>
</div>

<div class="right image">
	<img src="/images/posts/2017/12/rocket-chat-0-60-released/mobile_reply.png"/>
</div>
<div class="clear"></div>

### More Information on Release 0.60.0

For details of what is included in this exciting 0.60.0 release, please see our [release notes](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.60.0).
