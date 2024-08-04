const baseURLs: any = {
  devEnviron: '',
  prodevEnviron: '',
};
export const getBaseUrl = (type: string) => baseURLs[type];
