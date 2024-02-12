(store => {
    store._cartItems = [];

    store._changeView = id => {
        document.querySelectorAll('main > .active')
                .forEach(e => e.classList.remove('active'));
        document.querySelector('#' + id).classList.add('active');
    };

})(store || (store = {}));