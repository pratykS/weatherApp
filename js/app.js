var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function ($scope, $http) {

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

})