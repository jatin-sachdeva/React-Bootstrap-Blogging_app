import { useParams } from 'react-router';
import useFetch from '../custom hooks/useFetch';
import { Media } from 'react-bootstrap';

const DisplayBlog = () => {
	const { id, type } = useParams();
	const { data: blog, isLoading, isError } = useFetch(`http://localhost:8000/${type}/${id}`);
	return (
		<div style={{ width: '100%' }}>
			{blog && (
				<div className="display-blogs-container">
					<div className="display-blogs-blog-top">
						<h1 style={{ fontSize: '3rem' }}>
							{blog.title
								.split(' ')
								.map((x) => x.charAt(0).toUpperCase().concat(x.slice(1, x.length)))
								.join(' ')}
						</h1>
						<Media className="mx-auto mb-3 w-25 test p-2" key={blog.id}>
							<img
								className="mr-2"
								width={34}
								height={34}
								src="https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
								alt="jj"
								style={{ borderRadius: '100%' }}
							/>
							<Media.Body className="text-left">
								<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>
									{`By:${blog.author}`}
									<span> &nbsp;3min read</span>
								</h6>
							</Media.Body>
						</Media>
						<img className="mb-4 w-100" src={blog.img} alt="img" />
						<h4>
							<i>{blog.opening}</i>
						</h4>
					</div>
					<div className="display-blogs-blog-bottom">
						<h2>{blog.heading}</h2>
						<p style={{ fontSize: '1.2rem' }}>{blog.body}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DisplayBlog;
