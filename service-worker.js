/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "986d759b5b5adf1b1231ae6f0abb3755"
  },
  {
    "url": "about/about.html",
    "revision": "8d1931280ef35163f160c0ee41f1ab9a"
  },
  {
    "url": "assets/css/0.styles.2c047b57.css",
    "revision": "906c35970525bd2915a03240293bd3ab"
  },
  {
    "url": "assets/img/classloader1.4f898353.png",
    "revision": "4f898353c8adb0182b7815dac4ccc16f"
  },
  {
    "url": "assets/img/classloader10.54c1969e.png",
    "revision": "54c1969e9f8db2307ec4ebcdbf62fd51"
  },
  {
    "url": "assets/img/classloader2.9b32f540.png",
    "revision": "9b32f540cc783382e58f54356e7844cc"
  },
  {
    "url": "assets/img/classloader3.753fa65b.png",
    "revision": "753fa65be318bc22e2526ab51a7bacfc"
  },
  {
    "url": "assets/img/classloader4.0606a461.png",
    "revision": "0606a46111ddbc8cd4d565fcfe009ad8"
  },
  {
    "url": "assets/img/classloader5.2a833c15.png",
    "revision": "2a833c15d910b7cd22a0e32bb5e799a9"
  },
  {
    "url": "assets/img/classloader6.30025272.png",
    "revision": "300252723238cfd8e108623eda756f60"
  },
  {
    "url": "assets/img/classloader7.dc66ad97.png",
    "revision": "dc66ad97d5f560617b593fde79453133"
  },
  {
    "url": "assets/img/classloader8.f03c086d.png",
    "revision": "f03c086db7c4ddcfce5866fd1288af80"
  },
  {
    "url": "assets/img/classloader9.ab21867d.png",
    "revision": "ab21867db5ab9dc375f6c0230fa031d6"
  },
  {
    "url": "assets/img/demo1.f07bd499.png",
    "revision": "f07bd4998aca0094493a142b07fa616f"
  },
  {
    "url": "assets/img/demo2.19b503a0.png",
    "revision": "19b503a016f3581c760b9f77afe9f5a7"
  },
  {
    "url": "assets/img/jvm1.907c65cb.png",
    "revision": "907c65cbd9efc66c2ae850fe40338899"
  },
  {
    "url": "assets/img/jvm2.99fea136.png",
    "revision": "99fea136aa369c4734dbc1f80c08766e"
  },
  {
    "url": "assets/img/jvm3.e359b728.png",
    "revision": "e359b728e7a871724573596508161321"
  },
  {
    "url": "assets/img/jvm4.e4e48c67.png",
    "revision": "e4e48c678ded4c6d11447bcf26a3b8ae"
  },
  {
    "url": "assets/img/jvm5.6580f8cc.png",
    "revision": "6580f8cce97ccad5eb6898306d36c192"
  },
  {
    "url": "assets/img/jvm6.01dc5c4f.png",
    "revision": "01dc5c4fd81f934a1f861cd2fc5c2d91"
  },
  {
    "url": "assets/img/jvm7.07758006.png",
    "revision": "077580066756a1eaad7b02d6567e96e0"
  },
  {
    "url": "assets/img/jvm8.ae8fd4ba.png",
    "revision": "ae8fd4ba72920d699d5ecdfd9be962c2"
  },
  {
    "url": "assets/img/jvm9.691f1c22.png",
    "revision": "691f1c225d4dcd53b8e5466739362570"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "5834adb57133fe3d233cda11cb51edec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d72af21d.js",
    "revision": "c8ecd095561c56f2fbf66e8419426d31"
  },
  {
    "url": "assets/js/11.e712f012.js",
    "revision": "98220fb2869b7a72e96d312bf53187a9"
  },
  {
    "url": "assets/js/12.0ea205eb.js",
    "revision": "13351d517875474a06beb8aaaeb29e5d"
  },
  {
    "url": "assets/js/13.4f8bc268.js",
    "revision": "8e9d82be37d3ebf2a9b5a996667f4e95"
  },
  {
    "url": "assets/js/14.70efb76f.js",
    "revision": "6fe75d512027243ffc40c0b83848b1e9"
  },
  {
    "url": "assets/js/2.7d223d1f.js",
    "revision": "dbaa8afed61b412e7de84216db63950a"
  },
  {
    "url": "assets/js/3.8fb3951d.js",
    "revision": "f0559692eea33c7118acbf6400ee8461"
  },
  {
    "url": "assets/js/4.078210e4.js",
    "revision": "016fe6e7aedb57f4f1bf7b41b6b25333"
  },
  {
    "url": "assets/js/5.f79f8493.js",
    "revision": "2272929d7767d052e43fbd1303283884"
  },
  {
    "url": "assets/js/6.6b9d5c19.js",
    "revision": "9c0b2961530f974f039f91e1bfa02be0"
  },
  {
    "url": "assets/js/7.caa7db18.js",
    "revision": "ed086ce5c91ff0e17983c36ace0dcc66"
  },
  {
    "url": "assets/js/8.2ec7fb3b.js",
    "revision": "8b6d596c4e563aa9977e421dd6aca353"
  },
  {
    "url": "assets/js/9.503cea64.js",
    "revision": "1ff3bc1d3d1d33b6d738f23275a59b0f"
  },
  {
    "url": "assets/js/app.ce5e5b94.js",
    "revision": "d56bfb6dc51dc7aea93d12040d077b3b"
  },
  {
    "url": "icons/128.png",
    "revision": "fdbd3f1d7fe918a5221f1e9ae3e2e61f"
  },
  {
    "url": "icons/144.png",
    "revision": "77b8b974101dd4ced51cc6bf195fe656"
  },
  {
    "url": "icons/192.png",
    "revision": "4efb6bac1664b6a104902cbc2ac87960"
  },
  {
    "url": "icons/256.png",
    "revision": "13b69d3bf2e33ddfebad8cececf3655d"
  },
  {
    "url": "icons/512.png",
    "revision": "ebf25efdbcbe4a7ad35531b739dac1d9"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "77b8b974101dd4ced51cc6bf195fe656"
  },
  {
    "url": "icons/msapplication-icon-144x144.png.png",
    "revision": "77b8b974101dd4ced51cc6bf195fe656"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "72e38b1bc195b639b2e09da57ee2660d"
  },
  {
    "url": "index.html",
    "revision": "c8f3b93c552767e98c58cda7f65ec29a"
  },
  {
    "url": "interview/JVM.html",
    "revision": "30fd7419727f938f35082ff483e51050"
  },
  {
    "url": "interview/基础.html",
    "revision": "2a231bef3793f9f9dd2bd3bab50b0f76"
  },
  {
    "url": "interview/类加载.html",
    "revision": "9367f7cb467fefec4e1c737ecd38dcb1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
