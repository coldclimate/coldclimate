#!/bin/bash
curl  https://production-digital.greggs.co.uk/api/v1.0/shops -o greggs.json
jq  '[.[] | {name: .shopName, lat: .address.latitude, long: .address.longitude}]' greggs.json > name-location.json
