import React from 'react';
import MovieCard from "../MovieCard"
import { PropTypes } from "prop-types"

class MovieList extends React.Component {
	render() {
		return (
			<div className="MovieList">
				<div className="row d-flex align-items-center">
					{this.props?.movies?.map(movie => (
						<div className="col-4" key={movie?.id}>
						
							<MovieCard
								deleteMovie={()=>this.props.deleteMovieProp(movie)}
								name={movie?.name}
								img={movie?.imageURL}
								rating={movie?.rating}
								overview={movie?.overview}
								id={movie?.id}
								key={movie?.id}
							/>
						</div>
					))}
				</div>
			</div>

		);
	}
};
MovieList.propTypes = {
	movies: PropTypes.array
};

export default MovieList;