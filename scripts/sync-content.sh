#!/bin/sh
# Copies the plugin docs from the sibling checkouts into content/, which is what the deployed site
# builds from. Each plugin repo's CI does the same copy on a push to its main branch; run this by
# hand to publish without waiting for that.
set -eu
cd "$(dirname "$0")/.."
sources="$(cd .. && pwd)"

mkdir -p content/city-builder content/click-to-build/docs content/click-to-build/static/img
rsync -a --delete --exclude .DS_Store "$sources/city-builder-plugin/docs/user/" content/city-builder/
rsync -a --delete --exclude .DS_Store "$sources/click-to-build-plugin/website/docs/" content/click-to-build/docs/
# The site has its own favicon and logo under the same names.
rsync -a --delete --exclude .DS_Store --exclude favicon.ico --exclude logo.svg \
	"$sources/click-to-build-plugin/website/static/img/" content/click-to-build/static/img/
