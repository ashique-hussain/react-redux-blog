import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Blog from 'component/blog/Blog';
import PageNotFound from 'component/view/PageNotFound';
import BlogDetails from 'component/blog/BlogDetails';
import SearchPosts from 'component/search/SearchPost';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/blog/:slug" component={BlogDetails} />
      <Route exact path="/blog">
        <Redirect to="/" />
      </Route>
      <Route exact path='/search' component={SearchPosts} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
