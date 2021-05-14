import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogList = (props) => {
	const blogs = props.blogs;

	return (
		<div>
			<h2 className="mb-3">Your Blogs:</h2>
			{blogs.map((blog) => (
				<Link to={`/blogs/${blog.id}`}>
					<Media className="mx-auto mb-3  media-blogs-list w-100" key={blog.id}>
						<img
							width={74}
							height={74}
							className="mr-4"
							src="https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="jj"
						/>
						<Media.Body>
							<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>{blog.title}</h6>
							<h6 className="mb-0">
								<b>By:{blog.author}</b>
								<br />
								fe19 3min read
							</h6>
						</Media.Body>
					</Media>
				</Link>
			))}
		</div>
		// <div className="blog-list">

		// </div>
	);
};

export default BlogList;
