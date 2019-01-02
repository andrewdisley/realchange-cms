# Real Change Hugo + Netlify CMS and Styleguide

This is the repository for Real Change live websites and styleguide.


## Live site: Hugo + Netlify CMS

The live site makes use of Hugo and Netlify CMS.

Netlify auto builds and deploys when a commit is made to master branch. The Netlify CMS edits content on the master branch.

### Run Hugo locally

cd real-change-seed;
cd hugo;
hugo server -D


### Compile Hugo

cd real-change-seed;
cd hugo;
hugo


## Styleguide

The Styleguide is build on Assemble, it generates assets from source files.

Any changes to CSS / JS / Image assets here must be manually copied to the hugo instance.


### Install

* Install assemble globally `npm i -g assemble`
* Run: `npm i`


### Building and running local server

* `assemble`
* Visit: http://localhost:3000/

### Deploying new sites

* create branch
* update hugo/static/admin/config.yml to point at new branch
* setup identity in netlify
* enable git gateway
* set registration to invite only
* setup ssl
* update dns
* create banner for ssn
* update city data in ssn
