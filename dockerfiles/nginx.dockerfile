FROM nginx:sha256:8d4fc999c0199edf0fcae821651ba9463075f6a1100b6a37c7b95bfdc76bdb70

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf .

RUN mv nginx.conf default.conf

WORKDIR /var/www/html

COPY src .


