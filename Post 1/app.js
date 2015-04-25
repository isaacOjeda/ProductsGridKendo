    $(function(){
      
      //http://jsbin.com/kedizeraze/1/
      
      var brandImage = "http://cdn.cyberpuerta.mx/out/pictures/emthumbnailer/160/20/bd2/c7e/5dd/aoclogo-ea4c0ba4.jpg";
      var productImage= "http://cdn.cyberpuerta.mx/out/pictures/emthumbnailer/200/150/bb3/6a7/ebe/21994713-762-ebdf0b62.jpg";
      var products = [];
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });
      
      products.push({
        brandImage:brandImage ,        
        productImage:productImage,
        description: "AOC Monitor E1670SWU LED 15.6'', Widescreen, Negro",
        price: 1186.00,
        stock: 100
      });      
      
      var viewModel = kendo.observable({
        products : products        
      });
      
      kendo.bind($("#productsView"),viewModel);
    }); 