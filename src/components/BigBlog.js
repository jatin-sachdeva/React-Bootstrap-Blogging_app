import { Card } from 'react-bootstrap';
const BigBlog = () => {
	return (
		<Card style={{ width: '90%' }}>
			<Card.Img
				className="mx-auto"
				style={{ width: '80%' }}
				variant="top"
				src="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			/>
			<Card.Body className="mx-auto" style={{ width: '80%' }}>
				<Card.Title className="card-title">efefe</Card.Title>
				<Card.Subtitle>fefef</Card.Subtitle>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default BigBlog;
