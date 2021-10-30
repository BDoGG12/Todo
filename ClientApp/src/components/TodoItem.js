import React, { Component } from 'react';

var TodoItem = (props) => (
    <div>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Done?</th>
        </tr>
        <tr>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{props.isComplete}</td>
        </tr>
    </div>

);