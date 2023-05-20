import { Levels } from "../../constants/content";

export const numToUSD = (amount: number) => 
    amount < 0 ?
    `-$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    :
    `$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

export const getPriceNum = (object: any) => (object.weight / object.id) + object.base_experience;

export const getDiscount = (price: number, discount: number) => price - price * discount;

export const getLevelPrice = (level: any) => {
    if (level === Levels.SMALL) {
        return 0;
    } else if (level === Levels.MEDIUM) {
        return 100
    } else if (level === Levels.LARGE) {
        return 200;
    } else if (level === Levels.XLARGE) {
        return 400;
    }

    return 0;
}