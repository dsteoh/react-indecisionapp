class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in te hands of a computer';
        const options = ['1', '2', '3'];
        return (
            <div>
                <Header title={title} subtitle = {subtitle}/>
                <Action/>
                <Options options={options}/>
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
                <button onClick ={this.handlePick}>What should I do</button>
            </div>
        );
    }
}

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