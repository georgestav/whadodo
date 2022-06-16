# Laravel, React, Typescript, Sass, PHP, NGINX, MYSQL - Dockerised ready to set sails

Container & Deployment:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

Served with:

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

Presented by:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

Tooling:

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Laravel React project,

Using:

* PHP @ 8.1 `sha256:bdaaed87c00568472c469cb705d3abc52ea883ecb07dc4e491ae34230b4e9896`
* NGINX @ Latest-alpine `sha256:8d4fc999c0199edf0fcae821651ba9463075f6a1100b6a37c7b95bfdc76bdb70`
* MYSQL @ latest `sha256:0c0beeac7ca1937d60f54e1fb0c4a5c0b0ffee2aae37488fbc9f5ea301425551`
* Composer @ latest `sha256:4895de8697c6eade19f3261eb88cb41d564f213d5956faf74a329adf0c6e59c8`
* Npm with NodeJS @ lts

Comes with:

* React @ 18.1
* Typescript @ 4.7
* Sass @ 1.52
* Bootstrap @ 5.1
* Browsersync & axios

## How to run the project

1. Copy the mysql.env.example in the env folder to mysql.env and fill out the project details

2. Install the vendor dependencies
   `docker-compose run --rm composer install`

3. Copy the .env.example found in **src** to .env and fill out the project details making sure they match the mysql.env values.

4. Generate a new app key by running
   `docker-compose run --rm artisan key:generate`

5. Start the server and start developing
   `docker-compose run npm i`

6. Start the server and start developing
   `docker-compose up -d server`

7. Start Broswer Sync to view live changes
    `docker-compose run --rm --service-ports npm run watch`

### Other commands

> You can stop the server with `docker-compose down`
> All artisan commands with `docker-compose run --rm artisan [your input]`
> All composer commands with `docker-compose run --rm composer [your input]`
> All npm commands with `docker-compose run --rm npm [your input]`

### Sidenote

If when migrating the tables is failing:

1. Make sure your credentials are right in the .env file and retry
2. Verify that in the .env file you are passing the name of the mysql container and not localhost or 127.0.0.1 and try again
3. run `docker-compose run --rm composer require doctrine/dbal` to install a missing dependency

Kubernetes not implemented yet, will be once closer to deployment
