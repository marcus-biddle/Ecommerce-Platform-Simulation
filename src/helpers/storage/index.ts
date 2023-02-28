export const setLocalStorageCart = (data: any, key: string) => localStorage.setItem(key, JSON.stringify(data));

export const getLocalStorageCart = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');
