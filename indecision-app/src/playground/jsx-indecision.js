console.log('App.js is running');

const heya = 'wassup';

const app = {
    title: 'Indecision App',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        console.log(app.options);
    }

    render();
}

const removeAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
}

const appRoot = document.getElementById('app');
// JSX - JavaScript XML
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form> 
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();