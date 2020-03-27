---
title: Rocket.Chat 0.66 Released
date: 2018-07-17 08:00:00 Z
categories:
- News
author: Rocket.Chat Team
cover: "/images/posts/2018/07/2018-07-17-v66-release-post/0.66-cover.jpg"
featured: true
---

Rocket.Chat is pleased to announce its release of Rocket.Chat 0.66 with the following highlighted features and changes: <br/> (Please note: bug fixes implemented by 0.66.1 and 0.66.2 are detailed further below)

## Breaking Changes

To prevent information leaks, all REST APIs that return users' information will have the field `services` removed. Check if you are using this field for any integration. For more details check out the [PR](https://github.com/RocketChat/Rocket.Chat/pull/10799).

## New features:

- IRC Federation - Alpha stage
<br/>It’s now possible to use Rocket.Chat to send and receive messages from an IRC server. The IRC server can also join and participate on channels from the Rocket.Chat server. Direct messages between users from both servers are also available. <br/> With this feature, which is still in the early stages of its implementation, we are looking to have a better and stable implementation; as ever all contributions are welcome. <br/> This feature will also be our inaugural Feature Spotlight, coming soon to the blog. Watch this space!

- Youtube Broadcasting
<br/>This new feature adds an integration between Rocket.Chat and Youtube Live, when enabled and set up, your channel owners will be able to broadcast their camera feed live to the Livestream feature which allows all users on the channel to watch a common stream.

