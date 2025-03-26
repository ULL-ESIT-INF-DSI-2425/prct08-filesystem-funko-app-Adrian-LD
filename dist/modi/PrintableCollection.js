"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintableCollection = void 0;
/**
 * Clase abstracta generica que implmeneta una interfaz
 * generica como Collectable<T> y otra Printable
 */
class PrintableCollection {
    /**
     *
     * @param elements
     */
    constructor(elements) {
        this.items = elements;
    }
    /**
     * Getter que devuelve la posicion del elemento
     * @param postion Posicion del elemento a bsucar
     * @returns el elemento de la posicion indicada
     */
    getItem(postion) {
        return this.items[postion];
    }
    /**
     *  Se encarga de añadir elementos a la coleccion
     * @param item  Es el parametro T a añdir
     */
    addItem(item) {
        this.items.push(item);
    }
    /**
     * Getter para obetner el numero de elementos
     * añadir
     * @returns La cantidad de elementos que tiene la coleccion
     */
    getNumberOfItems() {
        return this.items.length;
    }
    /**
     * Funcion que se encargada de eliminar
     * un elemento en la coleccion
     * @param item  Valor a eliminar
     */
    removeItem(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
    items;
}
exports.PrintableCollection = PrintableCollection;
