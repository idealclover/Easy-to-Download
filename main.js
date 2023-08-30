import "./style.css";

import Qrcode from "qrcode";
import Clipboard from "clipboard";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

var os = {};
const ua = navigator.userAgent;
os.isAndroid = /android/i.test(ua);
os.isiOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
os.isWechat = /micromessenger/i.test(ua);
os.isDingTalk = /DingTalk/i.test(ua);
// console.log(os.isAndroid);
// console.log(os.isiOS);
// console.log(os.isWechat);
// console.log(os.isDingTalk);

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

// 手机下载链接获取
function getNowLink() {
  return os.isAndroid
    ? import.meta.env.VITE_ANDROID
    : os.isIOS
    ? import.meta.env.VITE_IOS
    : "";
}

const link = document.getElementById("download-link");
link.setAttribute("href", getNowLink());

// 剪贴板实现
const clipboard = new Clipboard(".share", {
  text: function () {
    return import.meta.env.VITE_SHARE;
  },
});
clipboard.on("success", function (e) {
  weui.toast("链接已复制，快分享给小伙伴吧！", 3000);
});

window.onload = function () {
  // 生成二维码
  if (!os.isAndroid && !os.isIOS) {
    const qrcode = document.getElementById("qrcode");
    Qrcode.toDataURL(location.href, { errorCorrectionLevel: "L" })
      .then((url) => qrcode.setAttribute("src", url))
      .catch(console.error);
  }

  // 微信弹窗
  if ((os.isAndroid && os.isWechat) || (os.isIOS && os.isDingTalk)) {
    const tip = document.getElementById("wechat-tips");
    return tip.show();
  }

  // iOS直接调起商店
  if (os.isIOS) {
    location.assign(getNowLink());
  }

  swiper.update();
};
