import {default as advertise} from "./../template/advertise.js";
import {GeneralController} from "./GeneralController.js";
export class AdvertiseController extends GeneralController {
    constructor(){
        this.advertise = advertise;
    }
    
}
