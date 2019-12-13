console.log('App.js is running');

const heya = 'wassup';

const app = {
    title: 'Star Wars',
    options: []
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    </div>
);


const user = {
    name: 'John',
    age: 27,
    location: 'Boston'
}

function getLocation(location) {
    return (location) ? <p>{location}</p> : undefined;
}
var templateTwo = (
    <div>
        <h1>{user.name || 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: { user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);