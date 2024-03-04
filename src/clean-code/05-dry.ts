type Model = "" | "M3" | "M2" | "M1";

class Product {
  constructor(
    private name: string = '',
    private price: number = 0,
    private procesor: Model = '',
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
        console.log(key);
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // no dry
    // if (this.name.length <= 0) throw new Error("Name is required");
    // if (this.price <= 0) throw new Error("Price is required");
    // if (this.procesor.length <= 0) throw new Error("Procesor is required");
    if ( !this.isProductReady()) return;


    return `${this.name} (${this.price}), ${this.procesor}`;
  }
}

(() => {
  const macbook = new Product("Macbook Pro", 100);

  console.log(macbook.toString());
})();
