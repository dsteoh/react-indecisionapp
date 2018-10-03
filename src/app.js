const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const options = e.target.elements.option.value;
    if(options){
        app.options.push(options);
        e.target.elements.option.value ='';
        renderApp();
    }else{

    }
};

const onClickRemoveAll = () => {
    app.options = [];
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onClickRemoveAll}>Remove all</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};
renderApp();