/**
 * Interfaz generica que declara metodos
 * para sumar elementos, obtenerlos, eleimnar un
 * elemento y obtener el nuero de elementos que hay
 * en la coleccion
 */
export interface Collectable<T> {
    /**
     * Metodo para añadir elementos a mi
     * coleccion
     * @param item elemento a insertar
     */
    addItem(item: T): void;
    /**
     * Getter que obtiene el valor
     * mdiante una posecion de la coleccion
     * @param postion
     */
    getItem(postion: number): T;
    /**
     * Metodo que se encarga de eliminar
     * un valor de la coleccion
     * @param item elemtno a eliminar
     */
    removeItem(item: T): void;
    /**
     * Getter que devuelve el numero de elementos que hay en la coleccion
     * @return el tamaño del vector
     */
    getNumberOfItems(): number;
}
