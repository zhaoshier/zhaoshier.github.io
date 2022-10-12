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
    "revision": "b998cb208e902565b40eeb8c5c95409c"
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
    "url": "assets/js/12.3b8e378f.js",
    "revision": "92627ee7779094191b811a377f7589f5"
  },
  {
    "url": "assets/js/13.a9188071.js",
    "revision": "efd36434923d878465b0f482852d77e7"
  },
  {
    "url": "assets/js/14.7ea88528.js",
    "revision": "6bc338bf4c7ab1207e9ecbcd53846f99"
  },
  {
    "url": "assets/js/15.087744bf.js",
    "revision": "b7b4f1403d6be422fa21779190bedfc2"
  },
  {
    "url": "assets/js/16.d6abfd10.js",
    "revision": "27c7cc4bbd04d4f95db61f76345a81ea"
  },
  {
    "url": "assets/js/17.022d4384.js",
    "revision": "cb9276d336b4fb9f24be172629c35983"
  },
  {
    "url": "assets/js/18.f6bbd640.js",
    "revision": "dfe9995ce714b9189fe593fe54d249b6"
  },
  {
    "url": "assets/js/19.b0612176.js",
    "revision": "ff698e296f1eae169d36317725b6def8"
  },
  {
    "url": "assets/js/20.554972e1.js",
    "revision": "e58682c92e1c53fc4833d2cc44f701cc"
  },
  {
    "url": "assets/js/21.fdfa7b11.js",
    "revision": "6d5ccc8d9cc6354111560ea843a6718d"
  },
  {
    "url": "assets/js/22.30e09480.js",
    "revision": "eda3b9090f3a0bd388e55650a484aa9f"
  },
  {
    "url": "assets/js/23.e697dfa5.js",
    "revision": "adc1e2f03c60c90b8c60e544e1e0f752"
  },
  {
    "url": "assets/js/24.2e71ebe5.js",
    "revision": "7dee16663e59c159724592e1074aabfd"
  },
  {
    "url": "assets/js/25.dc8369cb.js",
    "revision": "6900b1e4056a6f7cda68a1adc0ac9a3f"
  },
  {
    "url": "assets/js/26.7bec3d88.js",
    "revision": "4f83a1f07b76efb3f22de977730bbfcc"
  },
  {
    "url": "assets/js/27.3d04839c.js",
    "revision": "5688235351e0c0387602b5bb76a1af8c"
  },
  {
    "url": "assets/js/28.db73084e.js",
    "revision": "bbd7a66e91779e80901ad4beb6b8f391"
  },
  {
    "url": "assets/js/29.3bcc02a8.js",
    "revision": "0368665459e5b45155152ad5d09abfd0"
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
    "url": "assets/js/31.15c69988.js",
    "revision": "4e8a708246e7b96d87150c669689f7bd"
  },
  {
    "url": "assets/js/32.50c3fe8e.js",
    "revision": "61f739b0d44699fa27221b0f1df7b48b"
  },
  {
    "url": "assets/js/33.f3dff2eb.js",
    "revision": "db743e4fbb382190f9a866ddf3b89ff7"
  },
  {
    "url": "assets/js/34.dd33154c.js",
    "revision": "e9a0e6417f3c5c21f0ca2ffb3578715b"
  },
  {
    "url": "assets/js/35.9c503dea.js",
    "revision": "0ba78fda8c1ecf6fb81b5d4ade6d7052"
  },
  {
    "url": "assets/js/36.7ae5d3ff.js",
    "revision": "2b30e67fc39430dfd6b76f9d6499adbc"
  },
  {
    "url": "assets/js/37.673b69c9.js",
    "revision": "50902600d59f93847481c5dd5d90becb"
  },
  {
    "url": "assets/js/38.507aa4f2.js",
    "revision": "c2311c0bbeb91946fc7a50e0a31b3d04"
  },
  {
    "url": "assets/js/39.5207cc49.js",
    "revision": "7770ec589c6d03f4e0d3a2552c7d25a0"
  },
  {
    "url": "assets/js/4.b513a962.js",
    "revision": "8fdc74ce171882b64932e76c4f180244"
  },
  {
    "url": "assets/js/40.14560d52.js",
    "revision": "acfa9b64aa8595094244314b09a9ccc6"
  },
  {
    "url": "assets/js/41.324a0241.js",
    "revision": "31895799f02d42370e6e88654950f2da"
  },
  {
    "url": "assets/js/42.8824a827.js",
    "revision": "7d12523f103723b50dc12dd782cdc76c"
  },
  {
    "url": "assets/js/43.bd142ab6.js",
    "revision": "a6297a1b6efaf80f70e6fd7f1b69c732"
  },
  {
    "url": "assets/js/44.099fb1ff.js",
    "revision": "979063798e28fa6f89b518312b4b3d85"
  },
  {
    "url": "assets/js/45.2a035d79.js",
    "revision": "26b45c9f13ef72ceaafc6f2708c97d13"
  },
  {
    "url": "assets/js/46.c63a0592.js",
    "revision": "0f01874e18a15bea81282520015f8dc1"
  },
  {
    "url": "assets/js/47.f8638fd7.js",
    "revision": "ad7f655966b079e033eeb9396224136a"
  },
  {
    "url": "assets/js/48.b3dca1eb.js",
    "revision": "5698a65c5f02db34e3e07a1fc1f3aa11"
  },
  {
    "url": "assets/js/49.96f9bdab.js",
    "revision": "8d08ddbfecef92a65b20d720fb8bc73a"
  },
  {
    "url": "assets/js/5.afbe365b.js",
    "revision": "d408298c4524d222b0baa056cc1a65e0"
  },
  {
    "url": "assets/js/50.e5943722.js",
    "revision": "03d53537a59660b01207ab018a4d763f"
  },
  {
    "url": "assets/js/51.08bf7aca.js",
    "revision": "57e6e01a8f51aee2d61b435e1fd4a6bb"
  },
  {
    "url": "assets/js/52.1f04f607.js",
    "revision": "441e556fd6cc471759ba4de35a844ee2"
  },
  {
    "url": "assets/js/53.a4b299ee.js",
    "revision": "e18ae70dc5ae160e5e93d4a6d9cfe1e3"
  },
  {
    "url": "assets/js/54.483daa75.js",
    "revision": "089f4e7c3fc65261ecbbe5997a9a8905"
  },
  {
    "url": "assets/js/55.aed65879.js",
    "revision": "183af6305ae234f7527120761073ec76"
  },
  {
    "url": "assets/js/56.d214b249.js",
    "revision": "ef80345f4445bf9db0c98e217b60d08b"
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
    "url": "assets/js/9.cb95f4bf.js",
    "revision": "ed0f91be4eb6f3adb0c99b971742f9bf"
  },
  {
    "url": "assets/js/app.387d8894.js",
    "revision": "97da6a807bb69e244d5e1c22b65b9150"
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
    "revision": "e155bdd7fe13467d148c243039512d11"
  },
  {
    "url": "blogs/Browser/2020/formData_Blob_FileReader.html",
    "revision": "12896db1b8a58b86666931809d264c90"
  },
  {
    "url": "blogs/CSS/2020/background.html",
    "revision": "4b59983820fc4804d8f362d745a0d178"
  },
  {
    "url": "blogs/CSS/2020/BFC.html",
    "revision": "3678d50b5577bd824fc324886a7338d9"
  },
  {
    "url": "blogs/CSS/2020/center_x_y.html",
    "revision": "236761cde6688c5f7ee1440f3199acbc"
  },
  {
    "url": "blogs/CSS/2020/clearFloat.html",
    "revision": "a4ff0b64e96b95aed4a95bf33f336c61"
  },
  {
    "url": "blogs/CSS/2020/cssPercent.html",
    "revision": "3aca926b5a5e85c4a79e1cff82885faf"
  },
  {
    "url": "blogs/CSS/2020/cssUnit.html",
    "revision": "d7de999045c5227413102e1adc2e665c"
  },
  {
    "url": "blogs/CSS/2020/flex.html",
    "revision": "0d31e7c3c05d64299989d7957aa890a2"
  },
  {
    "url": "blogs/CSS/2020/hidden_methods.html",
    "revision": "b247c2d21c814c3e9919df8f3e4f504a"
  },
  {
    "url": "blogs/CSS/2020/selector.html",
    "revision": "d56d4380898ab2390a803335fd7b8b5b"
  },
  {
    "url": "blogs/CSS/2021/SCSS.html",
    "revision": "f5ab896355b219cb86df345d95b8e76c"
  },
  {
    "url": "blogs/JS/2020/121501.html",
    "revision": "81cd2520af84ac7d8cebb3373e9b9270"
  },
  {
    "url": "blogs/JS/2020/functionCreate.html",
    "revision": "a2f63777729ceefbd3aacbce9b85ae00"
  },
  {
    "url": "blogs/JS/2020/let_const_var.html",
    "revision": "c64f8523193b90314adea36a8229d7b2"
  },
  {
    "url": "blogs/JS/2020/proto_prototype_constructor.html",
    "revision": "784338f627d4eebbac093392e992ce22"
  },
  {
    "url": "blogs/JS/2020/this_arrowFunc.html",
    "revision": "a6adeda52d01844236be2ee8bc9c7df4"
  },
  {
    "url": "blogs/JS/2020/this_four.html",
    "revision": "c11f7b199095146464ff24c4af04b4d0"
  },
  {
    "url": "blogs/JS/2020/var_func_Promotion.html",
    "revision": "5a88aa9736ee283e271516a46da0801a"
  },
  {
    "url": "blogs/JS/2021/arry_obj_copy.html",
    "revision": "222547a05a8c7f38338749b4c9368dec"
  },
  {
    "url": "blogs/JS/2021/data_type.html",
    "revision": "0159f90fe59cedc1d066e1888ed089ce"
  },
  {
    "url": "blogs/JS/2021/dateApplication.html",
    "revision": "500520cfd788f976a617605053434e73"
  },
  {
    "url": "blogs/JS/2021/dateFunction.html",
    "revision": "cc91e669337bcd22e907d16f66fc5dfd"
  },
  {
    "url": "blogs/JS/2021/for_in-of.html",
    "revision": "42c8da8fc3d8bebaa9ce2610d28a9644"
  },
  {
    "url": "blogs/Nodejs/npm.html",
    "revision": "33af6b96d7dcf369c0c25030245355d7"
  },
  {
    "url": "blogs/other/2020/create_vuepressBolg.html",
    "revision": "9905b8d1027fcbacb01386c201ee12ad"
  },
  {
    "url": "blogs/other/2020/guide.html",
    "revision": "ad3732eb269b41d10e4919953639dc47"
  },
  {
    "url": "blogs/other/2020/InsertPicture_markdown.html",
    "revision": "737c82962435492179e4ea89bce7210b"
  },
  {
    "url": "blogs/other/2020/VSCode_shortcut_key.html",
    "revision": "41c24fa705b740053c1eb2cc8d5e95f6"
  },
  {
    "url": "blogs/VUE/2020/121501.html",
    "revision": "d6b7dff4f4e8ec5187f870a32769592f"
  },
  {
    "url": "blogs/VUE/2020/componentsCommunication.html",
    "revision": "cfe5aaf4ffea40c4b219edc02210c1dc"
  },
  {
    "url": "blogs/VUE/2021/changeProps.html",
    "revision": "c121de86e15a247053a48f63af6738b6"
  },
  {
    "url": "blogs/VUE/2021/class_id.html",
    "revision": "be03f2805bcf168c197f315c627687c4"
  },
  {
    "url": "blogs/VUE/2021/el-input_autofocus.html",
    "revision": "442500ed6c9854573e2111c149c7a113"
  },
  {
    "url": "blogs/VUE/2021/reload.html",
    "revision": "7a7dc4eca3e987f8c0f5f29947a04bc2"
  },
  {
    "url": "blogs/VUE/2021/uploadFile.html",
    "revision": "300cd7b1daff7df9b6fe84306009890a"
  },
  {
    "url": "blogs/VUE/2021/vue_config_js.html",
    "revision": "e27a280e5a9db483ffaec79b4a837211"
  },
  {
    "url": "blogs/VUE/2021/vue-cli.html",
    "revision": "1ed4bbed3720fa98969abf979822172b"
  },
  {
    "url": "blogs/VUE/2021/vueRouter_mode.html",
    "revision": "84595dc5dc23231898f0cd9e17f4a62b"
  },
  {
    "url": "blogs/VUE/2021/vuex_modules_import.html",
    "revision": "7653f93536057d3eda0b62a6a5d60218"
  },
  {
    "url": "blogs/VUE/2021/vuex_modules_x.html",
    "revision": "c233fb415b23a021328696fa58ff7d09"
  },
  {
    "url": "blogs/VUE/2021/vuex.html",
    "revision": "7b1cfd73fd9ea4e89d6c00f76cba73c3"
  },
  {
    "url": "blogs/VUE/2021/vxe-table_umy-ui.html",
    "revision": "4b5a4e0dc040f58f899405b26fb85335"
  },
  {
    "url": "blogs/VUE/2021/watch_props.html",
    "revision": "b21f931c001bf6b383a47c446a69de62"
  },
  {
    "url": "categories/Browser/index.html",
    "revision": "de03a08452eb4caa87afc730c6033b2a"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "9df8159b26a958d429c0fd7c80529320"
  },
  {
    "url": "categories/index.html",
    "revision": "dc87cf829b707253f8be69b2e19d27fc"
  },
  {
    "url": "categories/Javscript/index.html",
    "revision": "5e22ffef352efd462fc2e28af3784340"
  },
  {
    "url": "categories/Javscript/page/2/index.html",
    "revision": "7c3659af5246c4b92cf59da280db8557"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "46a3b7908ef2c4464a8e4d93725bfda2"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6ef3632a826130b072e6e57c34157e04"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "287b125f3b74c68ad2d1cecfb516d537"
  },
  {
    "url": "categories/VueRouter/index.html",
    "revision": "6082ce8864f117fa95d753ff3c690913"
  },
  {
    "url": "categories/Vuex/index.html",
    "revision": "32d86e7a8ba7904b04c2bcba10bd8b4b"
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
    "revision": "969ae91f4a869ea58e0c490f10eb4a95"
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
    "revision": "d46786d2e7e66a1a22625b200f762187"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "6fccce76654bb7fba0c8325a2b0cafe3"
  },
  {
    "url": "tag/index.html",
    "revision": "c47914280068fdb66f0fdddd923c0b8f"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "f26c5d05227d420fa7beb250520a1d26"
  },
  {
    "url": "tag/Javascript/page/2/index.html",
    "revision": "c760f817662c349399621ab70566d7d1"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "95130b6d877cf29ec6c3622bf7ef5352"
  },
  {
    "url": "tag/other/index.html",
    "revision": "f961b02d6f140b4bb4a42f48664072ad"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3fd4fc751c88e6232563c79b1c2868ed"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "bf7030588a7923208378a3aef7c4c3eb"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "2c4829a05a06a3e4d9c5980f8c276aca"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7a139067007163b47cdf66ec8a11090"
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
