class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            toggled: false
        }
    }

    showDetails() {
        this.setState((prevState) => {
            return {
                toggled: !prevState.toggled
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.showDetails}>{this.state.toggled ? 'Hide Details' : 'Show Details'}</button>
                {this.state.toggled && <p>Hey, these are some</p>}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));