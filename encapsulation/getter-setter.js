import { Vehicle } from "./vehicle.js";

let vehicle = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });
vehicle.position = { longitude: 18.193121, latitude: 59.378654 };
console.log(vehicle.position);
