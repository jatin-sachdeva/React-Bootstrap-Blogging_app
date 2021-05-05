import { Media } from 'react-bootstrap';

const BlogList = (props) => {
	const blogs = props.blogs;

	return (
		<div>
			<h2 className="mb-3">Your Blogs:</h2>
			{blogs.map((blog) => (
				<Media className="mx-auto mb-3  media-blogs-list w-100">
					<img
						width={74}
						height={74}
						className="mr-4"
						src="https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="jj"
					/>
					<Media.Body>
						<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>Media Heading</h6>
						<h7 className="mb-0">author</h7>
						<p>fe19 3 min read</p>
					</Media.Body>
				</Media>
			))}
		</div>
		// <div className="blog-list">

		// </div>
	);
};

export default BlogList;
