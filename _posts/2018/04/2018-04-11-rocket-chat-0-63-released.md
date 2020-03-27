---
title: Rocket.Chat 0.63 Released
date: 2018-04-11 08:00:00 Z
categories:
- News
author: Rocket.Chat Team
cover: "/images/posts/2017/08/new-desktop-app-release-available-for-windows-linux-and-macos/cover-desktop-release.jpg"
featured: true
---

Thanks to our passionate community who contributed all our headline features and 50% of the bug
fixes this realease!

<ul>
  <li>
    <a target="_blank" href="https://github.com/RocketChat/Rocket.Chat/pull/9947">#9947</a> by
    <a target="_blank" href="https://github.com/Hudell">@Hudell - Pierre H. Lehnen</a>
    : GDPR Right to be forgotten
  </li>
  <li>
    <a target="_blank" href="https://github.com/RocketChat/Rocket.Chat/pull/10086">#10086</a>
    <a target="_blank" href="https://github.com/ubarsaiyan">@ubarsaiyan - Utkarsh Barsaiyan</a>
    : Preview reply-to message
  </li>
  <li>
    <a target="_blank" href="https://github.com/RocketChat/Rocket.Chat/pull/9726">#9726</a> by
    <a target="_blank" href="https://github.com/kb0304">@kb0304 - Karan Bedi</a>
    : MP3 encoded audio recordings
  </li>
  <li>
    <a target="_blank" href="https://github.com/RocketChat/Rocket.Chat/pull/9732">#9732</a> by
    <a target="_blank" href="https://github.com/Hudell">@Hudell - Pierre H. Lehnen</a>
    : Ability to set 2FA max delta
  </li>
</ul>

Rocket.Chat core team member
<a target="_blank" href="https://github.com/MarcosSpessatto">@MarcosSpessatto - Marcos Spessatto Defendi</a>
has added a number of new API endpoints, for a breakdown take a look at the full
[release notes](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.63.0).

## GDPR right to be forgotten

Admins can configure what what will happen to a user's messages when they delete their accounts:

* Keep: The user will be deleted but their messages will be kept.
* Delete: The user and their messages will be deleted.
* Unlink: The user will be deleted, their messages kept but not linked to an account.

## Preview reply-to message

If a user has disabled `Collapse Embedded Media by Default` they will be able to preview the
message they are replying to.

<br>

![](/images/posts/2018/04/2018-04-11-rocket-chat-0-63-released/reply-preview.png)

## Release changelog

[Download](/install) Rocket.Chat 0.63 and install it via a
[Snap](https://rocket.chat/docs/installation/manual-installation/ubuntu/),
[Docker](https://rocket.chat/docs/installation/docker-containers/) or
[from scratch on your server](https://rocket.chat/docs/installation/manual-installation/).

For a full list of features added and bugs fixed, please see the full [Rocket.Chat 0.63 release changelog on GitHub](https://github.com/RocketChat/Rocket.Chat/releases/tag/0.63.0).

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@kajhinkson?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Kyle Hinkson"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Kyle Hinkson</span></a>
