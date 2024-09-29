import { API_URL } from "../(home)/page";

async function getMovieInfo(id: string) {
    console.log(`Fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const [movie] = await Promise.all([
        getMovieInfo(id)
    ]);
    return <h1>{movie.title}</h1>;
}
