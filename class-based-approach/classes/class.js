class Vehicle {
	constructor({ id, latitude, longitude }) {
		this.id = id;
		this.status = "unavailable";
		this.setPosition({ latitude, longitude });
	};

	setPosition({ latitude, longitude }) {
		this.time = Date.now();
		this.longitude = longitude;
		this.latitude = latitude;
	};

	getPosition() {
		return {
			latitude: this.latitude,
			longitude: this.longitude
		};
	};
};

let vehicle = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });
vehicle.setPosition({ longitude: 18.193121, latitude: 59.378654 });
console.log(vehicle.getPosition());
