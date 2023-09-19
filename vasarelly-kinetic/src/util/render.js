
export const renderSquareList = () => {
    const htmlString = `
        <div class='container'>
            <div class='square'></div>
            <div class='inner-square'></div>
        </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const originalElement = doc.body.firstChild;
    const container = document.getElementById("kinetic-holder");

    const numberOfCopies = 3;

    for (let i = 0; i < numberOfCopies; i++) {
        let clone = originalElement.cloneNode(true);
        container.appendChild(clone);
    }
};