import NavBarz from './components/Nav';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css files/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewBlog from './components/NewBlog';
import DisplayBlog from './components/DisplayBlog';
function App() {
	return (
		<Router>
			<div className="App">
				<NavBarz />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<NewBlog />
						</Route>
						<Route path="/blogs/:id">
							<DisplayBlog />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
