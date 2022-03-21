import axios from "axios";
import React from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //const movies
    // const {
    //   data: {
    //     data: { _movies },
    //   },
    // } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // this.setState({ movies: _movies });
    // console.log("movies⛳", _movies.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false }); //es6에서는 객체의 키와 대입할 변수의 이름이 같으면 코드를 축약할 수 있다.
    console.log("movies⛳", movies.data.data.movies);
  };

  componentDidMount() {
    //  axios.get({ url: "https://yts-proxy.now.sh/list_movies.json" });

    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <h1>{isLoading ? "Loading ..." : "we re ready"}</h1>;
  }
}
export default App;
