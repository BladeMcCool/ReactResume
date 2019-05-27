#!/bin/bash
set -e
# ssh resume@chws.ca -v exit

git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
git remote add production ssh://resume@chws.ca/home/resume/reactresume
git push production master # push our updates

# copy the result of the build (done during travis automatic execution of npm test)
# scp -r -i .travis/deploy_rsa dist resume@chws.ca:/home/resume/reactresume/
scp -r dist resume@chws.ca:/home/resume/reactresume/
cd ..
tar -czvf resume.tar.gz resume/*
scp resume.tar.gz resume@chws.ca:/home/resume/reactresume/