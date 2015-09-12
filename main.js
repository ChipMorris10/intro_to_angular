angular.module('myApp', []);

var mainControllerFunction = function($scope) {
  $scope.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
  $scope.symbols = ["&spades", "&clubs", "&hearts", "&diamonds"];
  $scope.duplicates = [1,1,2,5,6,9,9,9];
};



angular.module('myApp').controller('mainController', ['$scope', mainControllerFunction]);