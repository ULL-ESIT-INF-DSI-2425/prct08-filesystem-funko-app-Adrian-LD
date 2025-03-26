interface Streamable<T> {
    id: string;
    title: string;
    year: number;
    genre: string[];
    searchByTitle(title: string): T[];
    searchByYear(year: number): T[];
    searchByGenre(genre: string): T[];
}
declare abstract class BasicStreamableCollection<T> implements Streamable<T> {
    abstract id: string;
    abstract title: string;
    abstract year: number;
    abstract genre: string[];
    searchByTitle(title: string): T[];
    searchByYear(year: number): T[];
    searchByGenre(genre: string): T[];
    private filterCollection;
    protected abstract getCollection(): T[];
}
declare class SeriesCollection extends BasicStreamableCollection<Series> {
    id: string;
    title: string;
    year: number;
    genre: string[];
    private series;
    constructor(id: string, title: string, year: number, genre: string[], series: Series[]);
    protected getCollection(): Series[];
}
declare class MoviesCollection extends BasicStreamableCollection<Movie> {
    id: string;
    title: string;
    year: number;
    genre: string[];
    private movies;
    constructor(id: string, title: string, year: number, genre: string[], movies: Movie[]);
    protected getCollection(): Movie[];
}
declare class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    id: string;
    title: string;
    year: number;
    genre: string[];
    private documentaries;
    constructor(id: string, title: string, year: number, genre: string[], documentaries: Documentary[]);
    protected getCollection(): Documentary[];
}
interface Series {
    id: string;
    title: string;
    year: number;
    genre: string[];
    episodes: number;
}
interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string[];
    duration: number;
}
interface Documentary {
    id: string;
    title: string;
    year: number;
    genre: string[];
    topics: string[];
}
declare const seriesCollection: SeriesCollection;
declare const foundSeries: Series[];
declare const movieCollection: MoviesCollection;
declare const foundMovies: Movie[];
