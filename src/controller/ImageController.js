import {default as previewImageArea} from "./../../src/template/previewImageArea.js";
import {default as inputUpload} from "./../../src/template/inputUpload.js";
import {default as inputUrl} from "./../../src/template/inputUrl.js";
import {default as selectedColorsArea} from "./../../src/template/selectedColorsArea.js";



export class ImageController {
    constructor(){
        this.inputUpload = inputUpload;
        this.inputUrl = inputUrl;
        this.previewImageArea = previewImageArea;
        this.selectedColorsArea = selectedColorsArea;

    }
    render(){
        window.document.body.innerHTML+=this.previewImageArea;
        window.document.body.innerHTML+=this.inputUpload;
        window.document.body.innerHTML+=this.inputUrl;
        window.document.body.innerHTML+=this.selectedColorsArea;

    }
}
