import { Vehicle, Tesla, Audi, Toyota, Honda, Volvo } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats())
        })
        /*
        for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }         

        }
        */
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(10),
    ];


    printCarSeats( cars );

})();