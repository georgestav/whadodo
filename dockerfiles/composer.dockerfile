FROM composer:sha256:4895de8697c6eade19f3261eb88cb41d564f213d5956faf74a329adf0c6e59c8

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel 

WORKDIR /var/www/html

ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]