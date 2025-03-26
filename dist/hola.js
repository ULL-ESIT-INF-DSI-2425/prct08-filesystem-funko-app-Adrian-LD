function onePunch(...cadena) {
    return cadena.length == 0
        ? "Broken!"
        : cadena.map((c) => c.replace(/[ae]/g, "")).join(" ");
}
console.log(onePunch("Beard", "Jeans", "Hairbrush", "Knuckleduster", "Sand")); // "Brd Hirbrush Jns Knuckldustr Snd"
console.log(onePunch()); // "Broken!"
console.log(onePunch("Snot", "Snow", "Soda", "Tank", "Beard")); // "Brd Snot Snow Sod Tnk"
