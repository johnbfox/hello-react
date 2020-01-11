import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    onSubmit = (event) => {
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
                {this.state.error && <p className="add-option__error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onSubmit}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button type="submit" className="button">Add Option</button>
                </form>
            </div>
        )
    }
}