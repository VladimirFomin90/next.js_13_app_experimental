import Image from 'next/image';

export async function generateStaticParams() {
	const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
	return res.results.map((movie) => ({
		movie: toString(movie.id),
	}))

}

export default async function ModieId({ params }) {
    const { movie } = params;

    const imagePath = 'https://image.tmdb.org/t/p/original';
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );

    const res = await data.json();
    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2 className="text-lg">Duration: {res.runtime} minutes</h2>
                <h2 className="bg-purple-300 inline-block text-black m-2 p-2 rounded-lg">
                    {res.status}
                </h2>
                <Image
                    src={imagePath + res.backdrop_path}
                    className="my-6 w-full"
                    width={500}
                    height={500}
                    priority
                />
                <p>Rating avg: {res.vote_average}</p>
                <p className="my-2">{res.overview}</p>
            </div>
        </div>
    );
}
