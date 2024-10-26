import AsyncStorage from "@react-native-async-storage/async-storage";

export enum StorageType {
  conversations = "conversations",
}

/**
 * Module for storing data in local storage
 * for now data is unencrypted but it should be encrypted in the future, mostly for messages
 */

/**
 * Set item in local storage
 */
const setItem = async (key: StorageType, value: unknown): Promise<void> => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get item from local storage
 */
const getItem = async (key: StorageType): Promise<string | null> => {
  return AsyncStorage.getItem(key);
};

/**
 * Clear all items from local storage
 */
const clear = async (): Promise<void> => AsyncStorage.clear();


export const storage = {
  setItem,
  getItem,
  clear,
  StorageType,
};
