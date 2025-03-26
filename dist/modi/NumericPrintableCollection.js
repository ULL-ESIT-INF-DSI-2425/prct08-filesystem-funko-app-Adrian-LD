"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericPrintableCollection = void 0;
const PrintableCollection_1 = require("./PrintableCollection");
/**
 * Subclase que especializa la clase abstarcat con
 * el tipo de dato number
 */
class NumericPrintableCollection extends PrintableCollection_1.PrintableCollection {
    /**
     *  Constructor
     * @param number_items secuencia de numeros
     */
    constructor(number_items) {
        super(number_items);
        this.number_item = number_items;
    }
    /**
     *  Se encarga de imprimir cadenas
     * @returns una cadena separada por comas
     */
    print() {
        return this.number_item.join(",");
    }
    number_item;
}
exports.NumericPrintableCollection = NumericPrintableCollection;
