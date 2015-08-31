'use strict';

(function () {
    var app = angular.module("addressBookApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/person", {
            templateUrl: 'app/views/person.html',
            controller: "PersonCtrl"
        })
        .when("/person/:personId", {
            templateUrl: 'app/views/persondetail.html',
            controller: "PersonCtrl"
        })
        .otherwise({ redirectTo: "/person" })
    });
}());