# Recipes Without F***ing Backstories
## by [@onemohrtime](https://onemohrti.me)

[![buddy pipeline](https://app.buddy.works/onemohrtime/recipes/pipelines/pipeline/234208/badge.svg?token=87fbddf4764a79d8087606f27acba051a5f8777676ebcfd6ebb9563158502a61 "buddy pipeline")](https://app.buddy.works/onemohrtime/recipes/pipelines/pipeline/234208)

| CMS | PHP | MySQL | Node | NPM | Server |
|-|-|-|-|-|-|
| Craft `3.5.x` | `7.3` | `5.7` | `12.16.x` | `6.14.x` | [Ubuntu 18.04](https://askubuntu.com/questions/449032/29-packages-can-be-updated-how) |

## Installation

1. Take the typical steps you take to clone the repo `~/into/your/directory/` of choice.
2. Run Docker to install local files
```zsh
docker-compose up
```
3. Run Docker again (in "detached" mode) to boot up Apache, PHP, and MySQL
```zsh
docker-compose up -d
# (shut it down later with)
docker-compose down
```
4. Install composer _and_ NPM packages with
```zsh
npm install && composer install
```
5. Run NPM's production build
```zsh
npm run production
```
6. You are set! Well, should be. If not, open a [github issue](./issues/)
