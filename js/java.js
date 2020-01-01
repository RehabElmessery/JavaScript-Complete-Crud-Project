var productContainer;

if (localStorage.getItem("productsData") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("productsData"));
    displayproducts();
}
function validDateForm(userName)
{
    var userNameRegex = /^[A-Z][a-z]{3,8}/;
    if(userNameRegex.test(userName) !=false){
        return false;
    }
    else
    {
        return true;
    }
}
function addProduct() {
    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;

    var productDesc = document.getElementById("productDescInp").value;

    if(validDateForm(productName) ==true){


        var product =
        {
            name: productName,
            price: productPrice,
            category: productCategory,
            desc: productDesc,
        }
    
        productContainer.push(product);
        localStorage.setItem("productsData", JSON.stringify(productContainer))
        displayproducts();
    }
    else
    {
        window.alert("userName not valid")
    }
}

function displayproducts() {

    var temp = "";

    for (var i = 0; i < productContainer.length; i++) {

        temp += `  <div class="col-md-3">
    <img class="img-fluid" src="images/work-1.jpg">
    <h4>`+ productContainer[i].name + ` <span class="badge badge-secondary ml-3">` + productContainer[i].category + `</span></h4>
    <p>`+ productContainer[i].desc + `</p>
    <div class="price">`+ productContainer[i].price + `</div>
    <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm mb-3">delete</button>
    <button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm mb-3">update</button>

    </div>`;

    }

    document.getElementById("productsRow").innerHTML = temp;

}




function searchproducts(term) {
    var temp = ``;
    for (var i = 0; i < productContainer.length; i++) {


        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += `  <div class="col-md-3"> <div class="product">
                <img class="img-fluid" src="images/work-1.jpg">
                <h4>`+ productContainer[i].name + ` <span class="badge badge-secondary ml-3">` + productContainer[i].category + `</span></h4>
                <p>`+ productContainer[i].desc + `</p>
                <div class="price">`+ productContainer[i].price + `</div>
                </div>
             </div>`;
        }

    }
    document.getElementById("productsRow").innerHTML = temp;

}

function deleteProduct(indx)
{
    var deleted = productContainer.splice(indx ,1);
    localStorage.setItem("productsData", JSON.stringify(productContainer))
    displayproducts();


}

function updateProduct(index)
{
    var updated = productContainer.findIndex(index,-1);
   
 localStorage.setItem("productsData", JSON.stringify(productContainer))
    displayproducts();

}

