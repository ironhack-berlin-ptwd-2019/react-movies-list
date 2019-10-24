import React, { Component } from 'react';
import { MovieCard } from './MovieCard'

class ListItems extends Component {

  state = {
    movies: [
      { title: "Jurassic Park", director: "Steven Spielberg" },
      { title: "Sharknado", director: "Anthony C. Ferrante" },
      { title: "Titanic", director: "James Cameron" }
    ],
    sayHello: false
  }

  deleteClickHandler = (index) => {
    this.setState({
      // filters the clicked-on movie from the array
      movies: this.state.movies.filter((m, i) => i !== index)
    })
  }

  render() {

    return (
      <ul>
        {this.state.movies.map((oneMovie, index) => {
          return <MovieCard
            key={index}
            // NOTE deleteClick passes down a function as a property !
            deleteClick={() => this.deleteClickHandler(index)}
            title={oneMovie.title}
            director={oneMovie.director} />
        })
        }

        {this.state.sayHello && 'Hello'}
        {!this.state.sayHello && 'Bye'}

      </ul>
    )
  }
}

export { ListItems }

