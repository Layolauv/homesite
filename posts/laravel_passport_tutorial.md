---
title: 'User Auth and Access Control With Laravel Passport'
date: '2021-06-01'
tags: ['PHP', 'Laravel']
img: '/blog-assets/laravel_passport_tutorial.jpg'
description: "Setting up authentication and state in a stateless API context might seem somewhat problematic. But Laravel Passport gives developers a clean, straightforward way to add OAuth 2.0 to an app's API."
---
When developing a web application, it is generally a good idea to split it into two tiers. A middle-tier API interacts with the database, and a web tier usually consists of a front-end SPA or MPA. This way, a web application is more loosely coupled, making it easier to manage and debug in the long run.
When the API has been created, setting up authentication and state in a stateless API context might seem somewhat problematic.  In this article, we'll look at how to implement full user authentication and a simple form of access control in an API using Laravel and Passport. You should have experience working with Laravel as this is not an introductory tutorial.


## Installation Prerequisites

- **PHP 7+**, **MySQL**, and **Apache** (developers wanting to install all three at once can use XAMPP)
- **Composer**
- **Laravel 7**
- **Laravel Passport**: Since APIs are generally stateless and do not use sessions, we generally use tokens to keep state between requests. Laravel uses the Passport library to implement a full OAuth2 server we can use for authentication in our API.
- **Postman**, **cURL**, or **Insomnia** to test the API—this is up to personal preference.
- Text editor of your choice.
- **Laravel helpers** (for Laravel 6.0 and up)—after installing Laravel and Passport, run:

```bash
composer require laravel/helpers
```

With the above installed, we're ready to get started. Make sure to set up your database connection by editing the `.env` file.

---

## Laravel Passport Tutorial, Step 1: Add a Controller and Model for Dummy Requests

First, we're going to create a controller and model for dummy requests. The model isn't going to be of much use in this tutorial; it's just to give an idea of the data the controller is meant to manipulate.

Before creating the model and controller, we need to create a migration. In a terminal—or `cmd.exe` window, if you're using Windows—run:

```bash
php artisan make:migration create_articles_table --create=articles
```

Now, go to the `database/migrations` folder and open the file with a name similar to `xxxx_xx_xx_xxxxxx_create_articles_table.php`.

In the `up` function of the class, we'll write this:

```php
Schema::create('articles', function (Blueprint $table) {
    $table->increments('id');
    $table->string('title');
    $table->string('body');
    $table->integer('user_id');
    $table->timestamps();
});
```

Next, we'll create an `Article` model. To do that, run:

```bash
php artisan make:model Article
```

We then create the `ArticleController` controller by running:

```bash
php artisan make:controller ArticleController --resource
```

Next, we'll edit the file `app/Providers/AppServiceProvider.php` and import the `Illuminate\Support\Facades\Schema` class by adding:

```php
use Illuminate\Support\Facades\Schema;
```

…to the bottom of the imports at the top of the file.

Then, in the `boot` function, we'll write:

```php
Schema::defaultStringLength(191);
```

After all of this is done, we can run:

```bash
php artisan migrate
```

…to apply the migration we created above.

---

## Laravel Passport Tutorial, Step 2: Create the Necessary Pieces of Middleware

Here, we will add the pieces of middleware that will be necessary for the API to work.

### JSON Responses

The first piece needed is the `ForceJsonResponse` middleware, which will convert all responses to JSON automatically.

To do this, run:

```bash
php artisan make:middleware ForceJsonResponse
```

And this is the `handle` function of that middleware, in `app/Http/Middleware/ForceJsonResponse.php`:

```php
public function handle($request, Closure $next)
{
    $request->headers->set('Accept', 'application/json');
    return $next($request);
}
```

Next, we'll add the middleware to our `app/Http/Kernel.php` file in the `$routeMiddleware` array:

```php
'json.response' => \App\Http\Middleware\ForceJsonResponse::class,
```

Then, we'll also add it to the `$middleware` array in the same file:

```php
\App\Http\Middleware\ForceJsonResponse::class,
```

That would make sure that the `ForceJsonResponse` middleware is run on every request.

### CORS (Cross-origin Resource Sharing)

To allow the consumers of our Laravel REST API to access it from a different origin, we have to set up CORS. To do that, we'll create a piece of middleware called `Cors`.

In a terminal or command prompt, `cd` into the project root directory and run:

```bash
php artisan make:middleware Cors
```

Then, in `app/Http/Middleware/Cors.php`, add the following code:

```php
public function handle($request, Closure $next)
{
    return $next($request)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
}
```

To load this piece of middleware, we'll need to add a line to `app/Http/Kernel.php`'s `$routeMiddleware` array:

```php
'cors' => \App\Http\Middleware\Cors::class,
```

And also add it to the `$middleware` array:

```php
\App\Http\Middleware\Cors::class,
```

---

## Summary

This tutorial covers setting up a Laravel API with OAuth 2.0 authentication using Laravel Passport, custom middleware for JSON response formatting, and CORS handling.
