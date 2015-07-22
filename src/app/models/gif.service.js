/* global Firebase:false */

const FIREBASE_URL = 'https://blazing-heat-9444.firebaseio.com';

class GifService {
  constructor () {
    'ngInject';

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
}

export default GifService;
