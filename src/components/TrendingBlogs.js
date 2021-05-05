import { Media } from 'react-bootstrap';
const TrendingBlogs = () => {
	return (
		<div style={{ border: '1px solid black' }}>
			<h3>Trending blogs</h3>
			<div style={{ border: '1px solid red', width: '90%' }} className=" trending-blogs-container mx-auto">
				<Media className=" w-50 mx-auto p-2" style={{ border: '1px solid black' }}>
					<img
						width={34}
						height={34}
						className="mr-2"
						src="https://images.pexels.com/photos/7618308/pexels-photo-7618308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="jj"
					/>
					<Media.Body className="trending-blogs-media">
						<h6 style={{ fontWeight: 'bold', color: '#f1356d' }}>Media Heading</h6>

						<h6>Title of the Blog</h6>
						<h6>description of titledescription of titledescription of title</h6>
						<p>ajabf</p>
					</Media.Body>
				</Media>
			</div>
		</div>
	);
};

export default TrendingBlogs;
