export const numToUSD = (amount: number) => 
    amount < 0 ?
    `-$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    :
    `$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

export const getPriceNum = (object: any) => (object.weight / object.id) + object.base_experience;

export const getDiscount = (price: number, discount: number) => price - price * discount;