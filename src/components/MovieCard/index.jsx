import {PropTypes} from "prop-types"

const MovieCard = ({name,id,img,rating,overview,deleteMovie}) => {
	

	return (
		<div className="card mb-1">
			<img src={img} className="card-img-top" alt="Card img"/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{overview}</p>
				<div className="d-flex justify-content-between align-items-center">
					<button type="button" onClick={deleteMovie} className="btn btn-outline-danger"  >Delete</button>
					<h2>
						<span className="badge bg-info ">{rating}</span>
					</h2>

				</div>
			</div>
		</div>

	);
};
MovieCard.propTypes = {
	name: PropTypes.string,
	id:PropTypes.number,
	img:PropTypes.string,
	raiting:PropTypes.string,
	overview:PropTypes.string,
	deleteMovie:PropTypes.func
  };
export default MovieCard;