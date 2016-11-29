// Ionic Starter App
"use strict"
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ui.router','githubModule']);


app.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "view/tmpl/PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "view/tmpl/Page-1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "view/tmpl/Page-2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "view/tmpl/Page-3.html"
        })
        .state("PageTab.Page4", {
            url:"/Page4",
            templateUrl: "view/tmpl/Page-4.html"
        });
});


// app.run(function ($ionicPlatform) {
//     $ionicPlatform.ready(function () {
//         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//         // for form inputs)

//         if (window.cordova && window.cordova.plugins.Keyboard) {
//             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//         }
//         if (window.StatusBar) {
//             StatusBar.styleDefault();
//         }
//     });
// })

// app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
//     $stateProvider
//         .state('app.view.tmpl.hello', {
//             url: '/app',
//             cache:'false',        //不缓存页面，每次页面都会重新加载一次。性能上会有消耗
//             views: {
//                 'menuContent': {
//                     templateUrl: 'app/view/tmpl/hello.html',
//                     controller: 'helloController.js',
//                     onEnter:function($scope){
//                         $scope.load();
//                     }
//                 }
//             }
//         });
    // $stateProvider

    //     .state('app', {
    //         url: '/app',
    //         abstract: true,
    //         templateUrl: 'templates/menu.html',
    //         controller: 'AppCtrl'
    //     })

    //     .state('signin', {
    //         url: '/signin',
    //         // abstract: true,
    //         templateUrl: 'templates/signin.html',
    //         controller: 'SignInCtrl'
    //     })

    //     .state('signup', {
    //         url: '/signup',
    //         // abstract: true,
    //         templateUrl: 'templates/signup.html',
    //         controller: 'SignUpCtrl'
    //     })

    //     .state('app.lists', {
    //         url: '/lists',
    //         views: {
    //             'menuContent': {
    //                 templateUrl: 'templates/lists.html',
    //                 controller: 'ListsCtrl'
    //             }
    //         }
    //     })

    //     .state('app.ink', {
    //         url: '/ink',
    //         views: {
    //             'menuContent': {
    //                 templateUrl: 'templates/ink.html',
    //                 controller: 'InkCtrl'
    //             }
    //         }
    //     })

    //     .state('app.home', {
    //         url: '/home',
    //         cache:'false',        //不缓存页面，每次页面都会重新加载一次。性能上会有消耗
    //         views: {
    //             'menuContent': {
    //                 templateUrl: 'templates/home.html',
    //                 controller: 'homeCtrl',
    //                 onEnter:function($scope){
    //                     $scope.load();
    //                 }
    //             }
    //         }
    //     })

    //     ;

    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('app/home');
   // $urlRouterProvider.otherwise('app/view/tmpl/hello');

    //允许跨域请求
  //  $httpProvider.defaults.useXDomain = true;
    //删除用于识别ajax调用的XMLHttpRequests头，防止拦截CORS
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    // $httpProvider.interceptors.push(['$q', '$location','$window', function ($q, $location,$window) {
    //     console.log('auth.................');
    //     return {
    //         'request': function (config) {
    //             config.headers = config.headers || {};
    //             if ($window.sessionStorage.user_id) {
    //                 config.headers.AuthUser = $window.sessionStorage.user_id;
    //             }
    //             return config;
    //         },
    //         'responseError': function (response) {
    //             console.log('responseError');
    //             console.log(response);
    //             if (response.status === 401 || response.status === 403) {
    //                 console.log('reidrect...........');
    //                 $location.path('/signin');
    //             }
    //             return $q.reject(response);
    //         }

    //     }
    // }]);


// });
