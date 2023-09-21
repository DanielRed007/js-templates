
export const getSquareRow = (htmlString, mainclassName) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const newSquarelength = width / 10; 

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const squareContainer = doc.body.firstChild;
    const container = document.getElementById(mainclassName);

    if(squareContainer){
        squareContainer.style.width = `${newSquarelength}px`;
        squareContainer.style.height = `${newSquarelength}px`;
    }

    for (let i = 0; i < 10; i++) {
        let clone = squareContainer.cloneNode(true);
        container.appendChild(clone);
    }
};

export const renderUISquare = (squareWidth = 0) => {
    const newSquare = document.createElement("div");
    newSquare.className = "new-square";
};

export const renderUISquareFlexContainer = (squareWidth = 0,) => {
    const square = document.createElement("div");
    square.className = "square-container";
    const squareRow = document.body;
    squareRow.appendChild(square);

    const newSquare = document.createElement("div");
    newSquare.className = "new-square";
    newSquare.style.width = squareWidth + "px";
    newSquare.style.height = squareWidth + "px";

    squareRow.appendChild(newSquare);
};

export const getSquareSize = (numOfSquares, size) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const finalSquare = (width / numOfSquares);
    return finalSquare;
}

const calculateBrowserWindowSize = () => {

    window.onload = () => {
        getSquareRow(`
            <div class='container'>
                <div class='square'></div>
                <div class='inner-square'></div>
            </div>
        `,'kinetic-holder');
    }

    window.onresize = () => {
        getSquareSize(7, 100);

        const squareWidth = getSquareSize(7,100);

        renderUISquare(squareWidth);
        renderUISquareFlexContainer(squareWidth);
    }
}

export const renderSquareList = () => {
    calculateBrowserWindowSize();
};