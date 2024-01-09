(function(store){
    store._cartItems = [];

    store._changeView = function(id) {
        document.querySelectorAll('main > .active')
                .forEach(function(element){
                    element.classList.remove('active');
                });
        document.querySelector('#' + id).classList.add('active');
    };

})(store || (store = {}));