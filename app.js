 class SimpleDate {
    constructor(date) {
        this.date = date;
        this.restriction = {
            year: [0,10],
            month: [1, 12],
            day: [1, 30]
        };
        this.criteria = ['year','month','day']
    }

    validate() {
        try {
            this.criteria.map( c => this[c]());
            console.log("valid date");
        } catch (err) {
            throw "Date entered is " + err;

        }
    }

     year() {
         const currentYear = new Date().getFullYear();
         if (this.date.year < currentYear)//only check age for vehicle older than current year
         {
             const age = currentYear - this.date.year;
             if (age > this.restriction.year[1]) {
                 throw new Error(`Vehilce must be older than ${this.restriction.year[1]} years`);
             }
         }
           
    }

    month() {
        if (this.date.month < this.restriction.month[0] || this.date.month > this.restriction.month[1]) {
            throw "bad month: " + this.date.month
        } 
      
    }
    day() {
        if (this.date.day < this.restriction.day[0] || this.date.day > this.restriction.day[1]) {
            throw "bad day : " + this.date.day
        }
    }
}



const date = {
    year: 1987,
    month: 9,
    day: 28
};

const instance = new SimpleDate(date);
//instance.validate();

describe('test suite', () => {
    it('test spec', () => {
        expect(instance.validate).toThrow('');
    });
});


