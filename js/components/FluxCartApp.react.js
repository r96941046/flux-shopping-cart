var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');

// Private Method: retrieve state from stores
function getCartState() {
    return {
        product: ProductStore.getProduct(),
        selectProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems(),
        cartCount: CartStore.getCartCount(),
        cartTotal: CartStore.getCartTotal(),
        cartVisible: CartStore.getCartVisible()
    };
}

// Define main controller view
var FluxCartApp = React.createClass({

    // Get initial state from stores
    getInitialState: function() {
        return getCartState();
    },

    // Add change listeners to stores
    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    // Method to setState based upon store changes
    _onChange: function() {
        this.setState(getCartState());
    },

    render: function() {
        return (
            <div className="flux-cart-app">
                <span>Hello Flux!</span>
            </div>
        );
    }

});

module.exports = FluxCartApp;
