---
title:  Electron 2.10.2 hotfix release
categories:
  - Security
  - Releases
date: 2018-01-25 10:00:00
author: Louise Message
---

Today we released a hotfix for the Rocket.Chat desktop client.

This fixes some vulnerabilities found on Chrome (CVE-2017-5124) and Electron (CVE-2018-1000006).

We urge users to update their Rocket.Chat desktop client to the [latest version](https://rocket.chat/download) as these bugs can be exploited for remote code execution which can result in stolen data and system compromise.

If you are a developer and maintain a forked version of Rocket.Chat please ensure to update your dependencies.

Please consult  <a href="https://open.rocket.chat/channel/support" target="_blank">Rocket.Chat.Electron</a> for more information.

If you have any questions, concerns or require advice please contact <a href="mailto:security@rocket.chat" target="_blank">security@rocket.chat</a> or chat to us on <a href="https://open.rocket.chat/channel/support" target="_blank">https://open.rocket.chat/channel/support</a>.

Special thanks to  <a href="https://github.com/rmetzler" target="_blank">rmetzler</a> for reporting both vulnerabilities found in the Rocket.Chat repository.
