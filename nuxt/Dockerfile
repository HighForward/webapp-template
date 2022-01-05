FROM node:16

RUN mkdir /app
WORKDIR /app

COPY webapp/. /app

RUN chmod +x /app/entrypoint.sh

EXPOSE 3000
ENV HOST 0.0.0.0

ENTRYPOINT ["/app/entrypoint.sh"]