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

        this.reloadVasarellyGrid()
    };

    renderCssGridV2(){
        const gridContainer = document.querySelector(".grid-container");

        const elemCount = UtilsFormat.getRandomValue([14,21,28]);

        for(let elemIndex = 0; elemIndex < elemCount; elemIndex++){
            const randomTop = UtilsFormat.getRandomNumber(85);
            const randomleft= UtilsFormat.getRandomNumber(85);
            const square = document.createElement("div");

            square.className = "random-square";
            square.style.top = `${randomTop}%`;
            square.style.left = `${randomleft}%`;
            
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