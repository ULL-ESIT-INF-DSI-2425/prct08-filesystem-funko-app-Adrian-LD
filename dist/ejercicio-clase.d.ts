export interface Streamable<T> {
    searchByName(name: string): T[];
    searchByYear(year: number): T[];
}
export declare abstract class BasicStreamableCollection<T> implements Streamable<T> {
    private items;
    constructor(initialItems?: T[]);
    protected getItems(): T[];
    addItem(item: T): void;
    removeItem(item: T, compareFn?: (a: T, b: T) => boolean): void;
    abstract searchByName(name: string): T[];
    abstract searchByYear(year: number): T[];
}
export interface Serie {
    name: string;
    year: number;
    seasons: number;
}
export declare class SeriesCollection extends BasicStreamableCollection<Serie> {
    searchByName(name: string): Serie[];
    searchByYear(year: number): Serie[];
    removeItem(item: Serie): void;
}
export interface Movie {
    name: string;
    year: number;
    duration: number;
}
export declare class MoviesCollection extends BasicStreamableCollection<Movie> {
    searchByName(name: string): Movie[];
    searchByYear(year: number): Movie[];
    removeItem(item: Movie): void;
}
export interface Documentary {
    name: string;
    year: number;
    topic: string;
}
export declare class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    searchByName(name: string): Documentary[];
    searchByYear(year: number): Documentary[];
    removeItem(item: Documentary): void;
}
