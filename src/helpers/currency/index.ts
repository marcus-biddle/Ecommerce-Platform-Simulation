export const numToUSD = (amount: number | string) => 
    amount < 0 ?
    `-$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    :
    `$${Math.abs(Number(amount)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
