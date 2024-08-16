const baseURLs: any = {
baseUrl: 'https://jsonplaceholder.typicode.com/posts',
};
export const getBaseUrl = (type: string) => baseURLs[type];
