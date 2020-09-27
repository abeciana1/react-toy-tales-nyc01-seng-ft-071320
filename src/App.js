import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyData: [],
    selectedObj: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(data => {
      this.setState({ toyData: data})
    })
  }
  
  submitHandler = (toyObj) => {
    // console.log("submitting")
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(toyObj)
    }

    fetch("http://localhost:3000/toys", options)
    .then(res => res.json())
    .then(data => {
      let newArray = [data,...this.state.toyData]
      this.setState({
        toyData: newArray
      })
    })
  }

  deleteHandler = (id) => {
    // console.log(id)
    const options = {
      method: 'DELETE'
    }
    fetch("http://localhost:3000/toys/" + id, options)
    .then(res => res.json())
    .then(data => {
      let newArray = [...this.state.toyData]
      newArray.splice(newArray.indexOf(data), 1)
      this.setState({
        toyData: newArray
      })
    })
  }

  likeHandler = (toy) => {
    // console.log(id)
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        likes: toy.likes += 1
      })
    }
    fetch("http://localhost:3000/toys/" + toy.id, options)
    .then(res => res.json())
    .then(data => {
      this.setState({
        selectedObj: data
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toyData} deleteHandler={this.deleteHandler} likeHandler={this.likeHandler}/>
      </>
    );
  }

}

export default App;
