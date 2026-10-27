# Flask App

`02-flask-app` is a simple app built with flask framework and containerized using docker.

## Stack

- Flask
- Python

## How to run

Run the app with:

```
docker build -t flask-app .
docker run -p 5000:5000 flask-app
```

## What I learned

- Flask listens on 127.0.0.1 by default, which inside a container means only the container itself can reach it. Binding to `0.0.0.0` is what lets `-p` actually connect to the app.
- I learned, in details, the limitations of WORKDIR & COPY dockerfile instructions

## Known limitations

- Flask isn't pinned, so each build pulls whatever version is newest.
- Python 3.9 is end-of-life. Moving to 3.12 next.
- Runs on Flask's dev server, which isn't meant for production.
