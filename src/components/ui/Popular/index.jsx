import React, { useEffect, useState } from "react";
import Row from "../../shared/Row/Row";
import axios from "axios";
import LoadingScreen from "../../shared/LoadingScreen/LoadingScreen";

const apiKey =
  import.meta.env.VITE_API_KEY || "0c901f88f70749decde4a1ace1c27b56";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVSeries, setPopularTVSeries] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularContent = async () => {
      try {
        const [moviesResponse, tvResponse, trendingResponse] = await Promise.all([
          axios.get(
            \https://api.themoviedb.org/3/movie/popular?api_key=\&language=en-US&include_adult=true\
          ),
          axios.get(
            \https://api.themoviedb.org/3/tv/popular?api_key=\&language=en-US&include_adult=true\
          ),
          axios.get(
            \https://api.themoviedb.org/3/trending/all/week?api_key=\&language=en-US\
          ),
        ]);

        setPopularMovies(moviesResponse.data.results);
        setPopularTVSeries(tvResponse.data.results);
        setTrendingAll(trendingResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular content:", error);
        setLoading(false);
      }
    };

    fetchPopularContent();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="container">
      <Row title={"Trending This Week"} results={trendingAll} />
      <Row title={"Popular Movies"} results={popularMovies} />
      <Row title={"Popular TV Series"} results={popularTVSeries} />
    </div>
  );
};

export default Popular;
