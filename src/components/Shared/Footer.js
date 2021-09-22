import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<div className="section-body">
				<footer className="footer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								Copyright © 2021 by  <a
									href="https://rootacademy.uz/"><b>ROOTSOFT</b></a>.
                            </div>
							<div className="col-md-6 col-sm-12 text-md-right">
								<ul className="list-inline mb-0">
									<li className="list-inline-item"><Link to="/">Documentation</Link></li>
									<li className="list-inline-item"><a href>FAQ</a></li>
									<li className="list-inline-item"><a href
										className="btn btn-outline-primary btn-sm">Buy Now</a></li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
