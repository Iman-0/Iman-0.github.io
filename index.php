<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="styles.css">

  <!--
    If you are serving your web app in a path other than the root, change the
    href value below to reflect the base path you are serving from.

    The path provided below has to start and end with a slash "/" in order for
    it to work correctly.

    For more details:
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base

    This is a placeholder for base href that will be replaced by the value of
    the `--base-href` argument provided to `flutter build`.
  -->
  <base href="/">

  <meta charset="UTF-8">
  <meta content="IE=Edge" http-equiv="X-UA-Compatible">
  <meta name="description" content="DXera website.">

  <!-- iOS meta tags & icons -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="DXera">
  <link rel="apple-touch-icon" href="icons/Icon-192.png">

  <!-- Favicon -->
  <!-- <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
  <link rel="icon" type="image/x-icon" href="favicon.ico"/> -->
  <!-- Favicon -->
  <link href="favicon-light.png" rel="shortcut icon" type="image/png" media="(prefers-color-scheme: dark)" />
  <link href="favicon-dark.png" rel="shortcut icon" type="image/png" media="(prefers-color-scheme: light)" />

  <title>DXera</title>
  <!-- <link rel="manifest" href="manifest.json"> -->

  <script>
    // The value below is injected by flutter build, do not touch.
    const serviceWorkerVersion = "2788843722";
  </script>
  <!-- This script adds the flutter initialization JS code -->
  <script src="flutter.js" defer></script>
</head>

<body>
  <img src="images/splash.gif" alt="splash" class="center" />
  <script>
    let useHtml = true;

    window.addEventListener('load', function (ev) {
      // Download main.dart.js
      _flutter.loader.loadEntrypoint({
        serviceWorker: {
          serviceWorkerVersion: serviceWorkerVersion,
        },
        onEntrypointLoaded: function (engineInitializer) {
          let config = {
            renderer: useHtml ? "html" : "canvaskit",
          };
          engineInitializer.initializeEngine().then(function (appRunner) {
            appRunner.runApp();
          });
        }
      });
    });

    // window.addEventListener('beforeinstallprompt', function (e) {
    //   e.preventDefault();
    //   return false;
    // });

    // select the favicon 👉
    const faviconEl = document.querySelector('link[rel="shortcut icon"]')

    // watch for changes 🕵️
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    mediaQuery.addEventListener('change', themeChange)

    // listener 👂
    function themeChange(event) {
      if (event.matches) {
        faviconEl.setAttribute('href', 'favicon-dark.png')
      } else {
        faviconEl.setAttribute('href', 'favicon-light.png')
      }
    }


  </script>

</body>

</html>