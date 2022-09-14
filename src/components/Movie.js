import { Link } from "react-router-dom";
import * as Styles from "../styles";

export function Movie({ movieId, movieTitle, overview }) {
	return (
		<Styles.MovieContainer>
			<h3>
				<Link to={`/movie/${movieId}`}>{movieTitle}</Link>
			</h3>
			<p className="movie-overview">{overview}</p>
		</Styles.MovieContainer>
	)
}