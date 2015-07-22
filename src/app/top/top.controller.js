class TopController {
  constructor (GifService) {
    'ngInject';

    this.gifs = GifService.getTopGifs();
  }
}

export default TopController;
