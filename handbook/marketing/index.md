
## Table of Contents

- [How we publish](#how-we-publish)
  - [Technologies](#technolgies)
  - [Set up local environment](#setup-local-environment)
  - [Install a code editor](#install-a-code-editor)
  - [Clone  projects](#clone-the-projects)
  - [Run a project](#run-a-project)
    - [Start the web server](#start-the-web-server)
    - [Stop the web server](#stop-the-web-server)
    - [Clear the web server cache](#clear-the-web-server-cache)
  - [Editing content](#editing-content)
  - [Blog posts](#blog-posts)
  - [Social updates](#social-updates)
- [What we publish](#what-we-publish)
  - [Content from Rocket.Chat team](#content-from-rocket-chat-team)
  - [Content from the community](#content-from-the-community)
  - [Assessment criteria](#assessment-criteria)
  - [Marketing team approval](#marketing-team-approval)

---

# Marketing

The marketing team is responsible for publishing high quality content that showcases the best of Rocket.Chat to our various channels: website, blog, newsletter, social and through external agencies and publications.

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

Content can be directly edited and previewed on GitHub but to view it with the full styling you will need to setup a local development environment.

### Setup local environment

The following software is required: Git, Ruby 2.4.2+, bundler gem. To install the publishing stack on OSX run:

```
curl -fsSL https://raw.githubusercontent.com/RocketChat/rocketchat.github.io/master/handbook/marketing/setup.sh | /bin/bash
```

### Install a code editor

We recommend [Visual Studio Code](https://code.visualstudio.com/) as it has a great markdown previewer and many other useful [features](https://code.visualstudio.com/docs).

### Clone the projects

Clone our projects using [GitHub Desktop](https://services.github.com/on-demand/github-desktop/clone-repository-github-desktop):

- Website & handbook: `https://github.com/RocketChat/rocketchat.github.io.git`
- Documentation: `https://github.com/RocketChat/docs.git`

### Run a project

#### Start the web server

Open a terminal and [change the directory](https://learn.co/lessons/bash-navigation-osx) to one of the projects (if you are using Visual Studio Code you can use the integrated terminal) and run:

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

### Editing content

- Check out an existing branch or [create a new branch](https://services.github.com/on-demand/github-desktop/create-branches-github-desktop).
- Don't commit changes to the `master` branch.
- Don't work on someone else's branch without their permission.
- [Make changes](https://services.github.com/on-demand/github-desktop/make-changes-github-desktop).
- [Commit changes](https://services.github.com/on-demand/github-desktop/add-commits-github-desktop).
- [Open a Pull Request (PR)](https://services.github.com/on-demand/github-desktop/pull-request-github-desktop).
- Start your PR with "`WIP: `" if it is not ready to be merged.
- Someone will [review and merge](https://services.github.com/on-demand/github-desktop/merge-pull-request-showcase) your PR.
- You may receive feedback requesting changes to your work.
- Delete your merged branch.
- [Update your local repository](https://services.github.com/on-demand/github-desktop/push-with-github-desktop).

### Blog posts

- Look at previous posts to see how to use:
  - Meta data including categories and the cover image.
  - Post structure, specifically for release posts.
  - Reference images and open links in new tabs.
- Publish posts under with the following naming structure `_posts/yyyy/mm/yyyy-mm-dd-slug.md`
- Put your post's images under `images/posts/yyyy/mm/slug/`
- Use [Image.Optim](https://imageoptim.com/mac) to reduce the size of your images.
- Use cover images where width is 1024px,  height > 600px.
- Put the image accreditation at the bottom of each post.

### Social updates

- Put content update ideas in the [Social Media Schedule](https://docs.google.com/spreadsheets/d/1qIVBC0fUMCBfzRJK2TQA5K0m_gWZc5rNnPsGemZSUxE/edit?usp=sharing).
- Once approved by the marketing team the update must be scheduled in Hootsuite.
- Use a link shortener like [Google URL Shortener](https://goo.gl).
- Try to use some of our commonly used hashtags.

## What we publish

The marketing team picks content to create and publish which they consider to be amongst the best uncreated content that will achieve the greatest impact for the organization's short and medium term focus and long term objectives.

### Content from Rocket.Chat team

Rocket.Chat team members can suggest content by creating an [Asana](https://app.asana.com) task on the relevant marketing team project.

Do not commit to any marketing or imply that any marketing may be done for an external party to any of our channels without review and approval from the marketing team.

### Content from the community

The community can suggest content by opening a GitHub Issue on the [Website & Handbook](https://github.com/RocketChat/rocketchat.github.io/issues) and [Documentation](https://github.com/RocketChat/docs/issues) projects.

### Assessment criteria

Your Content must pass the following assessment criteria before it will be reviewed by the marketing team:

- (yes/no) Is the idea or entity affiliated with religion, politics (government is acceptable), adult content, gambling or violence?
- (yes/no)  Does the idea or entity's values comply with the [Rocket.Chat Code of Conduct](https://github.com/RocketChat/rocket.chat/blob/master/CODE_OF_CONDUCT.md)?
- (yes/no) If there is an entity involved, is there marketing reciprocity?
- (yes/no) Is the idea novel within the context of Rocket.Chat?

### Marketing team approval

The marketing team will decide whether to approve the content as well as where and when to publish based on the following criteria:

- Does it showcase the best of the Rocket.Chat platform and community?
- Is there an associated deadline e.g. release date?
- Which channels does the content suit best?
- Where does it fit in to the marketing team's existing commitments?

The decision will be communicated in the original Asana task or GitHub issue.
