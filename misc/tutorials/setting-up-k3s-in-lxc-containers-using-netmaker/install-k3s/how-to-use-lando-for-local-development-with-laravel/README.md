# How to use Lando for local development with Laravel

One of the common problems when working on web apps is that you need to have a local environment that is as close as possible to the production environment. If you are working in a team it is important that you can share the local environment one way or the other too. If you only have one project it is not that big of a deal to install the needed services in the same versions as in your production environment. But as soon as you have multiple projects, chances are high that the production environments differ from project to project. And I'm not even talking about legacy projects with outdated dependencies like end-of-life PHP versions.

There are a lot of solutions which solve this problem in one way or the other. A common way is using Docker (https://www.docker.com/) images. Docker images can be combined to provide all the services you need for your project to run. There are a lot of predefined images available at the Docker Hub (https://hub.docker.com/) for different purposes. For example Docker images with all different PHP versions, Docker images with webservers, Docker images with different database servers, Docker images with Redis and so on. As you can imagine with these already available images you can combine nearly every setup you need. But that also comes at a cost. You have to dig into a new technology and learn how you can combine and configure all the different images so that they work together and all the images can talk to each other. All you want in reality is an easy way to list what you need in which version and start developing.

That's why we choose to use Lando (https://docs.lando.dev/) at Ideenreich (https://web-ideenreich.at/), the company I co-founded.

What exactly is Lando? Let's see how Lando describes itself:

> It's a free, open source, cross-platform, local development environment and DevOps tool built on Docker container technology.

But what does this mean in practice? Basically it means that you have a `.lando.yml` YAML file in the root of your project. This file describes everything you need to run your project. From the PHP version to the webserver and the database. The advantage of this approach is that you can share this single configuration file with your team. Even better, you can add it to your version control and can ensure that everyone working on the project has the same and latest version of the file and therefore the latest environment configuration.

Another advantage of Lando is that it provides a lot of so called recipes. Recipes are predefined config files for common projects like Laravel (https://laravel.com/), Symfony (https://symfony.com/) or Wordpress (https://wordpress.org/) to name just a few. Every recipe contains sensible defaults for the different projects which makes the start with Lando extremely easy.

But enough of all the theory, let's get into practice and see which steps you need to take to get your Laravel project up and running locally with Lando.

## Install Lando

Lando is available for macOS (10.13 or later), Windows (Windows 10 Pro+ or equivalent) and Linux systems (kernel version 4.x or higher). The only requirement is that you have Docker installed on Linux; on macOS and Windows the Lando installer will install Docker for you if needed. You can find detailed instructions on how to install Docker on Linux in the Lando docs: https://docs.lando.dev/basics/installation.html#linux.

You can find detailed instructions how to install Lando on your system in the docs too: https://docs.lando.dev/basics/installation.html#installation

On a Debian Linux for example you have to run the following two commands in a terminal:

{% code title="Install Lando on Debian" %}
```bash
$ wget https://files.devwithlando.io/lando-stable.deb
$ sudo dpkg -i lando-stable.deb
```
{% endcode %}

## Setting up Lando for Laravel

Open a terminal, navigate to the root folder of your Laravel project and run:

{% code title="Initialize Lando for Laravel" %}
```bash
$ lando init --source cwd --recipe laravel --webroot public --name myapp
```
{% endcode %}

This command will create a basic `.lando.yml` file in your project root. This file is the starting point for customizing the services and versions you want to use.

Parameters explained:

* `--source cwd` tells Lando that the source code of your project lives in the current working directory.
* `--recipe laravel` initializes the Lando file with the Laravel recipe.
* `--webroot public` tells Lando which directory will be the webroot of your project. In Laravel this is typically the `public` folder.
* `--name myapp` defines the name of your app. Lando will generate a subdomain based on the app name for you to access your project.

The generated `.lando.yml` looks like this:

{% code title=".lando.yml (generated)" %}
```yaml
name: myapp
recipe: laravel
config:
  webroot: public
```
{% endcode %}

At this point you can already stop and start your development environment:

{% code title="Start Lando" %}
```bash
$ lando start
```
{% endcode %}

Lando will bring up the whole environment. You may have to make small changes to your `.env` file (shown later). The simple Lando file above is enough to start a webserver and a database for Laravel.

{% hint style="info" %}
The `lando init` command has an interactive mode. If you start the command without parameters or skip parameters, it will ask for the missing information interactively.
{% endhint %}

## Customizing the environment

There are many options for customizing the services and versions you want to use. See the Lando docs for Laravel config: https://docs.lando.dev/config/laravel.html#getting-started

Below are some commonly used customizations.

### Setting a PHP version

Add to the `config` section of `.lando.yml`:

{% code title="PHP version" %}
```yaml
config:
  php: '7.4'
```
{% endcode %}

Available: PHP 5.6, 7.0, 7.1, 7.2, 7.3, 7.4 and 8.0. The current default for the Laravel recipe was PHP 7.3 at the time of the original article.

### Setting a Composer version

{% code title="Composer version" %}
```yaml
config:
  composer_version: '1.10.1'
```
{% endcode %}

The current default in the Laravel recipe was 2.0.7 at the time of writing.

### Choosing a webserver

By default the Laravel recipe runs Apache 2.4. To switch to nginx:

{% code title="Use nginx" %}
```yaml
config:
  via: nginx:1.18
```
{% endcode %}

### Setting a database

Default is MySQL 5.7. To use MariaDB or Postgres:

{% code title="Use MariaDB" %}
```yaml
config:
  database: mariadb
```
{% endcode %}

{% code title="Use Postgres 9.6" %}
```yaml
config:
  database: postgres:9.6
```
{% endcode %}

### Setting a caching backend

Add redis or memcached:

{% code title="Use Redis" %}
```yaml
config:
  cache: redis:2.8
```
{% endcode %}

{% code title="Use Memcached" %}
```yaml
config:
  cache: memcached
```
{% endcode %}

You can request specific versions for services as shown.

### Further customizations

You can enable Xdebug:

{% code title="Enable Xdebug" %}
```yaml
config:
  xdebug: true
```
{% endcode %}

You can also add custom config files for services (e.g., custom Nginx config or php.ini). See Lando docs for more details: https://docs.lando.dev/config/laravel.html#configuration

The Lando docs include which PHP extensions are installed by default per PHP version and how to add/remove extensions: https://docs.lando.dev/config/php.html#installed-extensions

## Changes in your .env file

To connect your app to the Lando environment you need to tweak your `.env` file.

* Change `DB_HOST` to `database`.

For MySQL/MariaDB the database settings should look like:

{% code title=".env (MySQL/MariaDB)" %}
```env
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel
```
{% endcode %}

For Postgres:

{% code title=".env (Postgres)" %}
```env
DB_CONNECTION=pgsql
DB_HOST=database
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=postgres
DB_PASSWORD=null
```
{% endcode %}

* Configure cache driver host names according to your Lando config. Example for Redis:

{% code title="Redis config in .env" %}
```env
REDIS_HOST=cache
REDIS_PASSWORD=null
REDIS_PORT=6379
```
{% endcode %}

* Set `APP_URL` to the domain Lando generates. If you used `myapp` as the app name, Lando generates `myapp.lndo.site`. Lando has a wildcard DNS entry for `*.lndo.site` mapped to 127.0.0.1, so:

{% code title="APP_URL" %}
```env
APP_URL=http://myapp.lndo.site
```
{% endcode %}

## Starting Lando

Run `lando start` in the project root. The first time will take longer as images are downloaded. After startup Lando shows a summary of services and available URLs (subdomain and localhost with a port). Note: the localhost port can change each time you start the project.

Open the generated URL (e.g., http://myapp.lndo.site) to see your Laravel app.

## Working with Lando

Common Lando commands:

* `lando start`: Starts the development environment and all services.
* `lando stop`: Stops the development environment and all services.
* `lando destroy`: Destroys the whole environment and removes images from disk.

{% hint style="warning" %}
Caution: `lando destroy` will also delete your database and everything inside the storage folder!
{% endhint %}

* `lando artisan`: Runs artisan commands inside the container (e.g., `lando artisan migrate`).
* `lando composer`: Runs composer inside the container (e.g., `lando composer install`).
* `lando mysql`: Opens a MySQL shell in the container.
* `lando php`: Runs PHP commands inside the container.
* `lando ssh`: SSHs into your app container (where your source code runs).

Database import/export:

* `lando db-export [file]`: Exports your database to a file.
* `lando db-import <file>`: Imports a database dump into your database service.

If you change the `.lando.yml` after you already started the environment at least once, run:

{% code title="Rebuild Lando" %}
```bash
$ lando rebuild
```
{% endcode %}

This recreates the environment with your changes. Persistent data (database, storage folder) remains after rebuild.

## Connecting to your database

You can use any database client (DBeaver, SequelPro, etc.) with the same credentials from your `.env`. Use host `database` for container-internal access.

Alternatively, add phpMyAdmin as an extra service in `.lando.yml` to provide a unified web UI for different projects:

{% code title="Add phpMyAdmin to .lando.yml" %}
```yaml
services:
  pma:
    type: phpmyadmin
    hosts:
      - database
proxy:
  pma:
    - pma.lndo.site
```
{% endcode %}

This adds a phpMyAdmin service, allows access to the `database` host, and proxies it to `pma.lndo.site` so you can access phpMyAdmin for each project at that subdomain.

## Conclusion

Laravel Sail (https://laravel.com/docs/8.x/sail) is another option provided by the Laravel team. Sail is similar in many ways but:

* Sail targets Laravel projects specifically; Lando can be used for any project.
* Sail has more limited infrastructure version customization (e.g., at the time of writing, limited PHP version choices).

You can always customize via Dockerfiles, but Lando provides a simpler layer on top of Docker and Docker Compose to easily configure shareable environments per project.

We at Ideenreich (https://web-ideenreich.at/) use Lando in all our projects daily and are happy with it. I hope this guide shows how powerful it is.

If you have any questions about how we use Lando feel free to contact me on Twitter or by mail.

Last updated 3 years ago
