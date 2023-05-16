// Return given content is isLoading is false, otherwise return fallback content
export const showOnLoad = (isLoading: boolean) =>  (fallbackContent: any) => (content: any) => (isLoading ? fallbackContent : content)