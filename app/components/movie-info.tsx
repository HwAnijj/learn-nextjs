import Link from "next/link";
import potato from '../../styles/movie-info.module.css';
import { API_URL } from "../constant";

async function getMovieInfo(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const [movie] = await Promise.all([
        getMovieInfo(id)
    ]);
    return <div className={potato.container}>
        <img className={potato.poster} src={movie.poster_path} alt={movie.title} />
        <div className={potato.info}>
            <h1 className={potato.title}>{movie.title}</h1>
            <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <Link href={movie.homepage} target="_blank">Homepage &rarr;</Link>
        </div>
    </div>;
}
