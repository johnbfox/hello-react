import React from 'react';

import Action from '../components/Action';
import AddOption from '../components/AddOption';
import Header from '../components/Header';
import Options from '../components/Options';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }))
    }

    handlePick = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[optionIndex];
        alert(option);
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Invalid option'
        } else if (this.state.options.includes(option)) {
            return 'Option already exists'
        }
        
        this.setState((previousState) => ({
            options: previousState.options.concat(option)
        }))
    }

    componentDidMount() {
        try {
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