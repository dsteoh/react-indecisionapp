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

const onClickMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
} ;

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onClickMakeDecision}>What Should I Do</button>
            <button onClick={onClickRemoveAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
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