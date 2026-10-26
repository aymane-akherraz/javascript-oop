export class Vehicle {
	constructor({ id, latitude, longitude }) {
		this.id = id;
		this.position = { latitude, longitude };
		this.status = "unavailable";
	};

	set position({ latitude, longitude }) {
		this.time = Date.now();
		this.longitude = longitude;
		this.latitude = latitude;
	};

	get position() {
		return {
			latitude: this.latitude,
			longitude: this.longitude
		};
	};
};
