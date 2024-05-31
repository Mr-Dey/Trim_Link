FROM ubuntu

RUN apt update -y
RUN apt install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN nvm install 22
RUN apt upgrade -y

WORKDIR /trimlink
COPY . .
RUN npm install

ENTRYPOINT [ "node","app.js" ]