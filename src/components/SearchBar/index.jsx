import React from "react";

class SearchBar extends React.Component {
	

	formSubmit=(event)=>{
		event.preventDefault();
	}

	render() {
		return (

			<form onSubmit={this.formSubmit} >
				<div className="form-row mb-5 mt-3">
					<div className="col-12">
						<div className="input-group mb-3">
							<input 
							type="text" 
							onChange={this.props.searchMovie} 
							className="form-control" 
							placeholder="Search a movie" 
							/>
								<button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
						</div>
					</div>
				</div>
			</form>

				);
	}
	
};
				export default SearchBar;