import React, { Component } from 'react';

class TodoEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameEntry: '',
            descEntry: '',
            isDone: false
        };
    }



    render() {
        <form>
            <label>
                Name:
                <input type="text" value={this.state.nameEntry} />
                Description:
                <input type="text" value={this.state.descEntry} />
            </label>
            <input type="submit" value="Add" />
        </form>
                }
}