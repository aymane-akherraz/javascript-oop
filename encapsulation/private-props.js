class Vehicle {
	status = "unavailable";
	#longitude;
	#latitude;

	constructor({ id, latitude, longitude }) {
		this.id = id;
		this.setPosition({ latitude, longitude });
	};

	setPosition({ latitude, longitude }) {
		this.time = Date.now();
		this.#longitude = longitude;
		this.#latitude = latitude;
	};

	getPosition() {
		return {
			latitude: this.#latitude,
			longitude: this.#longitude
		};
	};
};
let vehicle = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });
console.log(vehicle.getPosition());
console.log(vehicle.status);
// console.log(vehicle.#longitude); // error
