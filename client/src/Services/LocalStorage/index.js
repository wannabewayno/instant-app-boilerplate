class LocalStorage {
    static get(key) {
        return JSON.parse(localStorage.getItem(key));
    };

    static set(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    };

    static clear() {
        localStorage.clear();
    }

    static remove(key) {
        localStorage.remove(key);
    }
}

export default LocalStorage;