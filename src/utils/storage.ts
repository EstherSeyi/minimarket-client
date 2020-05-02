import localForage from 'localforage';

export const loadToken = async (): Promise<unknown | undefined> => {
  try {
    const token = await localForage.getItem('token');
    if (token === null) {
      return undefined;
    }

    return token;
  } catch (err) {
    return undefined;
  }
};

export const saveToken = async (token: string): Promise<void> => {
  try {
    console.log('saving');
    await localForage.setItem('token', token);
  } catch {
    // ignore write errors
  }
};

export const deleteFromLocalforage = async (token: string): Promise<void> => {
  try {
    await localForage.removeItem(token);
  } catch (error) {
    throw new Error('Unable to delete local data');
  }
};

export const isUserAuthenticated = () => {
  return loadToken() !== undefined;
};

export const loadData = async (item: string): Promise<unknown | undefined> => {
  try {
    const data = await localForage.getItem(`${item}`);
    if (data === null) {
      return undefined;
    }

    return data;
  } catch (err) {
    return undefined;
  }
};

export const saveData = async (name: string, data: any): Promise<void> => {
  try {
    await localForage.setItem(`${name}`, data);
  } catch {
    // ignore write errors
  }
};
