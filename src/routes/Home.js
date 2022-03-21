import axios from "axios";
import React from "react";
import "../routes/Home.css";
import Movie from "../components/Movie";
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    /** const movies
    const {
      data: {
        data: { _movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies: _movies });
    console.log("movies⛳", _movies.data.data.movies); //*/
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //es6에서는 객체의 키와 대입할 변수의 이름이 같으면 코드를 축약할 수 있다.
    //console.log("movies⛳", movies.data.data.movies);
  };

  componentDidMount() {
    //axios.get({ url: "https://yts-proxy.now.sh/list_movies.json" });
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading ..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((index) => {
              console.log("🎞", index);
              return (
                <Movie
                  key={index.id}
                  id={index.id}
                  title={index.title}
                  year={index.year}
                  rating={index.rating}
                  genres={index.genres}
                  summary={index.summary}
                  poster={index.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
