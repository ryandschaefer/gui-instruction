(store => {

    let loaded;

    store.productList = {
        load () {
            if (!loaded) {
                let products = store.inventory.getProducts();
                let fragment = document.createDocumentFragment();
                
                products.forEach(product => {
                    let li = document.createElement('li');
                    li.innerText = product.name;
                    li.classList.add('list-group-item');
                    li.onclick = () => store.productDetails.load(product.itemId);

                    let price = document.createElement('span');
                    price.innerText = `$${product.price}`;
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