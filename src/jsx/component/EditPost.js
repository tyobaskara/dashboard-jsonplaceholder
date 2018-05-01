import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class EditPost extends React.Component {
  state = {
    post: []
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
      const id = this.props.data;
      const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

      fetch(postUrl).then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Request failed!');
      }, networkError => {
          console.log(networkError.message);
      }
      ).then(jsonResponse => {
          if(jsonResponse != null) {
              this.setState({post: jsonResponse});
          }
      });
  }

  titleChange = (e) => {
    let newState = Object.assign({}, this.state);
    newState.post.title = e.target.value;
    this.setState(newState);
  }

  bodyChange = (e) => {
    let newState = Object.assign({}, this.state);
    newState.post.body = e.target.value;
    this.setState(newState);
  }

  proceedEdit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(this.state.post),
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

  render() {
    return (
      <Modal className="edit-post" trigger={<Button>Edit</Button>}>
        <Modal.Header>Edit</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="title">
              <label htmlFor="title">Title: </label>
              <input type="text" id="title" value={this.state.post.title} onChange={this.titleChange}/>
            </div>
            <div className="body">
              <label htmlFor="body">Body: </label>
              <textarea name="body" id="body" cols="30" rows="10" value={this.state.post.body} onChange={this.bodyChange}></textarea>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.proceedEdit}>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditPost
