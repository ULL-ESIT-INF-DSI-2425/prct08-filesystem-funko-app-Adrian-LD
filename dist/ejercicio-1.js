// Clase abstracta que implementa Streamable y define propiedades y métodos comunes
class BasicStreamableCollection {
    // Método de búsqueda por título
    searchByTitle(title) {
        return this.filterCollection('title', title);
    }
    // Método de búsqueda por año
    searchByYear(year) {
        return this.filterCollection('year', year);
    }
    // Método de búsqueda por género
    searchByGenre(genre) {
        return this.filterCollection('genre', genre);
    }
    // Método común para filtrar colecciones
    filterCollection(field, value) {
        return this.getCollection().filter(item => item[field] === value);
    }
}
// Clase concreta para la colección de Series
class SeriesCollection extends BasicStreamableCollection {
    id;
    title;
    year;
    genre;
    series;
    constructor(id, title, year, genre, series) {
        super();
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.series = series;
    }
    getCollection() {
        return this.series;
    }
}
// Clase concreta para la colección de Películas
class MoviesCollection extends BasicStreamableCollection {
    id;
    title;
    year;
    genre;
    movies;
    constructor(id, title, year, genre, movies) {
        super();
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.movies = movies;
    }
    getCollection() {
        return this.movies;
    }
}
// Clase concreta para la colección de Documentales
class DocumentariesCollection extends BasicStreamableCollection {
    id;
    title;
    year;
    genre;
    documentaries;
    constructor(id, title, year, genre, documentaries) {
        super();
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.documentaries = documentaries;
    }
    getCollection() {
        return this.documentaries;
    }
}
// Ejemplo de uso
const seriesCollection = new SeriesCollection('1', 'Serie A', 2023, ['Drama'], [
    { id: 's1', title: 'Episodio 1', year: 2023, genre: ['Drama'], episodes: 10 },
    { id: 's2', title: 'Episodio 2', year: 2023, genre: ['Drama'], episodes: 12 },
]);
const foundSeries = seriesCollection.searchByYear(2023);
console.log(foundSeries);
const movieCollection = new MoviesCollection('2', 'Película A', 2020, ['Acción'], [
    { id: 'm1', title: 'Película 1', year: 2020, genre: ['Acción'], duration: 120 },
]);
const foundMovies = movieCollection.searchByTitle('Película 1');
console.log(foundMovies);
