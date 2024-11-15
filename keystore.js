const dotenv = require("dotenv");

dotenv.config();

const { generateKeystore } = require("ethereum-keystore");
const fs = require("fs");

const SECRET_KEY = process.env.SECRET_KEY || "secret";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";

async function main() {
  const keystore = await generateKeystore(PRIVATE_KEY, SECRET_KEY, {
    kdf: "pbkdf2",
    kdfparams: {
      c: 100000,
      dklen: 32,
      prf: "hmac-sha256",
    },
    cipher: "aes-128-ctr",
  });
  console.log("Wallet address:", keystore.address);
  console.log("Secret Key:", SECRET_KEY);
  console.log("JSON:\n", keystore);

  try {
    fs.writeFileSync("./key.json", JSON.stringify(keystore));
  } catch (err) {
    console.error(err);
  }
}

main();
