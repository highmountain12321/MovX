import React, { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer/footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = lazy(() => import("./Components/Home"));
const NowPlaying = lazy(() => import("./Components/AllNowPlayingMovies"));
const TopRated = lazy(() => import("./Components/AlltopRatedMovies"));
const Upcoming = lazy(() => import("./Components/AllUpcomingMovies"));
const SinglePageMovie = lazy(() => import("./Components/singleMoviePage"));
const SearchMovie = lazy(() => import("./Components/seacrhMovie"));

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NowPlaying_Movies" component={NowPlaying} />
          <Route exact path="/ToPRated_Movies" component={TopRated} />
          <Route exact path="/UpComing_Movies" component={Upcoming} />
          <Route exact path="/view/movie/:id" component={SinglePageMovie} />
          <Route
            exact
            path="/search/movie/:movieName"
            component={SearchMovie}
          />
        </Switch>
      </Suspense>
      <Footer />
    </HashRouter>
  );
}

export default App;
