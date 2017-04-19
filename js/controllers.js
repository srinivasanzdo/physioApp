// controller.js

angular
    .module('app')
    .controller('loginCtrl', loginCtrl);


loginCtrl.$inject = ['$scope', '$state'];
function loginCtrl($scope,$state) {
    $scope.login = function(){
        $state.go('app.main');
    }
}