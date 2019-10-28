$('.btn-add').click(function(){
    window.open("addnew.html","_self")
})
$('.btn-cart').click(function(){
    window.open("cart.html","_self")
})
var products =[]

// var products = [
//     {
//     title:"Mother Board",
//     img:"images/motherboard.jpg",
//     price:"200$",
//     description:"Intel Z390 GAMING Motherboard with 10+2 Digital PWM Design, 2-Way CrossFire™ Multi-Graphics, USB 3.1 Gen2 Type-A, M.2 Thermal Guard, Intel GbE LAN with cFosSpeed, Smart Fan 5, Dual M.2, Dual Armor with Ultra Durable™ Technology, DualBIOS, CEC 2019"
//     }
//  ]
 //console.log(products)
 //window.localStorage.setItem('products',JSON.stringify(products))
 var localStorageproduct = JSON.parse(window.localStorage.getItem('products'))
 console.log(localStorageproduct)
 
 $.each(localStorageproduct,function(i,val){
     var insertproduct = $('<div class="card shadow-lg border-success m-3" style="width: 18rem;"><img src="" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p><div class="container-fluid row "><div class="container col-md-6"><p></p></div><a href="#" class="btn btn-outline-primary col-md-6 d-blo">Add to Cart</a></div></div></div>')
     insertproduct.children("img").attr('src',localStorageproduct[i].img)
     insertproduct.children("div").children("h5").text(localStorageproduct[i].title)
     //insertproduct.children("div").children("p").text(localStorageproduct[i].description)
     insertproduct.children("div").children("div").children("div").children("p").text(localStorageproduct[i].price + "$")
     $('.productsview').append(insertproduct)
 })
 let valueforsingleview
 $('.card-img-top').click(function(){
    console.log("card-img-top")
    valueforsingleview = $(this).parent().html()
    window.open("singleview.html","")
    //valueforsingleview = window.opener["valueforsingleview"]
    console.log(valueforsingleview)
    window.localStorage.setItem("valueforsingleview",JSON.stringify(valueforsingleview))
    setsingleview()

    //$('.single-view-div').html(valueforsingleview)
})
function setsingleview(){
    valueforsingleview = JSON.parse(window.localStorage.getItem("valueforsingleview"))
    $('.single-view-div').append(valueforsingleview)
    console.log(valueforsingleview)
}
 $('.btn-submit-add-new-product').click(function(){
     console.log("submit button clicked")
     var title = $('#input-title').val()
     var img = $('#input-url').val()
     var price = $('#input-price').val()
     var description = $('#input-description').val()
     products.push({title:title,img:img,price:price,description:description})
     console.log(products)
     
     window.localStorage.setItem('products',JSON.stringify(products))
 })