![live broadcast start](https://user-images.githubusercontent.com/6303966/37366741-0f4431e4-26e0-11e8-9ab2-03dd1c057aea.gif)


For full configuration details, check out our [YouTube broadcasting docs](https://rocket.chat/docs/administrator-guides/youtube-broadcasting/#youtube-broadcasting).

- WebDAV (Nextcloud/ownCloud) Storage Server Option
<br/>New option for file storage using WebDAV that allows any storage service compatible with WebDAV to be used as storage for Rocket.Chat uploads and avatars. NextCloud and OwnCloud are the 2 main services tested using this new integration option.

![WebDAV file storage](https://user-images.githubusercontent.com/14157973/41051962-3a63ef5e-69c0-11e8-9a8a-76ed36308dfb.png)

- Don't ask me again checkbox on hide room modal
<br/>Now it's possible to remember your choices in certain confirmation modals, for example, you can bypass the confirmation everytime you want to hide a chanel. It's possible to revert the `Don't ask me again` at user's profile page.

![don't ask me again checkbox](https://user-images.githubusercontent.com/9200155/40859260-925dd0f6-65b7-11e8-97fe-dc00de049044.gif)

- Optional AWS access key and secret optional for S3 uploads
<br/>It's now possible to use AWS S3 for storage without credentials since the AWS SDK will try to receive the credentials automatically in certain cases, when running in a EC2 for example.

- Updated WeDeploy deployment
<br/>Users can now deploy to WeDeploy by just clicking on `Deploy at WeDeploy` at our Readme.md file.

![WeDeployment](https://user-images.githubusercontent.com/23219848/40334544-404c1ce8-5d13-11e8-939b-d84c2d82696f.png)

- Button to remove closed LiveChat rooms
<br/>Sometimes the LiveChat administrators want to remove the LiveChat closed room history from their database. This is now possible when the user is logged in as a LiveChat manager. To remove a closed LiveChat room, the user only needs to navigate the sidebar in LiveChat -> Current chats.

![new button for closing LiveChat rooms](https://user-images.githubusercontent.com/2067649/38212655-ea53a4b8-3694-11e8-9c6e-1c3a53bf7b2d.png)

- Send LiveChat visitor navigation history as messages
<br/>The purpose of this feature is to send the navigation history of the LiveChat visitor as a message.
Using this feature, the agent who joins the chat will be notified each time the visitor's navigation is changed.
By default, this feature is disabled. To activate it, simply access the LiveChat administrative panel:

![LiveChat visitor nav history](https://lh6.googleusercontent.com/zMLr4cd0bfuZGCUJgwn_alRbJa0kH8oz-2s0gwjuAM1YLY43AGvnz4wLZL2DM6si42nYedOx898QjsMKGefhbfKPdvXx7pxOWcWA_u--NIj-C3wReijhLATVYB43YTxMFp6kfIyg)

So, the information about the navigation will be displayed as a message into the LiveChat room, but the visitor will not be notified:
![message notification](https://lh5.googleusercontent.com/M8qZ6EQBc36dV1GqnFNW5iEyHRFiNMBbGP8cOIG1knVNPmn6ur8dH_G1IqMt8E0VJEL3KrZO20qdNRIA-p4csLoLm5OTQRCdmEOEOQdCNBP2-qCchx405KJ35LOktPH94cfkVfhE)

#### APIs

- REST API endpoints `permissions.list` and `permissions.update` & Deprecated endpoint `permissions`
2 new endpoints were added to REST API v1, `permissions.list` and `permissions.update`. The old endpoint `permissions` was deprecated and will be removed in the future.

- REST API endpoint `channels.setDefault`
New endpoint to REST API v1 `channels.setDefault` to set channel as default for new users.


### Performance

We have been adding some improvements to our performance, the first wave was related to monitoring using Prometheus, reducing the amount of unnecessary websocket connections and reducing the amount of DDP calls for non-logged users.

- Add prometheus port config
If you are running Rocket.Chat and want to monitor the internal details of methods, sessions, etc., it's possible to connect Prometheus to the Rocket.Chat instances and now it's possible to configure the port you want to grab the information from in case the default port `9100` is already in use.

- Disconnect users from websocket when away from the login screen for 10min
From this version users who spend 10 minutes away (without focus) from the login screen will have their websocket disconnected. The connection will be restored as soon the user focuses on the page again. <br/> This prevents the multitude of unnecessary connections to the backend. At open.rocket.chat we reduced the amount of unauthenticated connections from thousands to a few hundred.

![connection data](https://lh6.googleusercontent.com/rlXIO2RLkCmAp8vdGGFaCotiZrBEJ6xMbwMnAIS1usCjiUf1BvYJ7X68qpCn27R4rYQlcYSrRy2yanRG_z7nrJSU6SbSKPRpQaV5rI7pKypw1pjyNW4Ajr2stB5zmwcmMCK7Zxvg)

- Reduce the amount of DDP API calls on login screen
The login screen was requesting unnecessary data which was making the process busy when lots of unlogged users were accessing the login screen.

![reduction of DDP API calls data](https://lh4.googleusercontent.com/Z1YYpnrHx_ImuycGHuwQhL-wBfkEWkslcXdAYHC3iHcloqeOoy56VoQD01IJoXl8aQ2jwdprO50l6sFdW6eOAVVzxNYAO8I8Xk_-TyURZu3o441f5oIDBUt7TwjxqrU_-cr4mLsv)

## Bug fixes

We fixed lots of bugs for this release, including:

- Livechat icon with status

Before:
![livechat status before](https://lh3.googleusercontent.com/0Dn52oVUBaiicc6uuPCpvCxoCChAmF8p3iOi3n4xpucQ7K1p4kgthZJYdE7LBzreamgKLOsErf75oYpKJbgYHw-RrZ9SHEo4pbrpcZuH8BxnJ1Opjt0NvCzVjYDgXyqYU0iCHHp8)

After:
![livechat status after](https://lh5.googleusercontent.com/BJmOm8X9-ph9IpM-c5wggvLPnyPatjQUJ-JcQg-iQ3FEJsqZYjMSVduza4hF41rzKJu4oEB_obUfEpUetFUNgqbhD_Mo-fGxE49VZkJTTDT2RrvjYiBh3pOlIDTcgqjOHzKsjE6O)

([#11177](https://github.com/RocketChat/Rocket.Chat/pull/11177))

- Wordpress OAuth not providing enough info to login
The /settings.oauth API endpoint was not listing all of the Wordpress OAuth settings.
([#11152](https://github.com/RocketChat/Rocket.Chat/pull/11152))


- /groups.invite not allow a user to invite even with permission
The /groups.invite API was not checking if the user had permission to invite other users to any group, even if the inviter hasn’t joined it themself.
([#11010](https://github.com/RocketChat/Rocket.Chat/pull/11010))

- Message_AllowedMaxSize fails for emoji sequences
The setting `Message_AllowedMaxSize` now counts emoji correctly.
([#10431](https://github.com/RocketChat/Rocket.Chat/pull/10431) by [@c0dzilla](https://github.com/c0dzilla))

- Rooms list sorting by activity multiple re-renders and case sensitive sorting alphabetically
The rendering performance of the rooms list was improved and the sorting is now case insensitive.
([#9959](https://github.com/RocketChat/Rocket.Chat/pull/9959) by
 [@JoseRenan](https://github.com/JoseRenan))


- flex-tab icons missing ([#11049](https://github.com/RocketChat/Rocket.Chat/pull/11049))

- Exception thrown on avatar validation ([#11009](https://github.com/RocketChat/Rocket.Chat/pull/11009))

- Preview of large images not resizing to fit the area and having scrollbars ([#10998](https://github.com/RocketChat/Rocket.Chat/pull/10998) by [@vynmera](https://github.com/vynmera))

- Allow inviting LiveChat managers to the same LiveChat room <br/> ([#10956](https://github.com/RocketChat/Rocket.Chat/pull/10956))

- "blank messages" on iOS < 11 ([#11221](https://github.com/RocketChat/Rocket.Chat/pull/11221))

- "blank" screen on iOS < 11 ([#11199](https://github.com/RocketChat/Rocket.Chat/pull/11199))

- The process was freezing in some cases when HTTP calls exceeds timeout on integrations ([#11253](https://github.com/RocketChat/Rocket.Chat/pull/11253))

- Internal Server Error on first login with CAS integration ([#11257](https://github.com/RocketChat/Rocket.Chat/pull/11257))

## Minor changes

- [IMPROVE] Listing of apps in the admin page ([#11166](https://github.com/RocketChat/Rocket.Chat/pull/11166))
- [IMPROVE] UI design for Tables and tabs component on Directory ([#11026](https://github.com/RocketChat/Rocket.Chat/pull/11026))
- [IMPROVE] User mentions ([#11001](https://github.com/RocketChat/Rocket.Chat/pull/11001) by [@vynmera](https://github.com/vynmera))
- Speed up the build time by removing JSON Minify from i18n package ([#11097](https://github.com/RocketChat/Rocket.Chat/pull/11097))
- Build Docker image on CI ([#11076](https://github.com/RocketChat/Rocket.Chat/pull/11076))
- Update issue templates ([#11070](https://github.com/RocketChat/Rocket.Chat/pull/11070))
- Update Meteor to 1.6.1.3 ([#11247](https://github.com/RocketChat/Rocket.Chat/pull/11247))
- New history source format & add Node and NPM versions ([#11237](https://github.com/RocketChat/Rocket.Chat/pull/11237))
- Add Dockerfile with MongoDB ([#10971](https://github.com/RocketChat/Rocket.Chat/pull/10971))

## 0.66.1

###  Bug fixes

- Some updates were returning errors when based on queries with position operators ([#11335](https://github.com/RocketChat/Rocket.Chat/pull/11335))
- SAML attributes with periods are not properly read. ([#11315](https://github.com/RocketChat/Rocket.Chat/pull/11315))
- Outgoing integrations were stopping the oplog tailing sometimes ([#11333](https://github.com/RocketChat/Rocket.Chat/pull/11333))
- Notification preferences being lost when switching view mode ([#11295](https://github.com/RocketChat/Rocket.Chat/pull/11295))
- Livestream muted when audio only option was enabled ([#11267](https://github.com/RocketChat/Rocket.Chat/pull/11267))

### Minor changes

Setup Wizard username validation, step progress and optin/optout ([#11254](https://github.com/RocketChat/Rocket.Chat/pull/11254))

## 0.66.2

### Bug fixes

- Livechat not sending desktop notifications ([#11266](https://github.com/RocketChat/Rocket.Chat/pull/11266))
- Remove file snap store doesn't like ([#11365](https://github.com/RocketChat/Rocket.Chat/pull/11365)

### Minor change

- Send setting Allow_Marketing_Emails to statistics collector ([#11359](https://github.com/RocketChat/Rocket.Chat/pull/11359))
- Regression: Fix migration 125 checking for settings field ([#11364](https://github.com/RocketChat/Rocket.Chat/pull/11364))

## Contributors

As ever, we send a heartfelt thank you to all those who contributed to this release, we couldn't have done it without you!

- [@JoseRenan](https://github.com/JoseRenan)
- [@brylie](https://github.com/brylie)
- [@c0dzilla](https://github.com/c0dzilla)
- [@cliffparnitzky](https://github.com/cliffparnitzky)
- [@cpitman](https://github.com/cpitman)
- [@haffla](https://github.com/haffla)
- [@jonnilundy](https://github.com/jonnilundy)
- [@kable-wilmoth](https://github.com/kable-wilmoth)
- [@karakayasemi](https://github.com/karakayasemi)
- [@kb0304](https://github.com/kb0304)
- [@kumarnitj](https://github.com/kumarnitj)
- [@lindoelio](https://github.com/lindoelio)
- [@mahdiyari](https://github.com/mahdiyari)
- [@mikaelmello](https://github.com/mikaelmello)
- [@myfonj](https://github.com/myfonj)
- [@noobbbbb](https://github.com/noobbbbb)
- [@nsuchy](https://github.com/nsuchy)
- [@ocdtrekkie](https://github.com/ocdtrekkie)
- [@peterlee0127](https://github.com/peterlee0127)
- [@pitamar](https://github.com/pitamar)
- [@pkgodara](https://github.com/pkgodara)
- [@rakhi2104](https://github.com/rakhi2104)
- [@rw4lll](https://github.com/rw4lll)
- [@saplla](https://github.com/saplla)
- [@stuartpb](https://github.com/stuartpb)
- [@taeven](https://github.com/taeven)
- [@thaiphv](https://github.com/thaiphv)
- [@vynmera](https://github.com/vynmera)

## Core Team

- [@Hudell](https://github.com/Hudell)
- [@gdelavald](https://github.com/gdelavald)
- [@ggazzo](https://github.com/ggazzo)
- [@rodrigok](https://github.com/rodrigok)
- [@sampaiodiego](https://github.com/sampaiodiego)
- [@tassoevan](https://github.com/tassoevan)
- [@geekgonecrazy](https://github.com/geekgonecrazy)
- [@renatobecker](https://github.com/renatobecker)
- [@timkinnane](https://github.com/timkinnane)
- [@graywolf336](https://github.com/graywolf336)
- [@karlprieb](https://github.com/karlprieb)
- [@rafaelks](https://github.com/rafaelks)
- [@MarcosSpessatto](https://github.com/MarcosSpessatto)
- [@alansikora](https://github.com/alansikora)
- [@cardoso](https://github.com/cardoso)
- [@engelgabriel](https://github.com/engelgabriel)
- [@filipealva](https://github.com/filipealva)


## Requirements

These versions require the following engine versions:
- Node: `8.11.3`
- NPM: `5.6.0`

## Release changelogs

[Download](/install) Rocket.Chat 0.66 and install it via a
[Snap](https://rocket.chat/docs/installation/manual-installation/ubuntu/),
[Docker](https://rocket.chat/docs/installation/docker-containers/) or
[from scratch on your server](https://rocket.chat/docs/installation/manual-installation/).

For a full list of features added and bugs fixed, please see the full [Rocket.Chat 0.66 release changelog](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.66.0), the [0.66.1 release changelog](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.66.1), as well as the the [0.66.2 release changelog](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.66.2)  on GitHub.

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@gaetanocessati?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Gaetano Cessati"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Gaetano Cessati</span></a>