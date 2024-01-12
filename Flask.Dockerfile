FROM python:3.8-slim

RUN mkdir /backend

RUN mkdir -p /usr/bin

RUN apt-get update && \
    apt-get install -y llvm && \
    apt-get install -y clang

WORKDIR /backend

COPY ./backend/requirements.txt ./

RUN pip install -r requirements.txt

COPY ./backend ./

EXPOSE 5000

CMD ["python3", "main.py"]