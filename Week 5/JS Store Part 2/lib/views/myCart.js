(store => {

    store.myCart = {
        load () {
            const table = document.querySelector('#myCart_cartItems');
            const template = table.querySelector('template');
            const tbody = table.querySelector('tbody');

            const fragment = document.createDocumentFragment();

            let items = store._cartItems;

            items.forEach(product => {
                let clone = template.content.cloneNode(true);
                
                let name = clone.querySelector('a');
                name.innerText = product.name;
                name.onclick = () => store.productDetails.load(product.itemId);

                let price = clone.querySelector('span');
                price.innerText = `$${product.price}`;

                fragment.appendChild(clone);
            });

            while(tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }

            tbody.appendChild(fragment);
            store._changeView('myCart');
        },
        clear () {
            store._cartItems.length = 0;
            store.myCart.load();
        }
    };

})(store || (store = {}));