function isPalindrome(cadena) {
    let size = cadena.length;
    for (let i = 0; i < size / 2; i++) {
        if (cadena[i] !== cadena[size - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("rapar"));
console.log(isPalindrome("pedro"));
console.log(isPalindrome("somos"));
console.log(isPalindrome("oro"));
