export const isEmpty = (str: string | null) => {
  return str === null || str === undefined || str.trim().length === 0;
};
