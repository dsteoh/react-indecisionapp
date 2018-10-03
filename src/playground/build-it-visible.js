let toggled = false;

const showDetails = () => {
    toggled = !toggled;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>{toggled ? 'Hide Details' : 'Show Details'}</button>
            {toggled && (
                <div>
                    <p>Hey, these are some details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}

renderApp();