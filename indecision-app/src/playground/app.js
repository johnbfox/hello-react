const obj = {
    name: 'Will',
    getName() {
         return this.name
    }
}

const getName = obj.getName;

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() => ({options}) );
            }
        } catch (e) {
            //Pass
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }))
    }

    handlePick() {
        const optionIndex = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[optionIndex];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Invalid option'
        } else if (this.state.options.includes(option)) {
            return 'Option already exists'
        }
        
        this.setState((previousState) => ({
            options: previousState.options.concat(option)
        }))
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        <button onClick={props.handleRemoveAll}>Remove all</button>
        {props.options.map(option => (
            <Option 
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
        ))}
    </div>
)

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={e => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            error: undefined
        } 
    }

    onSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }) );
    
        if(!error) {
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));