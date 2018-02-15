Missing on boarding guide:

Once off:

- open terminal
- install home Homebrew from brew.sh
- confirm
- will install Xcode command line tools (additional compilers for Homebrew)
- install rbenv from brew `brew install rbenv`
- run `echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
- close the terminal and open a new one
- run `brew install 2.4.3`
- run `rbenv global 2.4.3`
- run `which ruby` and it should equal `/Users/isabella/.rbenv/shims/ruby`
- run `ruby -v` and it should equal `ruby 2.4.3…`
- run `gem install bundler`
- install visual studio code
- install GitHub desktop
- clone the Rocket.Chat website `https://github.com/RocketChat/rocketchat.github.io`
- open it in visual studio code
- open a terminal (either Mac terminal or Visual Studio Code terminal)
- make sure you are in the project folder e.g `/Users/isabella/GitHub/rocketchat.github.io` either by cd’ing there or Visual Studio Code editor takes you to the project folder by default
- run `echo 'alias webserver="bundle exec jekyll serve --incremental”' >> ~/.bash_profile`
- run `echo 'alias clearcache="rm -Rf ._site/"' >> ~/.bash_profile`
- run `echo 'alias clearbranches="git branch | xargs git branch -D"' >> ~/.bash_profile`

Occasionally:

- run `bundle install` if you haven’t before and if told that Bundler’s packages need to be updated
- Occasionally if your edits aren’t updated in your local website preview run `clearcache` (make sure you stop any running processes first)
- If you have pushed all your changes and want to clear all local branches run `clearbranches` (make sure you stop any running processes first)

Every time you open Visual Studio code to preview the website:

- run `webserver` to run the website
