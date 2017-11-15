import {default as deletePicture} from "./../../src/template/deletePicture.js";
import {default as deleteCache} from "./../../src/template/deleteCache.js";
import {default as savedColorsArea} from "./../../src/template/savedColorsArea.js";



export class CacheController {
    constructor(){
        this.deletePicture = deletePicture;
        this.deleteCache = deleteCache;
        this.savedColorsArea = savedColorsArea;

    }
    render(){
        window.document.body.innerHTML+=this.deletePicture;
        window.document.body.innerHTML+=this.deleteCache;
        window.document.body.innerHTML+=this.savedColorsArea;

    }
}
