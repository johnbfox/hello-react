import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './apps/IndecisionApp';

const Layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



