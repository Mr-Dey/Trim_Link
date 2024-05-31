FROM ubuntu

RUN apt update -y
RUN apt install -y curl
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && . ~/.nvm/nvm.sh && nvm install node
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs
RUN apt upgrade -y
WORKDIR /trimlink
COPY . .
RUN npm install

ENTRYPOINT [ "node","app.js" ]