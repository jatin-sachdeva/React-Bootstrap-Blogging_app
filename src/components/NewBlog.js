import { useState } from 'react';
import { Button } from 'react-bootstrap';

const NewBlog = () => {
	const [ title, setTitle ] = useState('');
	const [ opening, setOpening ] = useState('');
	const [ heading, setHeading ] = useState('');
	const [ body, setBody ] = useState('');
	const [ thumbnail, setThumbnail ] = useState('');
	const [ img, setImg ] = useState('');
	const [ uploading, setUploading ] = useState(false);

	// a post request for the data
	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the page from refreshing
		setUploading(true);

		const data = { title, opening, heading, body, author: 'user', thumbnail, img };
		console.log(data);
		console.log('inside fn');
		setTimeout(() => {
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(() => {
				console.log('data uploaded');
				setUploading(false);
				clearInputs();
			});
		}, 1000);
	};
	const clearInputs = () => {
		setImg('');
		setThumbnail('');
		setBody('');
		setHeading('');
		setOpening('');
		setTitle('');
	};
	const handleChange = (e) => {
		let target = e.target.name;
		switch (target) {
			case 'title':
				setTitle(e.target.value);
				break;
			case 'op':
				setOpening(e.target.value);
				break;
			case 'heading':
				setHeading(e.target.value);
				break;
			case 'body':
				setBody(e.target.value);
				break;
			case 'thumbnail':
				setThumbnail(e.target.value);
				break;
			case 'img':
				setImg(e.target.value);
				break;
			default:
				break;
		}
	};
	return (
		<form className="newblog-form" onSubmit={handleSubmit}>
			<h2>New Blog</h2>
			<div className="newblog-form-content">
				<label>Title:</label>
				<input
					required
					name="title"
					value={title}
					type="text"
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label>opening line</label>
				<input
					required
					name="op"
					value={opening}
					type="text"
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label>Heading</label>
				<input
					required
					type="text"
					name="heading"
					value={heading}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label>Thumbnail Image:</label>
				<input
					required
					name="thumbnail"
					value={thumbnail}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label>Blog Image:</label>
				<input
					required
					name="img"
					value={img}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label>body:</label>
				<textarea
					required
					name="body"
					value={body}
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				{uploading === false ? (
					<Button
						type="submit"
						onClick={handleSubmit}
						className="mx-auto mt-2 mb-2"
						style={{
							backgroundColor: '#f1356d',
							fontSize: '1.5rem',
							fontFamily: "'Roboto Condensed', sans-serif"
						}}
					>
						Create Blog
					</Button>
				) : (
					<Button
						disabled
						className="mx-auto mt-2 mb-2"
						style={{ backgroundColor: '#f1356d', fontSize: '1.5rem' }}
					>
						Uploading
					</Button>
				)}
			</div>
		</form>
	);
};

export default NewBlog;
