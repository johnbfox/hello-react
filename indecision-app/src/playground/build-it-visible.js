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

// console.log('App.js is running');

// const app = {
//     title: "Visibility Toggle",
//     messageToggled: false
// }

// const MESSAGE = 'SHOW ME';

// const toggleMessage = () => {
//     app.messageToggled = !app.messageToggled;
//     render();
// }

// const appRoot = document.getElementById('app');
// // JSX - JavaScript XML
// const render = () => {
//     console.log(app.messageToggled);
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleMessage}>
//                 {app.messageToggled ? 'Hide details' : 'Show Details'}
//             </button>
//             {(app.messageToggled) && <p>{MESSAGE}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// render();