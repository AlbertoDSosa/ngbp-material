angular.module( 'ngMaterial-bp', [
  'templates-app',
  'templates-common',
  'ngMaterial-bp.home',
  'ui.router',
  'ngMaterial'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $mdSidenav ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngMaterial Boilerplate' ;
    }
  });

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
})

;

