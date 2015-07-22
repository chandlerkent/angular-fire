/* global moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainController from './main/main.controller';
import LatestController from './latest/latest.controller';
import TopController from './top/top.controller';
import AddController from './add/add.controller';

import GifService from './models/gif.service';
import UserService from './models/user.service';

import GifDirective from './components/gif/gif.directive';

angular.module('gifs', ['ngTouch', 'ui.router', 'ngMaterial', 'firebase'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('GifService', GifService)
  .service('UserService', UserService)
  .directive('gifView', () => new GifDirective())
  .controller('MainController', MainController)
  .controller('LatestController', LatestController)
  .controller('TopController', TopController)
  .controller('AddController', AddController);
