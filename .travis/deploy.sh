#!/bin/bash
set -e
# ssh resume@chws.ca -v exit

# git config --global push.default simple # we only want to push one branch — master
# # specify the repo on the live server as a remote repo, and name it 'production'
# # <user> here is the separate user you created for deploying
# git remote add production ssh://resume@chws.ca/home/resume/reactresume
# git push production master # push our updates

# copy the result of the build (done during travis automatic execution of npm test)
# scp -r -i .travis/deploy_rsa dist resume@chws.ca:/home/resume/reactresume/

######
### What would be even better is if the /shared folder had gooberweb dir and reactresume dir for these files here to end up in.
########
tar -czvf resume.tar.gz index.html dist
# scp -P 10022 -i .travis/deploy_rsa index.html resume@chws.ca:/tmp
scp -P 10022 resume.tar.gz resume@chws.ca:/home/resume/reactresume/
scp -P 10022 index.html resume@chws.ca:/home/resume/reactresume/
scp -P 10022 -r dist resume@chws.ca:/home/resume/reactresume/

#tarball up the git managed files and add the dist dir we just built to that, then compress and copy to server as well.
# git archive --format=tar -o resume.tar master;
# tar -uvf resume.tar dist;
# gzip -f resume.tar;
# scp resume.tar.gz resume@chws.ca:/home/resume/reactresume/;