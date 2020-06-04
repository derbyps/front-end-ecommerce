FROM nginx:stable
MAINTAINER Derby  "derby@alterra.id"

RUN mkdir -p /home/coba-coba/www/front-end-ecommerce/build
RUN mkdir -p /home/coba-coba/log/nginx

COPY default.conf /etc/nginx/conf.d/
ADD build/. /home/coba-coba/www/front-end-ecommerce/build

WORKDIR home/coba-coba/www/front-end-ecommerce/build 

