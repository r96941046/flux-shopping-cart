var Dispatcher = require('flux').Dispatcher

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

// Handle dispatch requests
AppDispatcher.handleAction = function(action) {

    // Dispatch payload
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

module.exports = AppDispatcher;
