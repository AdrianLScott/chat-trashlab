import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Module for storing data in local storage
 * for now data is unencrypted but it should be encrypted in the future, mostly for messages
 */

/**
 * Set item in local storage
 */
const setItem = async (key: string, value: unknown): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get item from local storage
 */
const getItem = async (key: string): Promise<unknown> => {
  const item = await AsyncStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const storage = {
  setItem,
  getItem
}
