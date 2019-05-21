#!/bin/bash
# set -e
# ssh resume@chws.ca -v exit

git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
git remote add production ssh://resume@chws.ca/home/resume/reactresume
git push production master # push our updates