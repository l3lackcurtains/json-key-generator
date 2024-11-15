### Overview

This project generates JSON keystore files for Ethereum wallets. The keystore files are encrypted with a password. The password is used to decrypt the keystore file and retrieve the private key.

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd json-key-generator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set your private key and secret key:

   ```plaintext
   PRIVATE_KEY=your_private_key_here
   SECRET_KEY=your_secret_key_here
   ```

4. Run the script to generate the keystore file:
   ```bash
   node keystore.js
   ```

### Usage

- The generated keystore file will be saved as `key.json` in the root directory.
- The console will output the wallet address and the secret key used for encryption.

### Example

Here is an example of the output you might see:

```plaintext
Wallet address: 0xYourWalletAddress
Secret Key: your_secret_key_here
JSON:
{
  "address": "0xYourWalletAddress",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "ciphertext_here",
    "cipherparams": {
      "iv": "iv_here"
    },
    "mac": "mac_here",
    "kdf": "pbkdf2",
    "kdfparams": {
      "c": 100000,
      "dklen": 32,
      "prf": "hmac-sha256",
      "salt": "salt_here"
    }
  },
  "id": "id_here",
  "version": 3
}
```

### Notes

- Ensure that the `.env` file is listed in your `.gitignore` to avoid exposing your private key.
- Keep your `SECRET_KEY` and `PRIVATE_KEY` secure and do not share them publicly.

### License

This project is licensed under the MIT License.
