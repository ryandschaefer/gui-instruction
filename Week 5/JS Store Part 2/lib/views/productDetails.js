(store => {

    let selectedProduct;

    store.productDetails = {
        load (itemId) {
            selectedProduct = store.inventory.getProduct(itemId);
            
            document.querySelector('#productDetails_name').innerText = selectedProduct.name;
            document.querySelector('#productDetails_price').innerText = selectedProduct.price;
            document.querySelector('#productDetails_description').innerText = selectedProduct.description;

            store._changeView('productDetails');
        },
        addToCart () {
            store._cartItems.push(selectedProduct);
            store.myCart.load();
        }
    };

})(store || (store = {}));