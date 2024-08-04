export const removeTokenLocalstorage= () => {
  localStorage.removeItem('accessToken');
};

export const setTokenLocalstorage= (token: string) => {
  localStorage.setItem('accessToken', token);
};
