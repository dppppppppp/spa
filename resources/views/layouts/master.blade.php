<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/app.css">
    <title>SPA</title>
</head>
<body>
<div id="app">
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">SPA</router-link>
            </div>

            <ul class="nav navbar-nav navbar-right">
                <router-link tag="li" to="/about"><a>关于</a></router-link>
            </ul>
        </div>
    </nav>

    <router-view></router-view>
</div>
<script src="/js/app.js"></script>
</body>
</html>
