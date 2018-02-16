
## Table of Contents

- [How we publish](#how-we-publish)

---

## How we publish

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

Clone the projects using
[Git](https://help.github.com/articles/cloning-a-repository/) or
[GitHub Desktop](https://desktop.github.com)

- Website & handbook: `https://github.com/RocketChat/rocketchat.github.io.git`
- Documentation: `https://github.com/RocketChat/docs.git`

### Run a project

Open a terminal and change directory to the Website & Handbook or Documentation project and run:

```
rocketchat_web_server
```

### Edit content


## What we publish

