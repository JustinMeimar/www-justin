# Start from a Debian base image
FROM debian:latest

RUN apt-get update && apt-get install -y \
    git \
    cmake \
    build-essential \
    default-jdk

ENV ANTLR_PARENT=/root/antlr
ENV SRC_DIR=${ANTLR_PARENT}/antlr4
ENV BUILD_DIR=${SRC_DIR}/antlr4-build
ENV INSTALL_DIR=${ANTLR_PARENT}/antlr4-install

RUN mkdir -p ${ANTLR_PARENT} \
    && mkdir -p ${INSTALL_DIR}

RUN git clone https://github.com/antlr/antlr4.git ${SRC_DIR}

RUN mkdir -p ${BUILD_DIR} \
    && cd ${SRC_DIR} && git checkout 4.13.0 \
    && cd ${BUILD_DIR} \
    && cmake ${SRC_DIR}/runtime/Cpp/ -DCMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=${INSTALL_DIR} \
    && make install -j4

ENV ANTLR_INS=${INSTALL_DIR}

ENV COMPILER_DIR=/Gazprea22

RUN git clone https://github.com/JustinMeimar/llvm-compiler.git \
    && cd llvm-compiler \
    && mkdir build \
    && cd build \
    && cmake ../ \
    && make -j4

CMD ["python3 loop.py"]