
var shoppingCart = []


var totalPrice = 0


function add (itemFullName,price) {
  event.preventDefault()
  
  
  var i = shoppingCart.indexOf(itemFullName)
  
  
  if(i == -1) {
    shoppingCart.push(itemFullName)
    totalPrice = totalPrice + price
    } 
  
  else {
    shoppingCart.splice(i,1)
   
    }
  
  
  shoppingCart = shoppingCart.sort()
  
  
  if(totalPrice < 0 && totalPrice > -0.1) {
    totalPrice = 0
  }
  
  
  console.log(shoppingCart.length + " items added to cart, your payment is going to be $" + totalPrice.toFixed(2) )
  
 
  if(shoppingCart.length != 0) {
    document.querySelector("#cartcount").innerHTML = ("  (" + shoppingCart.length + ")")
  }
  
  else {
    document.querySelector("#cartcount").innerHTML = ""
  }

}


function cartNow() {
  console.log("In your cart: " + shoppingCart.join(", "))
}

