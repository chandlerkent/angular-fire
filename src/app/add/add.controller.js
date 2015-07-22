class AddController {
  constructor ($state, GifService) {
    'ngInject';

    this.$state = $state;
    this.GifService = GifService;

    this.title = '';
    this.url = '';

    this.isValid = true;
  }

  save() {
    this.isValid = this.validate();
    if (this.isValid) {
      this.GifService.createGif(this.title, this.url);
      this.$state.go('app.latest');
    }
  }

  validate() {
    if (this.title !== '' && this.url !== '') {
      return true;
    } else {
      return false;
    }
  }
}

export default AddController;
