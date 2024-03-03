type Model = '' | 'M3' | 'M2' | 'M1';

class Product {

    constructor(private name: string = '',
                private price: number = 0,
                private procesor: Model = '') {}


    toString() {
        // no dry
        if( this.name.length <= 0 ) throw new Error('Name is required');
        if ( this.price <= 0 ) throw new Error('Price is required');
        if ( this.procesor.length <= 0 ) throw new Error('Procesor is required');

        
        return `${this.name} (${this.price}), ${this.procesor}`;
    }
}


(() => {

    const macbook = new Product('Macbook Pro', 1200, 'M3');

    console.log(macbook.toString());
})();