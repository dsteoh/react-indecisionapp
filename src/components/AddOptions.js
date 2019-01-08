import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        const options = e.target.elements.option.value.trim(); 
        e.preventDefault();
        const error = this.props.handleAddOption(options);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (    
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button className="button">Add options</button>
                </form>
            </div>
        );
    }
}