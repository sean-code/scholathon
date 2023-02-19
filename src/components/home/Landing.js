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
              <figure className="shadow"><img src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg" alt='banner'/></figure>
              <figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/117/891/681/robert-pattinson-the-batman-2021-movies-artwork-batman-hd-wallpaper-preview.jpg"/></figure>
              <figure className="shadow"><img src="https://cdn.cinematerial.com/p/297x/2q1c06yg/the-woman-king-movie-poster-md.jpg?v=1661884183"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/akira.2020.imax_500x749.jpg?v=1597332258"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c86a76819022e173e45815007c053217_72df0b75-6dde-4f48-8e4d-05be9c912f58_240x360_crop_center.progressive.jpg?v=1573616009"/></figure>
              <figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/763/710/546/spiderman-no-way-home-spiderverse-superhero-movies-digital-hd-wallpaper-preview.jpg"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ant-man-and-the-wasp-quantumania_vjwwvg7f_240x360_crop_center.progressive.jpg?v=1676482725"/></figure>
              <figure className="shadow"><img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b23f04a0a15d8ba87990fba43d520416_9bd68ef5-e28d-4b01-a82c-f5bffc9d91cf_500x749.jpg?v=1573591364"/></figure>
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
