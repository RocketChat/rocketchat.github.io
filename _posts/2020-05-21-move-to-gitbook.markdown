---
title: "Rocket.Chat Is Moving Its Documentation To Gitbook"
date: 2020-05-21 12:00:00 Z
categories:
- Product
- News
author: Martin Schoeler
cover: "/uploads/docs.png"
featured: true
---

After careful consideration, Rocket.Chat is officially moving its documentation to GitBook.

**With this change, we expect to improve the rate of which we develop, fix, and maintain documentation by making sure everyone on the team can edit it easily.**

Previously, we used Jekyll for documentation purposes. However, as time passed, we faced more and more issues with Jekyll, such as:

The necessity of running the server locally in order to preview changes (which required some basic development knowledge).
It required constant UI maintenance, always falling behind the website somehow.
Lack of capabilities to search through different versions of the same feature.

Therefore, we’ve decided to move to [Gitbook](https://www.gitbook.com/) which provides a more user-friendly and collaborative product for everyone.

We hope this change will boost the adoption of writing documentation among our developers. Besides that, we aim to increase the speed of UI maintenance, which will enable us to allocate more time to writing documentation and keep our processes up to date.

## What Does This Mean To Our Community?

As you can see, moving our documentation will be a whole new scenario for our development team. However, we predict minor impacts on our current contribution flow.

**As to our community contributions, it will still be necessary to create pull requests in our docs repository, but we will lighten up some of the tests we were running.**

It is worth mentioning that this switch to Gitbook will change the structure of our documentation significantly. Previously, we had a structure that consisted of various named folders with `README.md` files. From now on, folders will only be kept there if there is more than one file in that category, and the `README.md` file will act as an index of that folder. The rest will be named `.md` files.

As to the current pull requests flow on our docs repository, at first they might be impacted, but our team is ready to help solve these conflicts.

If you have questions, feel free to reach out to us through our [channel](https://open.rocket.chat/channel/rocketchat-docs-conflicts) we will be happy to help!
