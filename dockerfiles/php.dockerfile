FROM php:sha256:bdaaed87c00568472c469cb705d3abc52ea883ecb07dc4e491ae34230b4e9896

WORKDIR /var/www/html

COPY src .

RUN docker-php-ext-install pdo pdo_mysql

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel 

# RUN chown -R laravel:laravel .