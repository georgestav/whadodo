<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Whadodo!</title>
</head>

<body class="antialiased">
    <noscript>You need to enable Javascript to run this Application</noscript>
    <div id="modalRoot"></div>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>