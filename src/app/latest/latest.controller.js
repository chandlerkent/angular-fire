class LatestController {
  constructor (GifService) {
    'ngInject';

    this.gifs = GifService.getLatestGifs();
  }
}

export default LatestController;
