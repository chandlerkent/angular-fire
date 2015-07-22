/* global window:false */

class UserService {
	constructor () {
		'ngInject';
	}

	get currentUserId() {
		let currentUserId = window.localStorage.currentUserId;
		if (!currentUserId) {
			this.currentUserId = new Date().getTime();
		}

		return window.localStorage.currentUserId;
	}

	set currentUserId(userId) {
		window.localStorage.currentUserId = userId;
	}
}

export default UserService;