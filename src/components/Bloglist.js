import { Button, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteEntry } from '../Delete';
import { useState, useEffect } from 'react';
import Modalmessage from './Modalmessage';

const BlogList = (props) => {
	const blogs = props.blogs;
	const [ isModal, setModal ] = useState(false);
	const handleDel = async (id) => {
		const response = await deleteEntry('http://localhost:8000/blogs/' + id);
		console.log(this);
		if (response) {
			setModal(true);
		}
	};
	return (
		<div>
			<h2 className="mb-3">Your Blogs:</h2>
			{blogs.map((blog) => (
				<Media className="mx-auto mb-3  media-blogs-list w-100" key={blog.id} id={blog.id}>
					<img
						width={74}
						height={74}
						className="mr-4"
						src="https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="jj"
					/>
					<Link to={`/blogs/${blog.id}`}>
						<Media.Body>
							<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>{blog.title}</h6>
							<h6 className="mb-0">
								<b>By:{blog.author}</b>
								<br />
								fe19 3min read&nbsp;&nbsp;
							</h6>
						</Media.Body>
					</Link>
					<Link to="/">
						<Button
							variant="dark"
							size="sm"
							onClick={() => {
								handleDel(blog.id);
							}}
						>
							Delete
						</Button>
					</Link>
				</Media>
			))}
			{isModal && <Modalmessage />}
		</div>
		// <div className="blog-list">

		// </div>
	);
};

export default BlogList;
