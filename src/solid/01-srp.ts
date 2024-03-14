(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
         getproduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
         }

         saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
         }
    }

    class Mailer {
        private masterEmail = 'myemail@gg.com';

        sendEmail( email: string, message: string ) {
            console.log('Enviando correo a: ', email, 'Mensaje: ', message );
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getproduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmail('email@.com', 'Nuevo producto en la tienda');
        }
    
      
    
    }
    

    class Cartbloc {
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    
    }


    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new Cartbloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);



})();