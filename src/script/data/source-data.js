class DataSource {
    static getAll() {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`, {
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(results => {
            return Promise.resolve(results.drinks);
        }).catch(err => {
            return Promise.reject(err);
        });
    }

    static getByKeyword(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`, {
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(results => {
            if (results.drinks) {
                return Promise.resolve(results.drinks);
            } else {
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        })
    }

    static getById(id) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                return response.json();
            }).then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson.drinks)
                } else {
                    return Promise.reject("maaf tidak ditemukan");
                }
            })
    }
}

export default DataSource;