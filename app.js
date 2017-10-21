var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(["$routeProvider" , "$locationProvider" , function($routeProvider ,$locationProvider){
    $routeProvider
    .when("/home",{
        templateUrl:'views/home.html'
    }).
    when("/about" , {
        templateUrl:'views/about.html'
    }).
    when("/contact" , {
        templateUrl:'views/contact.html'
    }).
    otherwise({
        redirectTo:'/home'
    });
}]);

myApp.controller("appCtr" , ["$scope" , function($scope){

           $scope.addUsers = function(){
            $scope.User.push({
                   name:$scope.newName.name,
                  age:$scope.newAge.age,
                  compeny:$scope.newCompeny.compeny,
                   designation:$scope.newDesignation.designation
               });
           }

           $scope.remove=function($index){ 
            $scope.User.splice($index,1);     
          }

    $scope.User = [{
        name:"govind",
        age:33,
        compeny:"test ytra",
        designation:"developer"
    },
    {
        name:"ram",
        age:33,
        compeny:"test ytra",
        designation:"developer"
    },
    {
        name:"shyam",
        age:33,
        compeny:"test ytra",
        designation:"developer"
    }
];
}]);