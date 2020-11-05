/*
console.log("running")*/

/*selecting all the anchor element with same class .add-cart by targeting them */
let carts = document.querySelectorAll('.add-cart')
let products = [ //an array with an object. use this to grab images
    {
        name: 'Footwear',
        tag: 'Footwear',
        price: 120,
        inCart: 0 //use to tell how many times it has been added to cart

    },
    {
        name: 'Jeans',
        tag: 'Jeans',
        price: 50,
        inCart: 0 //use to tell how many times it has been added to cart

    },

    {
        name: 'Ladies Wear',
        tag: 'LadiesWear',
        price: 15,
        inCart: 0 //use to tell how many times it has been added to cart

    },

    {
        name: 'Swimming',
        tag: 'Swimming',
        price: 200,
        inCart: 0 //use to tell how many times it has been added to cart

    },




]

/*Adding an event listener which will perform a task when I click any of them.
* Because there are group of them I will grab them as an array by looping through all of them
* It will loop from index 0 to the total length
* Assuming there are 4 items, it will run from 0,1,2,3
*  I want to grab the cart in the loop
* When the any item is click we check if there is any item on the local storage
* */

for (let i=0; i<carts.length; i++){
    //console.log("my loop");
    carts[i].addEventListener('click', () =>{
        //console.log('addeded to cart');

        /*cartNumbers();*///This will add the key-value of each item to the local storage
        cartNumbers(products[i]); //the product object is passed to this function to grab each index of each product
        totalCost(products[i])
    }); //grabbing cart base on this index array


}



/*will create a variable and use it to check the local storage to get an item of Cart number if it exist*/
function onLoadCartNumbers() {
let productsNumbers = localStorage.getItem('cartNumbers');
if (productsNumbers){
    document.querySelector('.cart span').textContent = productsNumbers;
}
}
/*
* Function to check how many items added to the cart
* 2. Adding values to local storage for the application to remember saved values
*
* - 1st time an item is clicked the condition in the function below is to set the value to 1
* - The subsequent clicks it should add plus 1 to the existing value in the storage
* */

/*function  cartNumbers()*/ function  cartNumbers(product){
    //console.log("The product clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers');//this will get the summation of items selected and saved in the local storage
    //console.log(productNumbers);
    //console.log(typeof  productNumbers);//the total count of items stored in the localstorage is grabbed as string ,so need to convert it to number
    productNumbers = parseInt(productNumbers);

    //console.log(typeof productNumbers)

    //console.log(productNumbers)//this will give you NaN THE 1ST TIME you click on an item because it purpose is to grab an item number from local storage and parse it to Int
     if (productNumbers){
         localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector('.cart span').textContent =productNumbers + 1;


     }
     else{
         localStorage.setItem('cartNumbers', 1);
         document.querySelector('.cart span').textContent =1;
     }
    /*localStorage.setItem('cartNumbers', 1);*/

    setItems(product);


}


function setItems(product) {
  /*  console.log('Inside of setItems function');
    console.log("My product is", product);*/

    let cartItems = localStorage.getItem('ProductsInCart');//getting item or checking if product exist already
    //console.log("My CartItems are", cartItems);
    cartItems= JSON.parse(cartItems);
   // console.log("My CartItems are", cartItems);



    if (cartItems != null){ //if you clicking the item for the 1st time it means your cart item is null

        if (cartItems[product.tag] === undefined){
            cartItems = {
                ...cartItems, //grabbing whatever is in the cart item before
                [product.tag]: product
            }

        }
        cartItems[product.tag].inCart += 1;
    } else {//when you clicking for the first time set the product value to be 1

        product.inCart =1;
        cartItems = {
            [product.tag]: product

    }


    }

    localStorage.setItem("ProductsInCart",JSON.stringify(cartItems));

}

function totalCost() {//whenever we loop through all the items in addToCart we will use this

}
onLoadCartNumbers();//this will run whenever the page is run for 1st time and check if there exist any available stored cart in localstorage
