/*(function(startApp) {
  'use strict';
 

	angular.module('scopeExample', [])
	  .controller('GreetController', ['$scope',  function($scope) {
	    $scope.name = 'World';
	  }])

	  .controller('ListController', ['$scope', function($scope) {
	    $scope.names = ['Igor', 'Misko', 'Vojta'];
	  }]);
	})(window.startApp);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


var app = angular.module('myApp', ["ngRoute"]);


// app.controller('myCtrl', function($scope) {
//     $scope.showMe = false;
//     $scope.selection = function() {
//     	$scope.header = "Pancakes";
//     	$scope.explanation = "Your selection of pancakes suggests that you are sweet like syrup, but undesirable like carbs :-/"
//         $scope.showMe = !$scope.showMe;
//     }
// });


// //angular.module('anchorScrollExample', [])
// app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
//   function($scope, $location, $anchorScroll) {
//     $scope.gotoBottom = function() {
//       // set the location.hash to the id of
//       // the element you wish to scroll to.
//       $location.hash('bottom');

//       // call $anchorScroll()
//       $anchorScroll();
//     };
//   }]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : ""
    })
    .when("/pancakes", {
        template : "<h1>Pancakes</h1><p>You are sweet like syrup, but undesirable like carbs :-/</p>"
    })
    .when("/eggs", {
        template : "<h1>Eggs & Bacon</h1><p>Like the runny yolk, you're a mess. But like the bacon, you have a way of making bad things a little better</p>"
    })
    .when("/bagel", {
        template : "<h1>Bagel</h1><p>You look better when you're dressed up. Or toasted.</p>"
    })
    .when("/donuts", {
        template : "<h1>Donuts</h1><p>You're interesting on the outside, but lacking on the inside</p>"
    })
    .when("/poptart", {
        template : "<h1>PopTart</h1><p>You're lazy</p>"
    })
    .when("/omelette", {
        template : "<h1>Omelette</h1><p>Like the omelette, which is simply a boring egg posing as a decadent meal, you are a poser</p>"
    })
    .when("/frenchtoast", {
        template : "<h1>French Toast</h1><p>There's a 99% chance you're not French</p>"
    })
    .when("/coldpizza", {
        template : "<h1>Cold Pizza</h1><p>You know how to have a good time</p>"
    });
});