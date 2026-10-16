# Dockerized Simple Calculator

`dockerized-simple-calculator` is a simple calculator app built with vanilla HTML/CSS and running on express.js

## Stack

- NodeJs
- HTML
- CSS
- Express.js
- CORS

## How to run

Run the app with:

```
docker build -t dockerized-simple-calculator .
docker run -p 3001:3001 dockerized-simple-calculator
```

## What I learned

Being my first docker containerized project,this project taught me the components of docker (dockerfiles, images & container).

I gained the experience of writing a dockerfile using the `node:20.15.0-alpine` image.

## ISSUES ENCOUNTERED:

- Port mapping: I ran into issues while trying to specify the correct PORT. Since the app was initially built to run on port `3001`, using `-p 9000:9000` didn’t work because the app listens on 3001 inside the container, so I used -p 3001:3001.
- Hardcoded port: server.js ignored the PORT env var, so I switched it to `process.env.PORT`

by doing
`const port = process.env.PORT;`

instead of:
`const port = 3001;`
