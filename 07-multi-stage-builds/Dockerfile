# Stage 1 - Build and install dependencies

FROM python:3.10-slim AS builder

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY app.py .



# Stage 2 - Runtime environment

FROM python:3.10-slim

WORKDIR /app



# Copy installed packages and app

COPY --from=builder /usr/local /usr/local

COPY --from=builder /app /app



EXPOSE 5000

CMD ["python", "app.py"]


