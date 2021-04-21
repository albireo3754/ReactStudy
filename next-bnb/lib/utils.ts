export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    const itemSTring = cookieString.split(/\s*;\s*/);
    itemSTring.forEach((pairs) => {
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join('=');
    });
  }
  console.log(cookies);
  return cookies;
};

export const getNumber = (string: string) => {
  const numbers = string.match(/\d/g)?.join('');
  if (numbers) {
    return Number(numbers);
  }
  return null;
};

export const makeMoneyString = (input: string) => {
  const amountString = input.replace(/[^0-9]/g, '');
  if (amountString) {
    return parseInt(amountString, 10).toLocaleString();
  }
  return '';
};
