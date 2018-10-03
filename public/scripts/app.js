'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var options = e.target.elements.option.value;
    if (options) {
        app.options.push(options);
        e.target.elements.option.value = '';
        renderApp();
    } else {}
};

var onClickRemoveAll = function onClickRemoveAll() {
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onClickRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
