import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../setup/Spinner';
import './home.css';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <section id="slideshow">
          <div className="entire-content">
            <div className="content-carrousel">
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt='banner'/></figure>
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"/></figure>
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/akira.2020.imax_500x749.jpg?v=1597332258"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c86a76819022e173e45815007c053217_72df0b75-6dde-4f48-8e4d-05be9c912f58_240x360_crop_center.progressive.jpg?v=1573616009"/></figure>
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BYTRhZWVlOTQtZGZjZS00NzczLThlNWEtMWJiYjQxZGY0ZjI1XkEyXkFqcGdeQXVyMTI3OTcxMzQ3._V1_SX300.jpg"/></figure>
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BMDIzM2FlNTctNjAzZi00YzhkLThjYWQtMDY5Njc0NjdmMGVlXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg"/></figure>
              <figure className="shadow"><img src="https://m.media-amazon.com/images/M/MV5BMTA0ODk2NDU0NjBeQTJeQWpwZ15BbWU3MDUxMjQwMzE@._V1_SX300.jpg"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/965a99756171f61611b6d6667b9f4004_240x360_crop_center.progressive.jpg?v=1573572622"/></figure>
            </div>
          </div>
        </section>
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
