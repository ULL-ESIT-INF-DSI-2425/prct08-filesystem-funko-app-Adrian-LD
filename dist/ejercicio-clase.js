"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentariesCollection = exports.MoviesCollection = exports.SeriesCollection = exports.BasicStreamableCollection = void 0;
class BasicStreamableCollection {
    items = [];
    constructor(initialItems = []) {
        this.items = initialItems;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item, compareFn) {
        if (compareFn) {
            this.items = this.items.filter((i) => !compareFn(i, item));
        }
        else {
            this.items = this.items.filter((i) => i !== item);
        }
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
class SeriesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.getItems().filter((serie) => serie.name.includes(name));
    }
    searchByYear(year) {
        return this.getItems().filter((serie) => serie.year === year);
    }
    removeItem(item) {
        super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.seasons === b.seasons);
    }
}
exports.SeriesCollection = SeriesCollection;
class MoviesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.getItems().filter((movie) => movie.name.includes(name));
    }
    searchByYear(year) {
        return this.getItems().filter((movie) => movie.year === year);
    }
    removeItem(item) {
        super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.duration === b.duration);
    }
}
exports.MoviesCollection = MoviesCollection;
class DocumentariesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.getItems().filter((doc) => doc.name.includes(name));
    }
    searchByYear(year) {
        return this.getItems().filter((doc) => doc.year === year);
    }
    removeItem(item) {
        super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.topic === b.topic);
    }
}
exports.DocumentariesCollection = DocumentariesCollection;
