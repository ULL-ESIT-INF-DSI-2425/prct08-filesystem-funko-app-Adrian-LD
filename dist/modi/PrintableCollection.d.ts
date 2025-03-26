import { Collectable } from './collectable';
import { Printable } from './Printable';
/**
 * Clase abstracta generica que implmeneta una interfaz
 * generica como Collectable<T> y otra Printable
 */
export declare abstract class PrintableCollection<T> implements Printable, Collectable<T> {
    /**
     *
     * @param elements
     */
    constructor(elements: T[]);
    /**
     * Getter que devuelve la posicion del elemento
     * @param postion Posicion del elemento a bsucar
     * @returns el elemento de la posicion indicada
     */
    getItem(postion: number): T;
    /**
     *  Se encarga de añadir elementos a la coleccion
     * @param item  Es el parametro T a añdir
     */
    addItem(item: T): void;
    /**
     * Getter para obetner el numero de elementos
     * añadir
     * @returns La cantidad de elementos que tiene la coleccion
     */
    getNumberOfItems(): number;
    /**
     * Funcion que se encargada de eliminar
     * un elemento en la coleccion
     * @param item  Valor a eliminar
     */
    removeItem(item: T): void;
    /**
     * Metodo abstracto que se implementa en
     * las clases mas adelante
     */
    abstract print(): string;
    private items;
}
