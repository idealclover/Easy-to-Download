import "./style/bulma.css"
import "./style/common.less"
import Qrcode from "qrcode"
import * as $ from "./lib/zepto.js"

const $tips = $(".wechat-tips")
const $card = $(".download-card")
const $qrcode = $(".insert-qrcode")
const ua = navigator.userAgent
const isWechat = /micromessenger/i.test(ua)
const isDingTalk = /DingTalk/i.test(ua)

function downloadApp(link) {
  // 使用location.assign 兼容 ios safari跳转
  link && location.assign(link)
}

function getData(node) {
  const data = {}
  node.forEach((item) => {
    const {platform, link} = item.dataset
    data[platform.toLowerCase()] = link
  })
  return data
}

function getNowLink(downloadLinks) {
  const ANDROID = "android"
  const IOS = "ios"

  return $.os.android ? downloadLinks[ANDROID] :
          $.os.ios ? downloadLinks[IOS] :
          ''
}

function generateQrcode(text) {
  return new Promise((resolve, reject) => {
    Qrcode.toDataURL(text, {errorCorrectionLevel: "L"}, function(err, url) {
      if (url) {
        resolve(url)
      } else {
        reject(err)
      }
    })
  })
}

function init() {
  if (isWechat || ($.os.ios && isDingTalk)) {
    return $tips.show()
  }

  const downloadLinks = getData($card)

  const link = getNowLink(downloadLinks)

  downloadApp(link)

  $card.on("click", function(e) {
    const $this = $(this)
    const link = $this.attr("data-link")
    downloadApp(link)
  })

  if (!$.os.phone) {
    generateQrcode(location.href)
      .then(url => {
        $qrcode.forEach(function(item) {
          $(item).attr("src", url)
        })
      }).catch(console.error)
  }
}

init()
