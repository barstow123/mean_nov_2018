class Bike{
    constructor(
        public price: number,
        public maxSpeed: string,
        public miles: number = 0) {
    }

    displayInfo() {
        console.log(`
        price: ${this.price}
        maxSpeed: ${this.maxSpeed}
        miles: ${this.miles}`);
        return this;
    }

    ride() {
        console.log('riding');
        this.miles += 10;
        return this;
    }

    reverse() {
        console.log('reversing');
        this.miles -= 5;
        return this;
    }
}

const myBike = new Bike(12.99, '30mph', 2000);
const yourBike = new Bike(14.99, '27mph', 1500);
const hisBike = new Bike(200.00, '45mph', 7000);

myBike.ride().ride().ride().reverse().displayInfo();
yourBike.ride().ride().reverse().reverse().displayInfo();
hisBike.reverse().reverse().reverse().displayInfo();