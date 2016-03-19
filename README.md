# ECommerceShoppingCart-Javascript
Javascript
PROBLEM

You are required to complete as much of the problems described below using Javascript. The time
allocated for the test is 3 hours.

Description
You are required to develop a prototype ShoppingCart. The ShoppingCart contains one
property items – which is an array storing JSON objects in the shopping cart. The object structure
of a shopping cart item is as below:
{
"id": "99999",
"desc": "description of product",
"qty": 9,
"price": 99.99
}

Dataset

You are provided to work with the dataset in the template file. This dataset shall be used in the
test() function later, so it is recommended to leave the data intact. You may append additional
data below the default dataset provided.

Test Function
The test() function is a simple facility to enable you to check if the ShoppingCart prototype
has been implemented correctly. You may invoke test() after your ShoppingCart prototype
implementation and default dataset. If the output is similar, it shows that your implementation is in
the right path. You are encouraged to extend the test function to include negative tests or additional
features in your implementation.

Part A (required)

Develop the ShoppingCart prototype:

1) A constructor that takes one argument, arg. The argument arg is an array containing a list of shopping cart objects with the data structure described above. The constructor initialises the items property with values from arg. If the constructor is called without an argument,an empty array shall be assigned to items.
2) Write a method add(item) which does the following:
a) If item exists, increase the quantity by the item count described in the item object.
Two items are deemed exist by comparing the ID.
b) If the item does not exist, add the item into items property for the shopping cart.
The item argument possess the same data structure as described above.
3) Write a method remove(id, qty) that removes item from the shopping cart. The
argument id is the item ID in string and qty is the quantity of that item. If the quantity of
that said item is less or equals than zero, remove that item object from the array.
4) Write a method empty() to clear the shopping cart.
5) Write a method printItems() for the ShoppingCart prototype. This method prints to the
console all the items currently in the shopping cart. For example:
// -> 5532 Shower Curtain - Rod 1 units @12.9/unit
// -> 5537 Shower Curtain - Rose Red 1 units @29.9/unit
// -> 8824 Shoe Rack 1 units @199/unit
6) Write a method getTotalPrice() which return the total price of all the items currently in the shopping cart.


Part B (optional)
Implement a method sort(key) to the ShoppingList prototype. The argument key is a string
describing the “field” to be sorted in the shopping cart item list, i.e. “id”, “desc”, “qty” or “price”. If
an invalid value is provided as argument, leave the shopping list intact. Sorting shall be in
ascending mode.

Final Notes
You are to demonstrate your understanding and depth of the JavaScript language in this test.
References to online resources are allowed but plagarism shall be penalised. This test assignment
may be reused as interview material if you are successful for a face-to-face interview.
Your code style is graded, hence it is encouraged to structure the code professionally and equipped
with relevant comments. Usage of helper functions are encouraged.
