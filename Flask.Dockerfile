FROM python:3.8-slim

RUN mkdir /backend
RUN mkdir -p /usr/local/bin

RUN apt-get update && \
    apt-get install -y llvm && \
    apt-get install -y clang

WORKDIR /backend

COPY ./backend/requirements.txt ./

RUN pip install -r requirements.txt

COPY ./backend ./

EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "main:app"]