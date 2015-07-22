function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('app', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('app.latest', {
      url: '/latest',
      templateUrl: 'app/latest/latest.html',
      controller: 'LatestController',
      controllerAs: 'latest'
    })
    .state('app.top', {
      url: '/top',
      templateUrl: 'app/top/top.html',
      controller: 'TopController',
      controllerAs: 'top'
    })
    .state('app.add', {
      url: '/add',
      templateUrl: 'app/add/add.html',
      controller: 'AddController',
      controllerAs: 'add'
    });

  $urlRouterProvider.otherwise('/latest');
}

export default routerConfig;
