var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {

    $scope.astronautsArray =
    [
        { 'name': 'Niel', 'surname': 'Armstrong', 'date' : '5.8.1930', 'superpower' : 'Speed' },
        { 'name': 'Buzz', 'surname': 'Aldrin', 'date' : '20.1.1930', 'superpower' : 'Strong' },
        { 'name': 'Charles', 'surname': 'Duke', 'date' : '3.10.1935', 'superpower' : 'Vitality' }
    ];

    $scope.addRow = function () {
        if ($scope.name != undefined && $scope.surname != undefined && $scope.date != undefined && $scope.superpower != undefined) {
            var astronaut = [];
            astronaut.name = $scope.name;
            astronaut.surname = $scope.surname;
            astronaut.date = $scope.date;
            astronaut.superpower = $scope.superpower;

            $scope.astronautsArray.push(astronaut);

            $scope.name = null;
            $scope.surname = null;
            $scope.date = null;
            $scope.superpower = null;
        }
    };

    $scope.removeRow = function () {
        var arrAstronauts = [];
        angular.forEach($scope.astronautsArray, function (value) {
            if (!value.Remove) {
                arrAstronauts.push(value);
            }
        });
        $scope.astronautsArray = arrAstronauts;
    };
});
