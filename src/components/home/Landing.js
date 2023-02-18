import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../setup/Spinner';

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
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/978/259/719/despicable-me-assassin-s-creed-crossover-video-games-wallpaper-preview.jpg"/></figure>
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/649/794/360/the-avengers-avengers-endgame-avengers-endgame-captain-america-iron-man-hd-wallpaper-preview.jpg"/></figure>
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/763/710/546/spiderman-no-way-home-spiderverse-superhero-movies-digital-hd-wallpaper-preview.jpg"/></figure>
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/20/777/196/dinosaur-logo-logo-jurassic-world-wallpaper-preview.jpg"/></figure>
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/950/219/788/tv-show-the-walking-dead-andrew-lincoln-carl-grimes-wallpaper-preview.jpg"/></figure>
					<figure className="shadow"><img src="https://c4.wallpaperflare.com/wallpaper/884/965/115/movies-flash-superman-wonder-woman-wallpaper-preview.jpg"/></figure>
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
