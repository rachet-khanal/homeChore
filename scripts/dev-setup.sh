#!/bin/sh

set -e

# if not .env file, create it and show message
if [ ! -f ".env" ]
then
    echo "✅ Creating .env file, please fill in the missing variables"
    cp -n .env.example .env
fi

# check if mkcert is installed
if ! [ -x "$(command -v mkcert)" ]
then
    echo "❗ Please install mkcert then run this command again, see https://github.com/FiloSottile/mkcert"
    exit 1
fi

# create an ssl certificate for local development in the .ssl folder
if [ ! -f ".ssl/localhost-ca.pem" ]
then
    echo "✅ Creating ssl certificate for local development"
    mkdir -p .ssl
    mkcert -cert-file .ssl/localhost-ca.pem -key-file .ssl/localhost-key.pem localhost 192.168.20.5
fi
