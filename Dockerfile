FROM nginx:1.17-alpine

COPY build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf