
const getSquareRow = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const newSquarelength = width / 10; 

    const htmlString = `
        <div class='container'>
            <div class='square'></div>
            <div class='inner-square'></div>
        </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const squareContainer = doc.body.firstChild;
    const container = document.getElementById("kinetic-holder");

    if(squareContainer){
        squareContainer.style.width = `${newSquarelength}px`;
        squareContainer.style.height = `${newSquarelength}px`;
    }

    for (let i = 0; i < 10; i++) {
        let clone = squareContainer.cloneNode(true);
        container.appendChild(clone);
    }
};

const calculateBrowserWindowSize = () => {

    window.onload = () => {
        getSquareRow();
    }

    window.onresize = () => {
        getSquareRow();
    }
}

export const renderSquareList = () => {
    calculateBrowserWindowSize();
};