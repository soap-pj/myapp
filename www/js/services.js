"use strict"

angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.service('MyState', ['$soap', function ($soap) {
    // this.beingAddingService = false;
    // this.from = '';
    // this.to = '';
    // this.card = null;
    const SOAP_ADDR = 'http://localhost:8080/axis2/services/MapService';

    function removeSoapPrefix (obj) {
      function removeSingleObjPrefix (o) {
        return _.mapKeys(o, function (value, key) {
          let resultKey = key;
          if (resultKey.startsWith('ax21:')) {
            resultKey = resultKey.substr(5);
          }
          return resultKey;
        });
      }

      if (_.isArray(obj)) {
        return _.map(obj, removeSingleObjPrefix);
      } else {
        alert('no');
        return removeSingleObjPrefix(obj);
      }
    }



    this.bricks = [
      {title: '提问', custom: false, imgSrc: 'img/text.png', avatarBgColor: '#ff894f', hint: '输入问题',
        run: function () {
          return $soap.post(SOAP_ADDR, 'getLocation', {query: '电影院', region: '上海',num: 5}).then(
            function (places) {
              return removeSoapPrefix(places);
            }
          );
        }
      },

      {title: '提问', custom: false, imgSrc: 'img/question.png', avatarBgColor: '#003466', hint: '输入问题'},
        // {title: '计算', custom: false, imgSrc: 'img/calculator.png', avatarBgColor: '#003466', hint: '输入问题'},
      {title: '计算', custom: false, imgSrc: 'img/calculator.png', avatarBgColor: '#1F2024', hint: '请选择计算公式', choices: ['平均值', '众数', '中位数', '方差', '标准差']},
        {title: '发送邮件', custom: false, imgSrc: 'img/email.png', avatarBgColor: '#003466', hint: '输入问题'},
        {title: '输入文字', custom: false, imgSrc: 'img/text2.png', avatarBgColor: '#003466', hint: '输入问题'},


      {title: '豆瓣电影评分', custom: true, imgSrc: 'img/douban.png', avatarBgColor: '#003466', description: '从豆瓣得到电影信息', hint: '选择信息关键词', choices: ['评分', '影片名称', '上映时间']},
      {title: '猫眼电影评分', custom: true, imgSrc: 'img/maoyan.png', avatarBgColor: '#62E5A4', description: '从猫眼得到电影信息', hint: '选择信息关键词', choices: ['评分', '影片名称', '上映时间']},
      // {title: '天气服务', custom: true,
      //   run: function (location, ) {
      //     var UID = "U5AEA3EC21";
      //     var KEY = "6mln4t78urchujjg";
      //     var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
      //     var LOCATION = location // 除拼音外，还可以使用 v3 id、汉语等形式
      //     // 获取当前时间戳
      //     var ts = Math.floor((new Date()).getTime() / 1000);
      //     // 构造验证参数字符串
      //     var str = "ts=" + ts + "&uid=" + UID;
      //     // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
      //     // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
      //     var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
      //     sig = encodeURIComponent(sig);
      //     str = str + "&sig=" + sig;
      //     // 构造最终请求的 url
      //     var url = API + "?location=" + LOCATION + "&" + str + "&callback=foo";
      //     // 直接发送请求进行调用，手动处理回调函数
      //     $.getJSON(url, function(data) {
      //       var obj = document.getElementById('content');
      //       var weather = data.results[0];
      //       var text = [];
      //       text.push("Location: " + weather.location.path);
      //       text.push("Weather: " + weather.now.text);
      //       text.push("Temperature: " + weather.now.temperature);
      //       obj.innerText = text.join("\n");
      //     });
      //   }
      // },
    {title: 'IP定位', custom: true, imgSrc: 'img/pin.png', avatarBgColor: '#003466', hint: '输入问题'},
    {title: '美食推荐', custom: true, imgSrc: 'img/food2.png', avatarBgColor: '#003466', hint: '输入问题'},
    {title: '美食评分', custom: true, imgSrc: 'img/star.png', avatarBgColor: '#003466', hint: '输入问题'},


    ];

    this.get = function (key) {
      return this[key];
    };

    this.set = function(key, value) {
      this[key]= value;
    }

}]);