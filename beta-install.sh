#!/bin/bash

readonly ROCKETCTL_DOWNLOAD_URL="https://raw.githubusercontent.com/RocketChat/install.sh/master/rocketctl"
readonly ROCKETCTL_DIRECTORY="/usr/local/bin"

[ ${EUID} -ne 0 ] && (echo "This script must be run as root. Cancelling" >&2; exit 1;)
if [ ! -f "$ROCKETCTL_DIRECTORY/rocketctl" ]; then
    curl -L $ROCKETCTL_DOWNLOAD_URL -o /tmp/rocketctl
    if  [ $? != 0 ]; then
        echo "Error downloading rocketctl."
        exit 1
    else
        mv /tmp/rocketctl $ROCKETCTL_DIRECTORY/
        chmod 755 $ROCKETCTL_DIRECTORY/rocketctl
    fi
    $ROCKETCTL_DIRECTORY/rocketctl install $@
else
    echo "You already have rocketctl installed, use rocketctl to manage your RocketChat installation."
    echo "Run rocketctl help for more info."
    exit 1
fi
