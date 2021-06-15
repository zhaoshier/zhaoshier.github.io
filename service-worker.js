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
    "url": "1.gif",
    "revision": "cba5d68896f34b58e3b0b6541f79de09"
  },
  {
    "url": "404.html",
    "revision": "59451c64146c002f7e9a8897f339521a"
  },
  {
    "url": "assets/css/0.styles.7ab2d69e.css",
    "revision": "6e8eed3abf107a67d4584606693082da"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.e397a095.js",
    "revision": "6445fce6ef875b3582c3d1aa7a884e97"
  },
  {
    "url": "assets/js/10.d6416e9b.js",
    "revision": "0cceadba8fd7cac137cb8a0c0138b5ac"
  },
  {
    "url": "assets/js/11.a9b14055.js",
    "revision": "98bb34713da78f6f61b0abab87b7f59d"
  },
  {
    "url": "assets/js/12.0aa64e20.js",
    "revision": "016b59e81ef3e394b719f553a3561572"
  },
  {
    "url": "assets/js/13.b7ca8a2e.js",
    "revision": "bc7f3cd8af8a4a2029e496363f8eefee"
  },
  {
    "url": "assets/js/14.611cc6a7.js",
    "revision": "cdb573b9d0604da2cec57053c168600b"
  },
  {
    "url": "assets/js/15.f3bfe04b.js",
    "revision": "96ba787aceb3e5714e44e76e11da13e8"
  },
  {
    "url": "assets/js/16.ab8f74c5.js",
    "revision": "d299b8b0d5d13fb0fe3fb28983b802b7"
  },
  {
    "url": "assets/js/17.5157cfa4.js",
    "revision": "71b93138431831ad467e850f29ff79a2"
  },
  {
    "url": "assets/js/18.0047ff84.js",
    "revision": "e8fa43b28a5c7de04c28b06fb9c5cbbf"
  },
  {
    "url": "assets/js/19.aa8f6162.js",
    "revision": "3900b931845aedc99192aa91f186e237"
  },
  {
    "url": "assets/js/20.1a9080d2.js",
    "revision": "e4d85ecbaa73eba89cbf6b7f8d438d8a"
  },
  {
    "url": "assets/js/21.9a2fe0e4.js",
    "revision": "664df8e1221298bf41f52f82da5a3a88"
  },
  {
    "url": "assets/js/22.d99a70c2.js",
    "revision": "904ddfb22bddef7ee6b031a3555889ed"
  },
  {
    "url": "assets/js/23.448d2dd6.js",
    "revision": "9eb14cb33a6841934fbd90632e792fad"
  },
  {
    "url": "assets/js/24.fd866c27.js",
    "revision": "d6298a041751fd1a249247f381df5ffb"
  },
  {
    "url": "assets/js/25.8de5307e.js",
    "revision": "c85cf81cf30633f84c9b29eb623cdaaa"
  },
  {
    "url": "assets/js/26.7bec3d88.js",
    "revision": "4f83a1f07b76efb3f22de977730bbfcc"
  },
  {
    "url": "assets/js/27.15d1fd29.js",
    "revision": "8af2f8a24b2ed67b26a0a30df08f1ba5"
  },
  {
    "url": "assets/js/28.681e9ec9.js",
    "revision": "a21f1e687b71c918ff9db971b654ca6e"
  },
  {
    "url": "assets/js/29.368186fd.js",
    "revision": "ddf026228898f0ed55cf5e4a31707e66"
  },
  {
    "url": "assets/js/3.435bcf7a.js",
    "revision": "443d3fabef5bfdd416b0f13349213597"
  },
  {
    "url": "assets/js/30.8082b692.js",
    "revision": "01c702787fdf67af1b9bd0940e50d479"
  },
  {
    "url": "assets/js/31.1b253a57.js",
    "revision": "da2bf40a6e23467a2277703543823a20"
  },
  {
    "url": "assets/js/32.5a0816e5.js",
    "revision": "aee40f29ef50c0ff0fa3171e9b8d10da"
  },
  {
    "url": "assets/js/33.ab27a8e8.js",
    "revision": "4ea8bc303ab65e5500b769c27ba0fd05"
  },
  {
    "url": "assets/js/34.8666dc2a.js",
    "revision": "216add0c701c75743e951d517f6e41ca"
  },
  {
    "url": "assets/js/35.74a029cd.js",
    "revision": "8210fc8f911553993a54f9c3eb52a2d8"
  },
  {
    "url": "assets/js/36.4d3415f3.js",
    "revision": "45843436c0771eedd943d6f359b4d423"
  },
  {
    "url": "assets/js/37.b4cf6ab6.js",
    "revision": "f985b282eead755eb90bc5f3d0b132d1"
  },
  {
    "url": "assets/js/38.4f252aec.js",
    "revision": "472dc36e4e2982cd2edd0970781569cf"
  },
  {
    "url": "assets/js/39.8726f876.js",
    "revision": "de043cff3cdb95c66532bfcf4c1e741b"
  },
  {
    "url": "assets/js/4.b513a962.js",
    "revision": "8fdc74ce171882b64932e76c4f180244"
  },
  {
    "url": "assets/js/40.dea270a3.js",
    "revision": "9aa4d3b2b0d5cb36d39d7def45f1947b"
  },
  {
    "url": "assets/js/41.fd96c727.js",
    "revision": "e5c7093bd5ef69069a624901c94b9332"
  },
  {
    "url": "assets/js/42.41947ac0.js",
    "revision": "3a038c0869322126444408c97b4efab8"
  },
  {
    "url": "assets/js/43.cc418c2a.js",
    "revision": "9de3d638579eded55df6e6de2e51b6d4"
  },
  {
    "url": "assets/js/44.817e58bb.js",
    "revision": "0d5164f73d29286e7e69740d111a336c"
  },
  {
    "url": "assets/js/45.963b1e53.js",
    "revision": "bc98b511263e7afd4ed89e8a9256f9d2"
  },
  {
    "url": "assets/js/46.c603a166.js",
    "revision": "810f866cb50cd262fcd2d94f18551c36"
  },
  {
    "url": "assets/js/47.980cf275.js",
    "revision": "28c70963218f655a0e2112035956e783"
  },
  {
    "url": "assets/js/5.afbe365b.js",
    "revision": "d408298c4524d222b0baa056cc1a65e0"
  },
  {
    "url": "assets/js/6.fae8141b.js",
    "revision": "0a9572d2b87731e27d3ab5af7b00f9b4"
  },
  {
    "url": "assets/js/7.b2462bb5.js",
    "revision": "d483abdfcc377e208b68c4dceb11c196"
  },
  {
    "url": "assets/js/8.f462464b.js",
    "revision": "cbe94cefd2064daac044dc22552a4aca"
  },
  {
    "url": "assets/js/9.c6147cfd.js",
    "revision": "72c96948f003bf11dc6f1f4cdc01a0b5"
  },
  {
    "url": "assets/js/app.14027278.js",
    "revision": "338837ac7285e930ad0cdcfa7bf83c80"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "bg.gif",
    "revision": "bc160acfef4871ef82adc8e407d48db4"
  },
  {
    "url": "blogs/Browser/2020/Blob.html",
    "revision": "8d5828716c6ae43a3bb2582b6f2e2238"
  },
  {
    "url": "blogs/Browser/2020/formData_Blob_FileReader.html",
    "revision": "38e4832962a178489165e65f322b2382"
  },
  {
    "url": "blogs/CSS/2020/background.html",
    "revision": "db5eed68c41684b2031d9ff801e4a3f3"
  },
  {
    "url": "blogs/CSS/2020/BFC.html",
    "revision": "2b94d436a56d92018f1dcff5a390c4fe"
  },
  {
    "url": "blogs/CSS/2020/center_x_y.html",
    "revision": "daf7f81438200aad8385d7af468f4143"
  },
  {
    "url": "blogs/CSS/2020/clearFloat.html",
    "revision": "6f1dd8c4d0ce508a89231cbb43880acd"
  },
  {
    "url": "blogs/CSS/2020/cssPercent.html",
    "revision": "47a7750ce18c1ad918989125275cff06"
  },
  {
    "url": "blogs/CSS/2020/cssUnit.html",
    "revision": "0f2a623d9db8426cca78d72025ee6fec"
  },
  {
    "url": "blogs/CSS/2020/flex.html",
    "revision": "607ca57d8aa1a5cd154f35684f878540"
  },
  {
    "url": "blogs/CSS/2020/hidden_methods.html",
    "revision": "ac094afa322176fcd4002a4925d1dd1f"
  },
  {
    "url": "blogs/CSS/2020/selector.html",
    "revision": "8ce02931e4bbacf3c045b86491befac1"
  },
  {
    "url": "blogs/CSS/2021/SCSS.html",
    "revision": "b6b37e6cef5dc3d717ed9ed1ad42fa16"
  },
  {
    "url": "blogs/JS/2020/121501.html",
    "revision": "5f2f9c58342ee52b34efe790f2964a6c"
  },
  {
    "url": "blogs/JS/2020/functionCreate.html",
    "revision": "d18871f5355e543632d0e76c1f467cf1"
  },
  {
    "url": "blogs/JS/2020/let_const_var.html",
    "revision": "a3bf53fb0e6dce51ffa1a509a9021ac1"
  },
  {
    "url": "blogs/JS/2020/proto_prototype_constructor.html",
    "revision": "66170861ed60d1c025a4e31ac4e86a45"
  },
  {
    "url": "blogs/JS/2020/this_arrowFunc.html",
    "revision": "d9623856d68e60433cb1b11ced328f42"
  },
  {
    "url": "blogs/JS/2020/this_four.html",
    "revision": "538016443a35d9108b4356667b60f28f"
  },
  {
    "url": "blogs/JS/2020/var_func_Promotion.html",
    "revision": "c66e439f15d21e45435524738740a91d"
  },
  {
    "url": "blogs/JS/2021/dateApplication.html",
    "revision": "6e345b58fa4118afa6a65554c4394f00"
  },
  {
    "url": "blogs/JS/2021/dateFunction.html",
    "revision": "e11ce2bfa3464a1969e386e37a54dc23"
  },
  {
    "url": "blogs/Nodejs/npm.html",
    "revision": "d2cf30e66fc7ccea2614bf8470498d28"
  },
  {
    "url": "blogs/other/2020/create_vuepressBolg.html",
    "revision": "71e287aaae464583beaa64b6d6e99006"
  },
  {
    "url": "blogs/other/2020/guide.html",
    "revision": "f80d6f05e616c8b755b4370a8eb3ee28"
  },
  {
    "url": "blogs/other/2020/InsertPicture_markdown.html",
    "revision": "74aed844fe52055af22c1c85466c3728"
  },
  {
    "url": "blogs/other/2020/VSCode_shortcut_key.html",
    "revision": "aa1d7f56dd6d7fdb2e3d5310575eeffe"
  },
  {
    "url": "blogs/VUE/2020/121501.html",
    "revision": "c49c443655686ac873bf089268a0dc28"
  },
  {
    "url": "blogs/VUE/2020/componentsCommunication.html",
    "revision": "335cd89b325b4b537630e84cefea312f"
  },
  {
    "url": "blogs/VUE/2021/class_id.html",
    "revision": "69de2a6b7291117dc63c708964a277be"
  },
  {
    "url": "blogs/VUE/2021/reload.html",
    "revision": "04b8ecbe77c78ca6cf1789a0753206bc"
  },
  {
    "url": "blogs/VUE/2021/uploadFile.html",
    "revision": "c0d7f3df97243e1f4e2fee342b243e75"
  },
  {
    "url": "blogs/VUE/2021/vue_config_js.html",
    "revision": "d1c98288d46b75d152de6eeec2c1ba75"
  },
  {
    "url": "blogs/VUE/2021/vue-cli.html",
    "revision": "f8acb212384144daef6602ffa9db7c06"
  },
  {
    "url": "blogs/VUE/2021/vuex.html",
    "revision": "8b7f2e359e4c8bee8da3a2b7d095f11a"
  },
  {
    "url": "blogs/VUE/2021/watch_props.html",
    "revision": "1c55731706f3038f8ea0b61f1b0aa574"
  },
  {
    "url": "categories/Browser/index.html",
    "revision": "279f7e0a552ebe7b582208b10172808c"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "896ce3abfadbe28110f46515c538863f"
  },
  {
    "url": "categories/index.html",
    "revision": "117d0f7b22b0cd6b79d262c5189e26f7"
  },
  {
    "url": "categories/Javscript/index.html",
    "revision": "fe86a228db9d30e2bddb3db10f9a8e27"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "51dbaf4d7ee53e97ef8404086245c990"
  },
  {
    "url": "categories/other/index.html",
    "revision": "463a5bafc9bd7319503750336b5d947d"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0f4e6a2e8d26f55f2a775bd59ddd40a3"
  },
  {
    "url": "earth.png",
    "revision": "052c9646f899e2da9cbcdeeb18f1f4ed"
  },
  {
    "url": "groundpic.jpg",
    "revision": "e5a6c9cbdb5a5a041625283cb3f7e97f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "366970878fdbdab265ded2ead5ec312c"
  },
  {
    "url": "js/clicklove.js",
    "revision": "1e09956c0fbc98f61afed789839b69c7"
  },
  {
    "url": "js/clickWord.js",
    "revision": "c0bd4e113d4919bda704e437303f562e"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "sun.jpg",
    "revision": "a59b0393340efb10d1cc1cdbccaa4b66"
  },
  {
    "url": "tag/Browser/index.html",
    "revision": "7300096028673ade87273c3b683c5543"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "b43cd2661a8581c7bc610aff97d0c8a0"
  },
  {
    "url": "tag/index.html",
    "revision": "f46dda3ec58c2e1d4d590461d5bd6c82"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "59635b58d7e76b4d81ae276d7c0828bb"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "65ca4475b4c6c5abc04bc3d78215ed7a"
  },
  {
    "url": "tag/other/index.html",
    "revision": "e3a74d592b054906eaae7e885276a381"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "166e84b72266dbd1e3a02dbd729a319c"
  },
  {
    "url": "timeline/index.html",
    "revision": "115789c7362a6844ac8a60cee4cd6d11"
  },
  {
    "url": "weixin.jpg",
    "revision": "3a5a49121af7a8f44c08a14af29848f4"
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
