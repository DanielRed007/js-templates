import './style.scss';
import GridRenderer from "./util/grid-renderer";
import UtilsFormat from "./util/utils-format";

function startGridRenderer(){
    const themes = ["gow","doom"];
    const renderer = new GridRenderer(
        [
        `${UtilsFormat.getRandomValue(themes)}-1`, 
        `${UtilsFormat.getRandomValue(themes)}-2`
        ],
        ["square","circle"]);

    // renderer.renderCssGrid();
    renderer.renderCssGridV2();
}

startGridRenderer();