import React, { Component } from 'react';

class ToyCard extends Component {

  deleteHandler = (e) => {
    this.props.deleteHandler(this.props.toy.id)
  }

  likeHandler = (e) => {
    this.props.likeHandler(this.props.toy)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.likeHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={this.deleteHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
