import Layout from "./components/Layout/Layout";
import MovieHomePage from "./pages/MovieHomePage";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        <Switch>
          <Route path='/home'>
            <MovieHomePage />
          </Route>
          <Route path='/movies' exact>
            <MoviePage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
