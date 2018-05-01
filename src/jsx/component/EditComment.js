import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

class EditComment extends React.Component {
  state = {
    comment: []
  }

  getComment = () => {
      const postId = this.props.data.postId;
      const id = this.props.data.id;
      
      const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}&id=${id}`;

      fetch(commentUrl).then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Request failed!');
      }, networkError => {
          console.log(networkError.message);
      }
      ).then(jsonResponse => {
          if(jsonResponse != null) {
              this.setState({comment: jsonResponse[0]});
              console.log(this.state.comment);
          }
      });
  }

  nameChange = (e) => {
    let newState = Object.assign({}, this.state);
    newState.comment.name = e.target.value;
    this.setState(newState);
  }

  emailChange = (e) => {
    let newState = Object.assign({}, this.state);
    newState.comment.email = e.target.value;
    this.setState(newState);
  }

  bodyChange = (e) => {
    let newState = Object.assign({}, this.state);
    newState.comment.body = e.target.value;
    this.setState(newState);
  }

  proceedEdit = () => {
    const postId = this.props.data.postId;
    const id = this.props.data.id;

    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}&id=${id}`;

    fetch(commentUrl, {
      method: 'PUT',
      body: JSON.stringify([this.state.comment]),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => { 
      console.log(json);
    //   location.reload();
    })
  }

  render() {
    return (
      <Modal className="comment-edit" trigger={<Button>Edit</Button>} onOpen={this.getComment}>
        <Modal.Header>Edit</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="post-id">
              <label>PostId: </label>
              <input type="text" value={this.state.comment.postId} disabled/>
            </div>
            <div className="id">
              <label>Id: </label>
              <input type="text" value={this.state.comment.id} disabled/>
            </div>
            <div className="name">
              <label htmlFor="comment-edit-name">Name: </label>
              <input type="text" id="comment-edit-name" value={this.state.comment.name} onChange={this.nameChange}/>
            </div>
            <div className="email">
              <label htmlFor="comment-edit-email">Email: </label>
              <input type="text" id="comment-edit-email" value={this.state.comment.email} onChange={this.emailChange}/>
            </div>
            <div className="body">
              <label htmlFor="comment-edit-body">Body: </label>
              <textarea name="comment-edit-body" id="comment-edit-body" cols="30" rows="10" value={this.state.comment.body} onChange={this.bodyChange}></textarea>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.proceedEdit}>
            Edit Comment <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditComment
