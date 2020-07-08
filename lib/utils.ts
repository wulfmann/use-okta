export const tokenCheck = /id_token|access_token|code/;

export const containsTokens = (value: string) => {
    return tokenCheck.test(value);
};
