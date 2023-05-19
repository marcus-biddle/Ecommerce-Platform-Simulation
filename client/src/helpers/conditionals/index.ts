// Return given content is isLoading is false, otherwise return fallback content
export const showOnLoad = (isLoading: boolean) =>  (fallbackContent: any) => (content: any) => (isLoading ? fallbackContent : content)

export const showSale = (height: number, id: number) => (content: any) => (fallbackContent?: any) => (height < 11 && id % 2 === 0 ? content : fallbackContent || '')