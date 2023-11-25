export const renderCssGrid = () => {
    const gridContainer = document.querySelector(".vasarelly-grid");

    for(let x = 0; x < 49; x++){
        const square = document.createElement("div");
        const inner = document.createElement("div");
        square.className = "v-item";
        inner.className = "inner-v-item";
        square.appendChild(inner);
        gridContainer.appendChild(square);
    }
};