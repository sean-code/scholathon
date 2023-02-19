import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body text-center h-100" style={{color:'black', backgroundColor:'#fff', boxShadow:'0px 2px 10px'}}>
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="card-title" style={{color:'#000'}}>
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn " to={'/movie/' + movie.imdbID} style={{color:'#fff', backgroundColor:'#1b3050', boxShadow:'0px 2px 10px'}}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
