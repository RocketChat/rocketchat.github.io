
## Table of Contents

- [How we publish](#how-we-publish)
  - [Technolgies](#technolgies)
  - [Setup local environment](#setup-local-environment)
  - [Install a code editor](#install-a-code-editor)
  - [Clone the projects](#clone-the-projects)
  - [Run a project](#run-a-project)
    - [Start the web server](#start-the-web-server)
    - [Stop the web server](#stop-the-web-server)
    - [Clear the web server cache](#clear-the-web-server-cache)
  - [Editting content](#editting-content)
- [What we publish](#what-we-publish)
  - [Content from Rocket.Chat team](#content-from rocket--chat-team)
  - [Content from the community](#content-from-the-community)
  - [Assessment criteria](#assessment-criteria)
  - [Marketing team approval](#marketing-team-approval)
- [Where we publish]()

---

## How we publish

### Technologies

We use
[Jekyll](https://jekyllrb.com/),
[Markdown](https://guides.github.com/features/mastering-markdown/),
[Liquid](https://shopify.github.io/liquid/),
[Sass](http://sass-lang.com/documentation/),
[Git](https://git-scm.com/doc),
[GitHub](https://help.github.com),
[GitHub Pages](https://pages.github.com/) and
[Amazon CloudFront](https://aws.amazon.com/cloudfront/) to publish our
[Website & Handbook](github.com/RocketChat/rocketchat.github.io) and
[Documentation](github.com/RocketChat/docs) content.

Content can be directly editted and previewed on GitHub but to view it with the full styling you will need to setup a local development environment.

### Setup local environment

The following sofware is required: Git, Ruby 2.4.2+, bundler gem.

Run the following command in a terminal to setup our OSX publishing stack:

```
curl -fsSL https://raw.githubusercontent.com/RocketChat/rocketchat.github.io/master/handbook/marketing/setup.sh | /bin/bash
```

In addition to the required software, the setup script also creates various shortcuts for running and managing publishing.

### Install a code editor

If you don't know which code editor to use, we recommend Visual Studio Code as it has a good markdown preview feature.

### Clone the projects

[Clone](https://services.github.com/on-demand/github-desktop/clone-repository-github-desktop)a project with GitHub Desktop.

- Website & handbook: `https://github.com/RocketChat/rocketchat.github.io.git`
- Documentation: `https://github.com/RocketChat/docs.git`

### Run a project

#### Start the web server

Open a terminal and [change directory](https://learn.co/lessons/bash-navigation-osx) to the Website & Handbook or Documentation project and start the web server by running:

```
rocketchat_web_server
```

#### Stop the web server

To stop the web server press: `ctrl + c`.

#### Clear the web server cache

If your saved changes are not being displayed, stop the server and clear the cache by running:

```
rocketchat_web_clear
```

### Editting content

- Checkout an existing branch or [create a new branch](https://services.github.com/on-demand/github-desktop/create-branches-github-desktop).
- Don't commit changes to the `master` branch.
- Don't work on someone elses branch without their permission.
- [Make changes]((https://services.github.com/on-demand/github-desktop/make-changes-github-desktop)).
- [Commit changes](https://services.github.com/on-demand/github-desktop/add-commits-github-desktop).
- [Open a Pull Request (PR)](https://services.github.com/on-demand/github-desktop/pull-request-github-desktop).
- Start your PR with "`WIP: `" if it is not ready to be merged.
- Assing your Pull Request to someone to [review and merge](https://services.github.com/on-demand/github-desktop/merge-pull-request-showcase).
- Delete your merged branch.
- [Update your local repository](https://services.github.com/on-demand/github-desktop/push-with-github-desktop).

## What we publish

The marketing team is responsible for publishing high quality content that showcases the best of Rocket.Chat.

### Content from Rocket.Chat team

Rocket.Chat team members can suggest content by creating an [Asana](https://app.asana.com) task on the relevant marketing team project.

**NB**: Rocket.Chat team members must not commit to, or imply that, any marketing (press release, blog post, social update, newsletter), will be done, for an external party, to any of our channels without approval.

### Content from the community

The community can suggest content by opening a GitHub Issue on the [Website & Handbook](https://github.com/RocketChat/rocketchat.github.io/issues) and [Documentation](https://github.com/RocketChat/docs/issues) projects.

### Assessment criteria

Your Content must pass the following assessment criteria before it will be reviewed by the marketign team:

- (yes/no) Is the idea or entity not affiliated with religeon, politics (government is acceprable), adult content, gambling or violence?
- (yes/no)  Does the idea or entity's values comply with the [Rocket.Chat Code of Conduct](https://github.com/RocketChat/rocket.chat/blob/master/CODE_OF_CONDUCT.md)?
- (yes/no) If there is an entity involved, is there marketing reciprocity?
- (yes/no) Is the idea novel within the context of Rocket.Chat?

### Marketing team approval

The marketing team will decide whethere to approve the content and when and where to publish based on the following criteria:

- Does it showcase the best of the Rocket.Chat platform and community?
- Is there an associated deadline e.g. releas date?
- Which channels is the content best suited for?
- Where does it fit in to the marketing team's existing commitments?

The decision will be communicated in the original Asana task or GitHub issue.

# Where we publish

### Website

### Blog

### Social Media
