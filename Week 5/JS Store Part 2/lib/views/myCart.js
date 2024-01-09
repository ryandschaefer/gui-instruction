(function(store){

    store.myCart = {
        load: function() {
            var table = document.querySelector('#myCart_cartItems');
            var template = table.querySelector('template');
            var tbody = table.querySelector('tbody');

            var fragment = document.createDocumentFragment();

            var items = store._cartItems;

            items.forEach(function(product) {
                var clone = template.content.cloneNode(true);
                
                var name = clone.querySelector('a');
                name.innerText = product.name;
                name.onclick = function() {
                    store.productDetails.load(product.itemId);
                };
                var price = clone.querySelector('span');
                price.innerText = '$' + product.price;

                fragment.appendChild(clone);
            });

            while(tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }

            tbody.appendChild(fragment);
            store._changeView('myCart');
        },
        clear: function() {
            store._cartItems.length = 0;
            store.myCart.load();
        }
    };

})(store || (store = {}));