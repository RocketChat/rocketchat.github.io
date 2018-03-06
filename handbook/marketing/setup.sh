#!/bin/bash

# install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install rebenv
brew install rbenv

# add rbenv to bash_profile and source
if ! cat ~/.bash_profile | grep -qFe "rbenv init" ; then
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
  echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
  source ~/.bash_profile
fi

# upgrade ruby build
cd /Users/sean/.rbenv/plugins/ruby-build && git pull && cd -

# install ruby
rbenv install 2.4.2
rbenv global 2.4.2

# install bundler
gem install bundler

# create some rocketchat shortcuts

if ! cat ~/.bash_profile | grep -qFe "rocketchat_web_server" ; then
  echo 'alias rocketchat_web_server="(bundle install && bundle exec jekyll serve --incremental)"' >> ~/.bash_profile
fi

if ! cat ~/.bash_profile | grep -qFe "rocketchat_web_clear" ; then
  echo 'alias rocketchat_web_clear="rm -Rf ._site/"' >> ~/.bash_profile
fi

if ! cat ~/.bash_profile | grep -qFe "rocketchat_git_clear" ; then
  echo 'alias rocketchat_git_clear="git branch | grep -v master | xargs git branch -D"' >> ~/.bash_profile
fi

source ~/.bash_profile
