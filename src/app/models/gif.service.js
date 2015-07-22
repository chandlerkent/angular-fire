/* global Firebase:false */

const FIREBASE_URL = 'https://blazing-heat-9444.firebaseio.com';

class GifService {
  constructor ($firebaseArray) {
    'ngInject';

    this.$firebaseArray = $firebaseArray;

    this.gifStore = new Firebase(FIREBASE_URL + '/gifs');
  }

  createGif(title, url) {
    let createdAt = new Date().getTime();

    var gif = {
      createdAt: createdAt,
      createdAtDesc: 0 - createdAt,
      title: title,
      url: url
    };

    this.gifStore.push(gif);
  }

  getLatestGifs() {
    let query = this.gifStore.orderByChild('createdAtDesc').limitToLast(25);
    return this.$firebaseArray(query);
  }
}

export default GifService;
