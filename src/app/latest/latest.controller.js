class LatestController {
  constructor (GifService) {
    'ngInject';

    this.GifService = GifService;

    this.gifs = GifService.getLatestGifs();
  }
}

export default LatestController;
