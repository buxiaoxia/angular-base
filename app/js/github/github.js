/// <reference path="../../../typings/index.d.ts" />
"use strict"

angular.module('githubModule', ['ngResource'])
    .controller('githubUserCtrl', ['$scope', 'github', function ($scope, github) {
        // 每次数据都需要重新加载
        $scope.user = {};
        var githubUser = github.getGitHubUser();
        githubUser.get({ id: 'buxiaoxia' },
            function (resp) {
                console.log(resp);
                $scope.user = resp;
            }, function (error) {
                console.log(error);
            });
    }])

    .controller('githubUserReposCtrl', ['$scope', 'githubService', function ($scope, githubService) {
        // 每次数据都不需要重新加载
        $scope.repos = githubService.githubUserRepos();
    }])

    .controller('gitHubRepoDetailCtrl', ['$scope', 'github', function ($scope, github) {
        // 每次数据都需要重新加载
        $scope.repo = {};
        var githubRepoDetail = github.getGitHubRepoDetail();
        githubRepoDetail.get({ id: 'buxiaoxia', repo: 'angular-base' },
            function (repo) {
                console.log(repo);
                $scope.repo = repo;
            }, function (error) {
                console.log(error);
            });
    }])


    .factory('githubService', function ($q, $resource, github) {
        var githubService = {};
        githubService.repos = [];
        githubService.githubUserRepos = function () {
            if (githubService.repos.length <= 0) {
                var githubUserRepos = github.getGitHubUserRepos();
                githubUserRepos.query({ id: 'buxiaoxia' },
                    function (data) {
                        console.log(data);
                        githubService.repos = data;
                    }, function (error) {
                        console.log(error);
                    });
            } 
            return githubService;
        }
        return githubService;
    })

    .factory('github', function ($resource) {
        return {
            getGitHubUser: function () {
                return $resource('https://api.github.com/users/:id', { userId: '@id' });
            },
            getGitHubUserRepos: function () {
                return $resource('https://api.github.com/users/:id/repos', { userId: '@id' });
            },
            getGitHubRepoDetail: function () {
                return $resource('https://api.github.com/repos/:id/:repo', { userId: '@id', repo: '@repo' });
            }
        }
    })

