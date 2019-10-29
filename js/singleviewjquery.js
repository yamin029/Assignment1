var single_product_tilte = JSON.parse(window.localStorage.getItem("valueforsingleview"))
console.log(single_product_tilte)
var localStorageproduct = JSON.parse(window.localStorage.getItem('products'))
console.log(localStorageproduct)
console.log(localStorageproduct[0].title)
$.each(localStorageproduct,function(i,val){
    //console.log(localStorageproduct[i].title)
    if((localStorageproduct[i].title) == single_product_tilte)
    {
        var content = $('<div class="row no-gutters"><div class="col-md-4"><img src="" class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p></div></div><div class="col-md-8 d-flex flex-row-reverse "><a href="#" class="btn btn-outline-primary col-md-6 d-blo">Add to Cart</a></div></div>')
        content.children('.col-md-4').children("img").attr("src",localStorageproduct[i].img)
        content.children('.col-md-4').next().children().children("h5").text(localStorageproduct[i].title)
        content.children('.col-md-4').next().children().children("p").text(localStorageproduct[i].description)
        $('.single-view-div').html(content)
        window.localStorage.setItem('valueforsingleview',null)
    }
})