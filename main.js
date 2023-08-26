import "./style.css";

import Qrcode from "qrcode";
import Clipboard from "clipboard";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const lintip = document.getElementById("wechat-tips");
const linlink = document.getElementById("download-link");
const linqrcode = document.getElementById("qrcode");
const ua = navigator.userAgent;
const isWechat = /micromessenger/i.test(ua);
const isDingTalk = /DingTalk/i.test(ua);

function detect(ua, platform) {
  var os = {},
    browser = {},
    webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    osx = !!ua.match(/\(Macintosh\; Intel /),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
    win = /Win\d{2}|Windows/.test(platform),
    wp = ua.match(/Windows Phone ([\d.]+)/),
    touchpad = webos && ua.match(/TouchPad/),
    kindle = ua.match(/Kindle\/([\d.]+)/),
    silk = ua.match(/Silk\/([\d._]+)/),
    blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
    bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
    rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
    playbook = ua.match(/PlayBook/),
    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
    firefox = ua.match(/Firefox\/([\d.]+)/),
    firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
    ie =
      ua.match(/MSIE\s([\d.]+)/) ||
      ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
    webview =
      !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
    safari =
      webview ||
      ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

  if ((browser.webkit = !!webkit)) browser.version = webkit[1];

  if (android) (os.android = true), (os.version = android[2]);
  if (iphone && !ipod)
    (os.ios = os.iphone = true), (os.version = iphone[2].replace(/_/g, "."));
  if (ipad)
    (os.ios = os.ipad = true), (os.version = ipad[2].replace(/_/g, "."));
  if (ipod)
    (os.ios = os.ipod = true),
      (os.version = ipod[3] ? ipod[3].replace(/_/g, ".") : null);
  if (wp) (os.wp = true), (os.version = wp[1]);
  if (webos) (os.webos = true), (os.version = webos[2]);
  if (touchpad) os.touchpad = true;
  if (blackberry) (os.blackberry = true), (os.version = blackberry[2]);
  if (bb10) (os.bb10 = true), (os.version = bb10[2]);
  if (rimtabletos) (os.rimtabletos = true), (os.version = rimtabletos[2]);
  if (playbook) browser.playbook = true;
  if (kindle) (os.kindle = true), (os.version = kindle[1]);
  if (silk) (browser.silk = true), (browser.version = silk[1]);
  if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
  if (chrome) (browser.chrome = true), (browser.version = chrome[1]);
  if (firefox) (browser.firefox = true), (browser.version = firefox[1]);
  if (firefoxos) (os.firefoxos = true), (os.version = firefoxos[1]);
  if (ie) (browser.ie = true), (browser.version = ie[1]);
  if (safari && (osx || os.ios || win)) {
    browser.safari = true;
    if (!os.ios) browser.version = safari[1];
  }
  if (webview) browser.webview = true;

  os.tablet = !!(
    ipad ||
    playbook ||
    (android && !ua.match(/Mobile/)) ||
    (firefox && ua.match(/Tablet/)) ||
    (ie && !ua.match(/Phone/) && ua.match(/Touch/))
  );
  os.phone = !!(
    !os.tablet &&
    !os.ipod &&
    (android ||
      iphone ||
      webos ||
      blackberry ||
      bb10 ||
      (chrome && ua.match(/Android/)) ||
      (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
      (firefox && ua.match(/Mobile/)) ||
      (ie && ua.match(/Touch/)))
  );
  return os;
}

const os = detect(navigator.userAgent, navigator.platform);
// console.log(os);

const swiper = new Swiper(".swiper-container", {
  observer: true,
  observeParents: true,
  direction: "horizontal", // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: {
    delay: 4000, //1秒切换一次
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
  },
});

// 剪贴板实现
const clipboard = new Clipboard(".share", {
  text: function () {
    return import.meta.env.VITE_SHARE;
  },
});
clipboard.on("success", function (e) {
  weui.toast("链接已复制，快分享给小伙伴吧！", 3000);
});

// 手机下载链接获取
function getNowLink() {
  return os.android
    ? import.meta.env.VITE_ANDROID
    : os.ios
    ? import.meta.env.VITE_IOS
    : "";
}

linlink.setAttribute("href", getNowLink());

window.onload = function () {
  // 生成二维码
  if (!os.phone) {
    Qrcode.toDataURL(location.href, { errorCorrectionLevel: "L" })
      .then((url) => linqrcode.setAttribute("src", url))
      .catch(console.error);
  }

  // 微信弹窗
  if ((os.android && isWechat) || (os.ios && isDingTalk)) {
    return lintip.show();
  }

  // iOS直接调起商店
  if (os.ios) {
    location.assign(getNowLink());
  }

  swiper.update();
};
