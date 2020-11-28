import React, {Component} from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="container">
				<ul className="nav justify-content-center lighten-4 py-3">
					<li className="nav-item px-5">
						<div className='nav-button rounded'>
							<a className="text-light nav-link active" href="https://www.instagram.com/neednowsnacks/">Follow
								us on IG</a>
						</div>
					</li>
					<li className="nav-item px-5">
						<div className='nav-button rounded'>
							<a className="text-light nav-link" href="#!">Opening hours: 6pm - 12am</a>
						</div>
					</li>
					<li className="nav-item px-5">
						<div className='nav-button rounded'>
							<a className="text-light nav-link" href="#!">Campus only deliveries</a>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
