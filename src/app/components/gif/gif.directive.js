class GifDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/gif/gif.html',
      scope: {
          gif: '='
      },
      controller: GifController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class GifController {
  constructor (GifService, UserService) {
    'ngInject';

    this.GifService = GifService;

    this.isFavorited = false;

    var favoritesRef = this.GifService.getGifReference(this.gif).child('favoritedUsers');
    favoritesRef.on('value', (snapshot) => {
      var users = snapshot.val();
      if (!users) {
        this.isFavorited = false;
      } else if (Object.keys(users).indexOf(UserService.currentUserId) > -1) {
        this.isFavorited = true;
      } else {
        this.isFavorited = false;
      }
    });
  }

  toggleFavorite() {
    this.GifService.toggleFavorite(this.gif);
  }

  favoriteIcon() {
    if (this.isFavorited) {
      return 'favorite';
    } else {
      return 'favorite_border';
    }
  }
}

export default GifDirective;