/* global Firebase:false */

const FIREBASE_URL = 'https://blazing-heat-9444.firebaseio.com';

class GifService {
  constructor ($firebaseArray, UserService) {
    'ngInject';

    this.$firebaseArray = $firebaseArray;
    this.UserService = UserService;

    this.gifStore = new Firebase(FIREBASE_URL + '/gifs');
  }

  getGifReference(gif) {
    return new Firebase(FIREBASE_URL + '/gifs/' + gif.$id);
  }

  createGif(title, url) {
    let createdAt = new Date().getTime();

    var gif = {
      createdAt: createdAt,
      createdAtDesc: 0 - createdAt,
      favorites: 0,
      favoritesDesc: 0,
      title: title,
      url: url
    };

    this.gifStore.push(gif);
  }

  getLatestGifs() {
    let query = this.gifStore.orderByChild('createdAtDesc').limitToLast(25);
    return this.$firebaseArray(query);
  }

  getTopGifs() {
    let query = this.gifStore.orderByChild('favoritesDesc').endAt(-1).limitToLast(25);
    return this.$firebaseArray(query);
  }

  toggleFavorite(gif) {
    var ref = this.getGifReference(gif);

    ref.transaction((currentGif) => {
      let favoritedUsers = currentGif.favoritedUsers || {};
      let userIds = Object.keys(favoritedUsers);
      let shouldIncrement = userIds.filter((id) => parseInt(id, 10) === parseInt(this.UserService.currentUserId, 10)).length <= 0;
      if (shouldIncrement) {
        favoritedUsers[this.UserService.currentUserId] = true;
      } else {
        delete favoritedUsers[this.UserService.currentUserId];
      }

      currentGif.favoritedUsers = favoritedUsers;
      currentGif.favorites = Object.keys(favoritedUsers).length;
      currentGif.favoritesDesc = 0 - currentGif.favorites;

      return currentGif;
    });
  }
}

export default GifService;
