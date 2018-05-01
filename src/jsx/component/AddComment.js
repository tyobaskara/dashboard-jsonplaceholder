import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class AddComment extends React.Component {
  state = {
    name: '',
    email: '',
    body: '',
  }

  addPost = () => {
    const id = this.props.data;

    if(this.state.name !== '' && this.state.email !== '' && this.state.body !== '') {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                postId: id,
                name: this.state.name,
                email: this.state.email,
                body: this.state.body
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            location.reload();
        })
    }
    else {
        console.log('cannot be empty');
    }
  }

  addName = (e) => {
    this.setState({name: e.target.value})
  }

  addEmail = (e) => {
    this.setState({email: e.target.value})
  }

  addBody = (e) => {
    this.setState({body: e.target.value})
  }

  render() {
    return (
      <Modal className="comment-add" trigger={<Button>Add Comment</Button>}>
        <Modal.Header>Add Comment</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="name">
              <label htmlFor="comment-add-name">Name: </label>
              <input type="text" id="comment-add-name" onChange={this.addName}/>
            </div>
            <div className="email">
              <label htmlFor="comment-add-email">Email: </label>
              <input type="text" id="comment-add-email" onChange={this.addEmail}/>
            </div>
            <div className="body">
              <label htmlFor="comment-add-body">Body: </label>
              <textarea name="comment-add-body" id="comment-add-body" cols="30" rows="10" onChange={this.addBody}></textarea>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.addPost}>
            Add Comment <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddComment
