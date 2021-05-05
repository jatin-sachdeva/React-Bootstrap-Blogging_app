import BlogList from './Bloglist';
import useFetch from '../custom hooks/useFetch';
import BigBlog from './BigBlog';
import TrendingBlogs from './TrendingBlogs';
import { Spinner } from 'react-bootstrap';

const Home = () => {
	const { data: blogs, isLoading, isError } = useFetch('http://localhost:8000/blogs');
	return (
		<div className="home">
			<div className="blogs-container">
				{isError && <h2>Error,response status is not OK</h2>}
				{isLoading && (
					<h2>
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</h2>
				)}
				<div className="big-blog">{blogs && <BigBlog />}</div>

				<div className="blogs-list">{blogs && <BlogList blogs={blogs} />}</div>
			</div>
			<hr />
			<div className="trending-blogs">{blogs && <TrendingBlogs />}</div>
			<div />
		</div>
	);
};
export default Home;
