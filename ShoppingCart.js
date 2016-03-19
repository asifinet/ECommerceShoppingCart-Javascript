/*===================================================================
     *@  Program Name:       ShoppingCart
   *@  Languge used:       Javascript Standard 5.1 ECMA-262
   *@  Initial Revision#:  1.0
 //*@ ========================================================================
 
 //Start of Program
 
 //Defining prototype ShopigCart and all the methods.  
          ShoppingCart.prototype.add                  = add;
          ShoppingCart.prototype.remove               = remove;
          ShoppingCart.prototype.empty                = empty;
          ShoppingCart.prototype.printItems           = printItems;
          ShoppingCart.prototype.getTotalPrice        = getTotalPrice;
          ShoppingCart.prototype.sort                 = sort;

       function ShoppingCart(arg) {       // Constructor function ShoppingCart with one argument.
         if (typeof arg == 'undefined') { // Check if parameter in ShoppingCart function is undefined or passed without an Array/Object
            this.items = new Array();     // Define the Array object.    
            this.items.length = 0;        // Set the Length to 0 to remove an empty element from
                                     // Array to ensure the array shows size of zero when check the length.
  } else {
            this.items = arg;             // Assigne the Array to constructor Property array object.
        }
    }

         // Add item function to add the item and update the qty of item in the Cart.
    function add(item) {
        // This updateQty variable will hold the current Qty of an existing shopping item in the
        // shopping basket to be updated in next loop.
        var updateQty = 0;

        //Following loop is use to remove existing duplicate item by id from the array in order to update and increment qty by 1
        for (var prop in this.items) {           // Check if the Public proprty this.Items Array have the same value as passed Array of JSON object.
           
            if (this.items[prop].id == item.id) {// If it is same id as existing Shopping Cart item it will update Qty of specified item and hold it in TEMP variable.
                //Keep the current quantity
             
                 updateQty = item.qty + item.qty;
                //Remove current duplicate/existing item from the array. i.e item# 3
             
                this.items.splice(prop, 1);
            }
        }
                // 2nd loop to ensure new items in shopping cart are pushed into Array in a stack.
        for (var i = 0; i <= this.items.length; i++) {
            if (updateQty > item.qty) { // If updateQty greater than the item.qty then

                item.qty = updateQty;   // Assign the new updated quantity to item quantity object.
            }

            this.items.push({           // Push each element in stack of Array.
                "id": item.id,
                "desc": item.desc,
                "qty": item.qty,
                "price": item.price
            }); // add a new Shopping Cart item into Array

            // Sort the Array by ID in Ascending Order.  
            this.items.sort(function(a, b) {
                if (parseInt(a.id) > parseInt(b.id)) {
                    return 1;
                }
                if (parseInt(a.id) < parseInt(b.id)) {
                    return -1;
                }
                return 1;
            });
            break; //break the loop
        }
    }
   
    // Function to remove element from the Shopping Cart Array
    function remove(id, qty) {
        // Loop to iterate over each item to compare by id and, if the passed quantity in qty parameter is less than or equal to 0
        for (var i in this.items) {                                 // Then delete the desired item/product from the cart.
            if (id == this.items[i].id) {                           // Compare the item by id
                                                                    // Check the Quantity less than the 1 then delete
                                                                    // the item from the item's position in array.
                if (qty < 1) {
                    this.items.splice(i, 1);                        // Delete the desired item from the array.
                    break;                                          // Exit the loop once the item has been deleted from the array.
                } else {
                    this.items[i].qty = this.items[i].qty - qty;    // Remove the Item from the Public property of type array object by minus quantity.
                    break;
                }
            }
        }
    }
   
    // Method to delete all the array items from the array.
    function empty() {
        // Following loop will iterate the Array and print the array items to browser's console.
        for (var i = 0; i < this.items.length; i++) {
            this.items.splice(i, this.items.length); //Remove the items from the array from first position to the last.
        }
    }

    // Method to Print all the items on browser console.
    function printItems() {
        // Following line will iterate the array and print the array itemes to console
        for (var i = 0; i < this.items.length; i++) {
            //Print the Items details as required
            console.log(this.items[i].id + "    " + this.items[i].desc + "    " + this.items[i].qty + "  units  @" + this.items[i].price + " /unit ");
        }
    }
 
    // Method to get the total price of product's item in the cart.
    function getTotalPrice() {
        var totalprice = 0;                                                      // Initialize Variable to 0
        for (var i = 0; i < this.items.length; i++) {                            // Loop to iterate over the public property's array's objec
            totalprice += this.items[i].price * this.items[i].qty;               // Increment and multiply product price with each item in basket to get Total.
        }
        return (totalprice)                                                      // Return the Total Price of items
    }

    // Function to sort the object array in ascending order by different keys.
    function sort(key) {
        // Sort the cart  items by product Id, description and price by each dimension/object's column
        // In ascending order.
        if (key == "id") {   //Sort the array by ID
            this.items.sort(function(a, b) {
                if (parseInt(a.id) > parseInt(b.id)) {
                    return 1;
                }
                if (parseInt(a.id) < parseInt(b.id)) {
                    return -1;
                }
                return 1;
            });
        } else if (key == "desc") {   //Sort the array by description
            this.items.sort(function(a, b) {
                if (a.desc > b.desc) {
                    return 1;
                }
                if (a.desc < b.desc) {
                    return -1;
                }
                return 0;
            });
        } else if (key == "price") {        //Sort the array by price
            this.items.sort(function(a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
        }
    }
    // Test main function,initialize constructor and call function of implemented shopping cart codes above.
    function test() {
        //Array of Json object array,
        var items = [{
            "id": "44827",
            "desc": "Table Lamp",
            "price": 49.90,
            "qty": 2
        }, {
            "id": "328",
            "desc": "Tea Cup",
            "price": 9.90,
            "qty": 5
        }, {
            "id": "8824",
            "desc": "Shoe Rack",
            "price": 199.00,
            "qty": 1
        }, {
            "id": "11237",
            "desc": "Cushion Set",
            "price": 79.90,
            "qty": 1
        }, {
            "id": "3",
            "desc": "Laundry Basket",
            "price": 29.90,
            "qty": 2
        }, {
            "id": "247",
            "desc": "Floor Mat",
            "price": 7.90,
            "qty": 3
        }, {
            "id": "5532",
            "desc": "Shower Curtain - Rod",
            "price": 12.90,
            "qty": 1
        }, {
            "id": "5537",
            "desc": "Shower Curtain - Rose Red",
            "price": 29.90,
            "qty": 1
        }];

        var cart = new ShoppingCart(); //instantiate new cart object
        console.log("The cart has " + cart.items.length + " items.");
        // -> The cart has 0 items.

        cart.add(items[4]);
        console.log("The cart has " + cart.items.length + " items.");
        // -> The cart has 1 items.
        cart.printItems();
        // -> 3  Laundry Basket  2 units  @29.9/unit

        cart.add(items[6]);
        console.log("The cart has " + cart.items.length + " items.");
        // -> The cart has 2 items.
        cart.printItems();
        // -> 3  Laundry Basket  2 units  @29.9/unit
        // -> 5532  Shower Curtain - Rod  1 units  @12.9/unit

        cart.add(items[4]);
        console.log("The cart has " + cart.items.length + " items.");
        // -> The cart has 2 items.
        cart.printItems();
        // -> 3  Laundry Basket  4 units  @29.9/unit
        // -> 5532  Shower Curtain - Rod  1 units  @12.9/unit
        console.log("Total price: " + cart.getTotalPrice());
        // -> Total price: 132.5

        cart.remove("3", 4); // Remove item ID "3" from the cart.
        console.log("Total price: " + cart.getTotalPrice());
        // -> Total price: 12.9

        cart.empty();
        console.log("The cart has " + cart.items.length + " items.");
        // -> The cart has 0 items.

        /* Part B test: Comment this section if you have not attempted Part B */
        cart = new ShoppingCart(items);
        cart.sort("id");
        console.log("\nCart sorted by ID");
        cart.printItems(); // Cart items sorted by ID _numerically_.
        // -> 3  Laundry Basket  2 units  @29.9/unit
        // -> 247  Floor Mat  3 units  @7.9/unit
        // -> 328  Tea Cup  5 units  @9.9/unit
        // -> 5532  Shower Curtain - Rod  1 units  @12.9/unit
        // -> 5537  Shower Curtain - Rose Red  1 units  @29.9/unit
        // -> 8824  Shoe Rack  1 units  @199/unit
        // -> 11237  Cushion Set  1 units  @79.9/unit
        // -> 44827  Table Lamp  2 units  @49.9/unit

        cart.sort("desc");
        console.log("\nCart sorted by description");
        cart.printItems(); // Cart items sorted by desc lexicographically.
        // -> 11237  Cushion Set  1 units  @79.9/unit
        // -> 247  Floor Mat  3 units  @7.9/unit
        // -> 3  Laundry Basket  2 units  @29.9/unit
        // -> 8824  Shoe Rack  1 units  @199/unit
        // -> 5532  Shower Curtain - Rod  1 units  @12.9/unit
        // -> 5537  Shower Curtain - Rose Red  1 units  @29.9/unit
        // -> 44827  Table Lamp  2 units  @49.9/unit
        // -> 328  Tea Cup  5 units  @9.9/unit

        cart.sort("price");
        console.log("\nCart sorted by price per unit");
        cart.printItems(); // Cart items sorted by price per unit numerically.
        // -> 247  Floor Mat  3 units  @7.9/unit
        // -> 328  Tea Cup  5 units  @9.9/unit
        // -> 5532  Shower Curtain - Rod  1 units  @12.9/unit
        // -> 3  Laundry Basket  2 units  @29.9/unit
        // -> 5537  Shower Curtain - Rose Red  1 units  @29.9/unit
        // -> 44827  Table Lamp  2 units  @49.9/unit
        // -> 11237  Cushion Set  1 units  @79.9/unit
        // -> 8824  Shoe Rack  1 units  @199/unit

        /* End Part B test */
    }

    var myItems = new test(); //instantiate new myItems object from function test
