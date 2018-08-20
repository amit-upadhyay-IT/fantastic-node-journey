# Encryption and Decryption

To ensure the encrypted content never produces the same output, we will use an Initialization Vector (IV) to add some randomness to the encryption algorithm. For this to be strong, we need to generate a unique random IV per encryption run – not a single fixed pre-defined IV. This is similar to a salt for password hashing, and will be stored with our encrypted data so we can decrypt it later along with the key.
