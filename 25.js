//  access the sub property of the object

var abject = {
    car: {
        honda: {
            size: 20,
            passenger: 4
        },
        hero: {
            size: 50,
            passenger: 8
        }
    }
};

console.log(abject.car.hero.passenger);