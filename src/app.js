import React from 'react';
import ReactDOM from 'react-dom';
import AddOptions from './components/AddOptions';
import Header from './components/Header';
import Action from './components/Action';
import Option from './components/Option';
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        //to handle invalid json
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(()=> ({options: options}));
            }       
        }catch (e){

        }  
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }

        this.setState((prevState)=>(
            {
                options: prevState.options.concat(option)
            }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'; 
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0 }
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key = {option} 
                    optionText = {option}
                    handleDeleteOption = {props.handleDeleteOption}/>
                ))
            }
        </div>
    );
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

