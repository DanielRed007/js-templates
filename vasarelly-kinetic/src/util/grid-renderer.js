import UtilsFormat from "./utils-format";

export default class GridRenderer{

    constructor(colorThemes = [], shapes = []){
        this.colorThemes = colorThemes;
        this.shapes = shapes;
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

        this.reloadVasarellyGrid()
    };

    renderCssGridV2(){
        const gridContainer = document.querySelector(".grid-container");

        const elemCount = UtilsFormat.getRandomValue([14,21,28]);

        for(let elemIndex = 0; elemIndex < elemCount; elemIndex++){
            const randomTop = UtilsFormat.getRandomNumber(85);
            const randomleft= UtilsFormat.getRandomNumber(85);
            const shapeSize = UtilsFormat.getRandomNumber(120);
            const square = document.createElement("div");

            square.className = `${UtilsFormat.getRandomValue(this.shapes)}-${UtilsFormat.getRandomNumber(2)}`;
            square.style.top = `${randomTop}%`;
            square.style.left = `${randomleft}%`;
            square.style.width = `${shapeSize}px`;
            square.style.height = `${shapeSize}px`;
            
            gridContainer.appendChild(square);
        }

        this.reloadVasarellyGrid();
    };

    getRandomTheme(colors = []){
        return UtilsFormat.getRandomValue(colors);
    };

    reloadVasarellyGrid(){
        const btn = document.querySelector(".mini-menu");

        btn.addEventListener("mouseout",(e) => {
            UtilsFormat.refreshPage();
        });
    }
}