import React, { Component } from 'react';

class Comment extends Component {
    renderComments = () => this.props.comments.map(comm => <li key={comm.id}> {comm.user_id} {comm.text}</li>)
    render() {
        return (
            <ul>
              {this.renderComments()}
            </ul>
        );
    }
}

export default Comment;
