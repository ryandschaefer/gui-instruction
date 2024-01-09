(function (store) {
    function Product(itemId, name, description, price) {
        this.itemId = itemId;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    let products = [
        new Product(
            1,
            "Foo (12 pack)",
            "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            12.99
        ),
        new Product(
            2,
            "Bag o' Bar",
            "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            19.99
        ),
        new Product(
            3,
            "Foo + Bar Combo",
            "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            25.99
        ),
        new Product(
            4,
            "Baz - New & Improved!",
            "Lorem ipsum dolor sit amet, at dictum, donec urna elementum, eget curabitur wisi nam, ultrices felis eleifend, sit aliquet libero quis lacus.",
            10.99
        )
    ];

    store.inventory = {
        getProducts: function() {
            return products;
        },
        getProduct: function(itemId) {
            return products.find(function(product) {
                return product.itemId === itemId;
            });
        }
    }

})(store || (store = {}));