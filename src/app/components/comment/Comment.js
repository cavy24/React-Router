import React from 'react';

export default class Comment extends React.Component {
    render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.userId}</h3>
            </div>
            <div className="panel-body">
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <p>{this.props.body}</p>
            </div>
        </div>
    );
    }
}