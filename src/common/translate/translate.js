angular.module('angularTranslateApp', [])
  .config(function($translateProvider, $translatePartialLoaderProvider ) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/assets/translation/{lang}/{part}.json'
    });

  $translateProvider.preferredLanguage('en-US');
  $translateProvider.useSanitizeValueStrategy('escape');
});