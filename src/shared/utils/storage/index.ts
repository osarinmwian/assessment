import {KeyValuePair, RNStorageStatic} from './types';

const storage: Record<string, string | null> = {};

const RNStorage: RNStorageStatic = {
  async getItem(key, callback) {
    const result = storage[key] || null;
    if (callback) callback(null, result);
    return result;
  },

  async setItem(key, value, callback) {
    storage[key] = value;
    if (callback) callback(null);
  },

  async removeItem(key, callback) {
    delete storage[key];
    if (callback) callback(null);
  },

  async mergeItem(key, value, callback) {
    const currentValue = storage[key] || '{}';
    const mergedValue = JSON.stringify({
      ...JSON.parse(currentValue),
      ...JSON.parse(value),
    });
    storage[key] = mergedValue;
    if (callback) callback(null);
  },

  async clear(callback) {
    Object.keys(storage).forEach(key => delete storage[key]);
    if (callback) callback(null);
  },

  async getAllKeys(callback) {
    const keys = Object.keys(storage);
    if (callback) callback(null, keys);
    return keys;
  },

  flushGetRequests() {
    // Implementation specific to your batching requirements
  },

  async multiGet(keys, callback) {
    const result = keys.map(key => [key, storage[key] || null] as KeyValuePair);
    if (callback) callback(null, result);
    return result;
  },

  async multiSet(keyValuePairs, callback) {
    keyValuePairs.forEach(([key, value]) => {
      storage[key] = value;
    });
    if (callback) callback(null);
  },

  async multiRemove(keys, callback) {
    keys.forEach(key => {
      delete storage[key];
    });
    if (callback) callback(null);
  },

  async multiMerge(keyValuePairs, callback) {
    keyValuePairs.forEach(([key, value]) => {
      const currentValue = storage[key] || '{}';
      const mergedValue = JSON.stringify({
        ...JSON.parse(currentValue),
        ...JSON.parse(value),
      });
      storage[key] = mergedValue;
    });
    if (callback) callback(null);
  },
};

export default RNStorage;
