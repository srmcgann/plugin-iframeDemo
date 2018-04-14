# KiwiIRC - Jitsi Meet Plugin

This plugin demonstrates how a plugin can use the iframe functionality of the new media viewer.

Features -

There is a new parameter in calls to kiwi.emit('mediaviewer.open', url, false)

the 'false' at the end can be omitted, or set to true to activate an iframe within
the media viewer. if set to true, the url may point to any webpage that allows
access from within an iframe.

clone or copy the plugin into ./static/plugins/

Add the following to ./static/config.json

    "iframeDemo":{ "url": "https://lookie.ml/gallery/headlessgallery.php" },
    "plugins": [
      {"name": "iframeDemoPlugin", "url": "/static/plugins/plugin-iframeDemo/dist/main.js"}
    ]
  
  


Questions? scott@londontrustmedia.com