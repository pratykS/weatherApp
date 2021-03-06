var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/dashboard', {
            templateUrl: './html/dashboard.html',
            controller: DashboardCtrl,
            resolve: {
                hasSidebar: function ($rootScope) {
                    $rootScope.hasSidebar = true;
                    return true;
                }
            }
        })
        .when('/sidebar1', {
            templateUrl: './html/menu1.html',
            controller: DashboardCtrl,
            resolve: {
                hasSidebar: function ($rootScope) {
                    $rootScope.hasSidebar = true;
                    return true;
                }
            }
        })
        .when('/sidebar2', {
            templateUrl: './html/menu2.html',
            controller: DashboardCtrl,
            resolve: {
                hasSidebar: function ($rootScope) {
                    $rootScope.hasSidebar = true;
                    return true;
                }
            }
        })



    .otherwise({
        redirectTo: '/dashboard'
    });
}]);

function DashboardCtrl($scope, $http, $window) {
    $scope.data = {
        availableOptions: [
            {
                id: '1',
                name: 'London'
            },
            {
                id: '2',
                name: 'Paris'
            },
            {
                id: '3',
                name: 'New York'
            }
    ],
        selectedOption: {
            id: '1',
            name: 'London'
        } //This sets the default value of the select in the ui
    };


    $scope.getCityName = function (city) {
        console.log('sel city', city);
        getWeather(city);
    }


    function getWeather(city) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?appid=1c79c7a5bb99d2267dfc7aaf7eba3010&amp;q=' + city
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            //console.log(response);
            $scope.name = response.data.wind
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    console.log('init city', $scope.data.selectedOption.name)
    getWeather($scope.data.selectedOption.name);

    $scope.divs = [];
    console.log($window.innerHeight * $window.innerWidth, $window.innerHeight, $window.innerWidth)
    console.log(Math.round(($window.innerHeight / 40) * ($window.innerWidth / 40)))
    for (var i = 100; i < Math.round(($window.innerHeight / 40) * ($window.innerWidth / 40)); i++) {
        $scope.divs.push({
            color: "#DE0" + i
        })
    }

    console.log($scope.divs)

    $scope.tableData = [{
        "name": "abc",
        id: 1,
        high: 100,
        low: 0
        }, {
        "name": "abb",
        id: 2,
        high: 150,
        low: 0
        }, {
        "name": "bbc",
        id: 3,
        high: 200,
        low: 5
        }]
    $scope.reverse = true;
    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

}