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