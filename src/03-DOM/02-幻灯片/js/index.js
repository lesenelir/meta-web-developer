// const thumbArray = document.getElementsByClassName('thumb-item')
// const sliderArray = document.getElementsByClassName('slider-item')
// console.log(thumbArray)
//
// for (let i = 0; i < thumbArray.length; i++) {
//   thumbArray[i].onclick = function () {
//     for (let j = 0; j < thumbArray.length; j++) {
//       thumbArray[j].className = 'thumb-item'
//       sliderArray[j].className = 'slider-item'
//     }
//     this.className += ' cur'
//     sliderArray[i].className += ' active'
//   }
// }


// 插件使用方法
;(function () {

  // 构造函数
  function Slider(opt) {
    this.sliderItem = document.getElementsByClassName(opt.sliderItem)
    this.thumbItem = document.getElementsByClassName(opt.thumbItem)

    this.bindClick() // 实例创建的时候就立即执行构造函数对象中原型的方法
  }

  Slider.prototype = {
    bindClick: function () {
      let slider = this.sliderItem
      let thumbs = this.thumbItem

      for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
          for (let j = 0; j < thumbs.length; j++) {
            thumbs[j].className = 'thumb-item'
            slider[j].className = 'slider-item'
          }
          this.className += ' cur'
          slider[i].className += ' active'
        }
      }

    }
  }

  // 导出
  window.Slider = Slider

})()


// Note:  笔记
// var 使用出现的闭包问题要用 立即执行函数来处理
// for (var i = 0; i < 10; i++) {
//   (function (j) {
//     console.log(j)
//   }(i))
// }
