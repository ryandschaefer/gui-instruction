(function(store){

    var loaded;

    store.productList = {
        load: function() {
            if (!loaded) {
                var products = store.inventory.getProducts();
                var fragment = document.createDocumentFragment();
                
                products.forEach(function(product) {
                    var li = document.createElement('li');
                    li.innerText = product.name;
                    li.classList.add('list-group-item');
                    li.onclick = function() {
                        store.productDetails.load(product.itemId);
                    };

                    var price = document.createElement('span');
                    price.innerText = '$' + product.price;
                    li.appendChild(price);
    
                    fragment.appendChild(li);
                });
    
                document.querySelector('#productList_products').appendChild(fragment);
                loaded = true;    
            }

            store._changeView('productList');
        }
    };


})(store || (store = {}));