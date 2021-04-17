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
