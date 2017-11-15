import {AdvertiseController} from "./controller/AdvertiseController.js";
import {ImageController} from "./controller/ImageController.js";
import {CacheController} from "./controller/CacheController.js";

let foo = new AdvertiseController;
let goo = new ImageController;
let hoo = new CacheController;
foo.render();
goo.render();
hoo.render();