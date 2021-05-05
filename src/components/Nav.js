import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarz = () => {
	return (
		<Navbar expand="lg" className="navbar-container">
			<Navbar.Brand className="navbar-brand" href="#home">
				React-Bootstrap
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto w-25 nav">
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>

					<Nav.Link
						href="/create"
						style={{
							backgroundColor: ' #f1356d',
							borderRadius: '10px',
							fontWeight: '600'
						}}
					>
						New Blog
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBarz;
