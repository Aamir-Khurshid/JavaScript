// objects use 

var collection = {
    "2548": {
        "album": "Slippery When wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectioncopy = JSON.parse(JSON.stringify(collection));

function collectionupdate(id, prop, value) {

    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}
console.log(collectionupdate(2468, "tracks", "test"));
console.log(collectionupdate(5439, "artist", "ABBA"));