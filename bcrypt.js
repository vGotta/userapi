import bcrypt from 'bcrypt'

const saltRounds = process.env.SALT_ROUND;

let cryptPassword = async function(password){ //permet de crypter une chaine de caractere
   let salt = await bcrypt.genSalt(saltRounds)
   return await bcrypt.hash(password, salt);
}

let comparePassword = async function(plainPass, hashword) { //permet de comparer une chaine de caractere en clair et une autre cryptÃ©
   let compare = bcrypt.compare(plainPass, hashword);
   return compare;
};

export {cryptPassword}
export {comparePassword}