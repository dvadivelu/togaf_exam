var app = angular.module('App', []);
app.controller('ExamCtrl', function ($scope, $http) {
    var score = 0;
    var finalScore;
    var finalScore = 0;
    var examSubmitted = false;
    var passScore = 24;
    var examName = "exam1.js";
    var activeExam="1";
    $scope.loadData = function () {
        if (!$scope.examSubmitted) {
            $scope.finalScore = 0;
            score = 0;
        }
        var examToLoad = $scope.examName;
        var pathToLoad = 'data/' + examToLoad;
        $http.get('data/' + examToLoad).then(function (res) {
            $scope.todos = res.data.questions;
        });
    }
    $scope.submitExam = function () {
        $scope.examSubmitted = true;
        if ($scope.finalScore >= passScore) {
            $scope.result = "Passed";
        }
        else {
            $scope.result = "Failed";
        }
        $scope.loadData();
    }
    $scope.resetExam = function () {
        $scope.examSubmitted = false;
        $scope.loadData();
    }
    $scope.loadExam = function (examName, selExam) {
        $scope.examName = examName;
        $scope.activeExam = selExam;
        $scope.loadData();
    }
    $scope.onSelect = function (question, option) {
        if (option) {
            score++;
            $scope.finalScore = score;
        }
    }
    
    $scope.random = function() {
        return 0.5 - Math.random();
    }
    $scope.examName = 'exam1.js';
    $scope.activeExam = 1;
    $scope.loadData();
});