angular.module('myApp', ['ngSanitize']);


var mainControllerFunction = function($scope) {
  $scope.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.duplicates = [1,1,2,5,6,9,9,9];
};


angular.module('myApp').controller('mainController', ['$scope', mainControllerFunction]);



// This works with the "Sample Text" code
// it('should check ng-class', function() {
//   expect(element(by.css('.base-class')).getAttribute('class')).not.
//     toMatch(/my-class/);

//   element(by.id('setbtn')).click();

//   expect(element(by.css('.base-class')).getAttribute('class')).
//     toMatch(/my-class/);

//   element(by.id('clearbtn')).click();

//   expect(element(by.css('.base-class')).getAttribute('class')).not.
//     toMatch(/my-class/);
// });

