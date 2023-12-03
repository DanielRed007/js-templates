export default class UtilsFormat{
    constructor(){}

    static getRandomValue(values = []){
        const randomIndex = Math.floor(Math.random() * values.length);

        return values[randomIndex];
    }

    static getRandomNumber(limit = 0){
        return Math.floor(Math.random() * limit + 1);
    }

    static refreshPage(){
        location.reload();
    }
}