"use strict";

angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('page6Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.cards = [
    {title: '提问', imgSrc: 'img/text.png', avatarBgColor: '#ff894f', hint: '输入问题'},
    {title: '豆瓣电影评分', imgSrc: 'img/douban.png', avatarBgColor: '#003466', description: '从豆瓣得到电影信息', hint: '选择信息关键词', choices: ['评分', '影片名称', '上映时间']},
    {title: '猫眼电影评分', imgSrc: 'img/maoyan.png', avatarBgColor: '#62E5A4', description: '从猫眼得到电影信息', hint: '选择信息关键词', choices: ['评分', '影片名称', '上映时间']},
    {title: '计算', imgSrc: 'img/star.png', avatarBgColor: '#1F2024', hint: '请选择计算公式', choices: ['平均值', '众数', '中位数', '方差', '标准差']}
  ];


  $scope.run_service = function () {
    alert('hello');
  }

}])
 