# rocket.chat

# DEPRECATED / Archived

Previously the source for the [Rocket.Chat website](https://rocket.chat).  This repo is no longer used

## Site structure

We chose Jekyll and GitHub pages because together they offer the most supported and user friendly way for others to fork, edit, preview and contribute documentation without having to setup a local development environment just to write copy, add images or manage files.

For developers, only use templates and includes when they are needed. Creating a template per page or splitting templates into many parts that are only included once makes it challenging to maintain and contribute to the project.

### Templates

The `default.html` template is the base template used by pages or other templates (only `post.html` at the moment).

Only create a Template if it will be used by more than one page. Rather add the structure and content to the page e.g. see `index.html`.

### Includes

Like Templates, only create an Include if it will be used in more than one Template.

### Styles

When changing styles, bump the `version` number in `config.yml` to force browsers to load the new version.

Define Template or Page styles in their own file with the same name as the Template or Page (e.g `_templates/default.html`) and then include the style in `styles.scss`.

Only define variables for values that are used in multiple places and need to vary. Use contextually relevant names instead of calling it by the current value it holds e.g use `$body-color` instead of `$color-light-blue`. If you change the value of the variable in the second case, you have to update the name and everywhere it is referenced.

## Running rocketchat.github.io locally

- install ruby (version 2.5 or higher recommended, if using any version prior to 2.5 you will need to install bundler with `gem install bundler`).
- This step is for only macOS users:
  - You will need to have either `xcode` or the `xcode command line tools` installed. To install the command tools use `xcode-select --install`. Don't forget to accept the `sudo xcodebuild -license` command.
  - Depending on your setup you might need to install [nokogiri](http://www.nokogiri.org/tutorials/installing_nokogiri.html) and its dependencies manually.
- Fork the appropriate repository to your account.
- Clone your fork.
- `cd` into your project folder. 
- Run `bundle install` inside of the cloned folder.
- Start the server with `bundle exec "jekyll serve --incremental --safe"`
