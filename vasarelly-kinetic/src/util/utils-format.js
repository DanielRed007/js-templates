export default class UtilsFormat{
    constructor(){}

    static getRandomValue(values = []){
        const randomIndex = Math.floor(Math.random() * values.length);

        return values[randomIndex];
    }
}