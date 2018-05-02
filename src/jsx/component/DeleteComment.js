import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class DeleteComment extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    const postId = this.props.data.postId;
    const id = this.props.data.id;
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}&id=${id}`;

    fetch(commentUrl, {
        method: 'DELETE'
    })
    .then(
        response => {
            if(response.status != '404') {
              this.setState({ open: false })
              const row = document.getElementById('comment-list-' + this.props.data.id);
              row.parentElement.removeChild(row); 
              console.log(commentUrl , 'deleted');
            }
            else {
              console.log('api is not correct');
            }
        }
    )
  }
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.show}>Delete</Button>
        <Confirm
          className='confirm-modal'
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default DeleteComment