class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing one', '2', '3']
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'; 
        return (
            <div>
                <Header title={title} subtitle = {subtitle}/>
                <Action hasOptions={this.state.options.length > 0 }/>
                <Options options={this.state.options}/>
                <AddOptions/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handle pick');
    }

    render() {
        return (
            <div>

                <button onClick ={this.handlePick}
                disabled = {!this.props.hasOptions }
                >
                What should I do
                </button>
            </div>
        );
    }
}
//test
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    
    handleRemoveAll() {
        console.log(this.props.options);
        //alert('Remove all');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key = {option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Options: {this.props.optionText}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        const options = e.target.elements.option.value.trim();
        e.preventDefault();

        if(options) {
            alert('Test');
        }
    }
    render() {
        return (
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add options</button>
            </form>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));