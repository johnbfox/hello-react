class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Visibility Toggle';
        this.toggleMessage = this.toggleMessage.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleMessage() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.toggleMessage}>
                    {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                {(this.state.visibility) && <p>I am seen</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));