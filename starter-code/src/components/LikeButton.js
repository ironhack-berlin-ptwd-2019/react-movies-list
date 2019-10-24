import React, { Component } from 'react'

class LikeButton extends Component {

  state = {
    count: this.props.count
  }

  // function
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  // render method
  render() {
    // logic

    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </div>
    )
  }
}

export default LikeButton