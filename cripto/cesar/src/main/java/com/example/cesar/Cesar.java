package com.example.cesar;

public class Cesar {

    public static final String alpha = "abcdefghijklmnopqrstuvwxyz";
    public static final int shiftKey = 4;
    public static String encrypt(String message) {
        message = message.toLowerCase();
        String cipherText = "";
        for (int ii = 0; ii < message.length(); ii++) {
            int charPosition = alpha.indexOf(message.charAt(ii));
            int keyVal = (shiftKey + charPosition) % 26;
            char replaceVal = alpha.charAt(keyVal);
            cipherText += replaceVal;
        }
        return cipherText;
    }

    public static String decrypt(String cipherText) {
        cipherText = cipherText.toLowerCase();
        String message = "";
        for (int ii = 0; ii < cipherText.length(); ii++) {
            int charPosition = alpha.indexOf(cipherText.charAt(ii));
            int keyVal = (charPosition - shiftKey) % 26;
            if (keyVal < 0) {
                keyVal = alpha.length() + keyVal;
            }
            char replaceVal = alpha.charAt(keyVal);
            message += replaceVal;
        }
        return message;
    }
}
