interface param {
  [key: string]: string;
}

export function filterParams(params: object): any {
  if (!params) {
    return null;
  }
  const filteredParams: param = {};
  Object.keys(params).forEach((key) => {
    if (![null, undefined].includes(params[key])) {
      filteredParams[key] = params[key];
    }
  });
  return filteredParams;
}
