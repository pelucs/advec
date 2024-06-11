const JWTSECRET = 'advecapi';

const seconds = 1;

const minutes = 60 * seconds;

const tokenExpireTime = 20 * minutes

module.exports = { JWTSECRET, tokenExpireTime }