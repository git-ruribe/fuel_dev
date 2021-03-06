console.log('Hello from sw.js v0.1.1');

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.suppressWarnings();  
workbox.precaching.precacheAndRoute([
  {
    "url": "images/favicon.ico",
    "revision": "3780c065cd18576cbad009fc6ca35c13"
  },
  {
    "url": "images/icons-144.png",
    "revision": "177955fac0886396b725c007c9d3f581"
  },
  {
    "url": "images/icons-192.png",
    "revision": "86d3aba1704e2d4ca88efaaee9335f2a"
  },
  {
    "url": "images/icons-48.png",
    "revision": "d73540fd798e8836ae56bd57bf50bcda"
  },
  {
    "url": "images/icons-512.png",
    "revision": "ed057b95b93b1648f0a7faefe7a23c39"
  },
  {
    "url": "images/icons-72.png",
    "revision": "ca36888c5dcdbeaaa176d35e71a05952"
  },
  {
    "url": "images/icons-96.png",
    "revision": "ae15779acc418bc277a7b72b4573a18d"
  },
  {
    "url": "index.html",
    "revision": "6d7088b924f50453220856142ee07eba"
  },
  {
    "url": "js/my-app.js",
    "revision": "a8efe7fe6a2b8fbb986699bd90a479b0"
  },
  {
    "url": "libs/framework7.css",
    "revision": "aedcbb2482cd5c0b62a1aa5257ceb28f"
  },
  {
    "url": "libs/framework7.js",
    "revision": "a9700cc57ac53ebfa01dc4aba7fd3454"
  },
  {
    "url": "libs/normalize.css",
    "revision": "3e883482cfcbb1d88865a04d796c7768"
  },
  {
    "url": "libs/pouchdb-7.0.0.min.js",
    "revision": "12d23e3295590b71657939cdb7aba451"
  },
  {
    "url": "my-app.css",
    "revision": "c812747f9d841a840e7c3c06e7d67af4"
  },
  {
    "url": "sw_source.js",
    "revision": "a826737f3af1f01aa8307c5ab94021eb"
  },
  {
    "url": "workbox-config.js",
    "revision": "b42248e9c5b76a719c1994965e0017b5"
  }
]);

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});

