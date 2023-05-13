import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 2.  변수를 받으려면 파라미터가 필요합니다.

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailMovies, setDetailMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetailMovies(json.data.movie);
    setLoading(false);
  };
  //console.log(detailMovies);

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={detailMovies.background_image} />
          <h2>{detailMovies.title}</h2>
          <p>{detailMovies.description_intro}</p>
          <ul>
            {detailMovies.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
