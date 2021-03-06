import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class DeletePost extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + this.props.data;
    fetch(url, {
        method: 'DELETE'
    })
    .then(
        response => {
            if(response.status != '404') {
              this.setState({ open: false })
              const row = document.getElementById('postListRow-' + this.props.data);
              row.parentElement.removeChild(row); 
              console.log(url , 'deleted');
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

export default DeletePost