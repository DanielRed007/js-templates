import UtilsFormat from "./utils-format";

export default class GridRenderer{

    constructor(colorThemes){
        this.colorThemes = colorThemes;
    }

    renderCssGrid(){
        const gridContainer = document.querySelector(".vasarelly-grid");
    
        for(let x = 0; x < 49; x++){
            const square = document.createElement("div");
            const inner = document.createElement("div");
            const randomShape = document.createElement("div");
    
            square.className = `v-item-${this.getRandomTheme(this.colorThemes)}`;
            inner.className = `inner-v-item-${this.getRandomTheme(this.colorThemes)}`;
            randomShape.className = `v-item-inner-circle-${this.getRandomTheme(this.colorThemes)}`;
            
            square.appendChild(inner);
            inner.appendChild(randomShape);
            gridContainer.appendChild(square);
        }
    };

    getRandomTheme(colors = []){
        return UtilsFormat.getRandomValue(colors);
    };
}