export const cartHasItems = (cart: any): boolean => cart?.length ? cart.length > 0 : false;

export const getSubtotal = (cart: any): number => {
    let subtotal = 0;
    cart.map((item: any) => subtotal += Number(item.price));
    return subtotal;
}

export const getTotal = (items: number[]) => {
    let total = 0;
    items.map((item: number) => total += item);
    return total;
}