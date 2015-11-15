angular.module( 'ngMaterial-bp', [
  'templates-app',
  'templates-common',
  'ngMaterial-bp.home',
  'ngMaterial-bp.about',
  'ui.router',
  'ngMaterial',
  'pascalprecht.translate',
  'angularTranslateApp'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise( '/home' );
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('green');
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $mdSidenav, $translate, $translatePartialLoader) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngMaterial Boilerplate' ;
    }
  });

  $translatePartialLoader.addPart('app');
  $translate.refresh();

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.opts = [
    { id: '1', name: 'en-US'},
    { id: '2', name: 'es-ES'}
  ];

  $scope.selectedLang = $scope.opts[0];

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
  
});

