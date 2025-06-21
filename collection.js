
document.addEventListener("DOMContentLoaded", function () {
    var productContainer = document.getElementById("product");
    var search = document.getElementById("search");
    var productList = productContainer.querySelectorAll(".product-box");

    search.addEventListener("keyup", function () {
        var enteredValue = search.value.toUpperCase();

        productList.forEach(function (product) {
            var productName = product.querySelector("p").textContent.toUpperCase();
            if (productName.includes(enteredValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
