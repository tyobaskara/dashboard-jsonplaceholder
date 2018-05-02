import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class AddPost extends React.Component {
  state = {
    userId: 0,
    title: '',
    body: '',
  }

  addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
          userId: this.state.userId
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

  addUserId = (e) => {
    this.setState({userId: e.target.value})
  }

  addTitle = (e) => {
    this.setState({title: e.target.value})
  }

  addBody = (e) => {
    this.setState({body: e.target.value})
  }

  render() {
    return (
      <Modal className="add-post" trigger={<Button>Add Post</Button>}>
        <Modal.Header>Add Post</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="user-id">
              <label htmlFor="add-userId">User Id: </label>
              <input type="text" id="add-userId" onChange={this.addUserId}/>
            </div>
            <div className="title">
              <label htmlFor="add-title">Title: </label>
              <input type="text" id="add-title" onChange={this.addTitle}/>
            </div>
            <div className="body">
              <label htmlFor="add-body">Body: </label>
              <textarea name="add-body" id="add-body" cols="30" rows="10" onChange={this.addBody}></textarea>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.addPost}>
            Add Post <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddPost
