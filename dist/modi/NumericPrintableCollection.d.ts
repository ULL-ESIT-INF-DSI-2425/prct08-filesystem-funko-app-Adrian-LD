import { PrintableCollection } from './PrintableCollection';
/**
 * Subclase que especializa la clase abstarcat con
 * el tipo de dato number
 */
export declare class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     *  Constructor
     * @param number_items secuencia de numeros
     */
    constructor(number_items: number[]);
    /**
     *  Se encarga de imprimir cadenas
     * @returns una cadena separada por comas
     */
    print(): string;
    private number_item;
}
