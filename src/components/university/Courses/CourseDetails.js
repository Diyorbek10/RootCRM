import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CourseDetails extends Component {
	render() {
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Kurs ma'lumotlarui</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><span>Ericsson</span></li>
									<li className="breadcrumb-item"><Link to="/courses">Kurslar</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Ma'lumotlar</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-4 col-lg-5 col-md-12">
								<div className="card">
									<a href><img className="card-img-top" src="../assets/images/gallery/1.jpg" alt="" /></a>
									<div className="card-body d-flex flex-column">
										<h5><a href>PHP Development Course</a></h5>
										<div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
									</div>
									<div className="table-responsive">
										<table className="table table-striped table-vcenter mb-0">
											<tbody>
												{/* <tr>
													<td className="w20"><i className="fa fa-calendar text-blue"></i></td>
													<td className="tx-medium">Date</td>
													<td className="text-right">21st Aug 2019</td>
												</tr> */}
												<tr>
													<td className="w20"><i className="fa fa-calendar text-blue"></i></td>
													<td className="tx-medium">Davomiyligi</td>
													<td className="text-right">6 Oy</td>
												</tr>
												<tr>
													<td><i className="fa fa-cc-visa text-danger"></i></td>
													<td className="tx-medium">To'lovi</td>
													<td className="text-right">$1,674</td>
												</tr>
												<tr>
													<td><i className="fa fa-users text-warning"></i></td>
													<td className="tx-medium">Talabalar</td>
													<td className="text-right">125+</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="card-footer">
										<div className="d-flex align-items-center mt-auto">
											<img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
											<div>
												<a href>Pro. Jane</a>
												<small className="d-block text-muted">Head OF Dept.</small>
											</div>
											<div className="ml-auto text-muted">
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-8 col-lg-7 col-md-12">
								<div className="card">
									<div className="card-body">
										<h5 className="mt-4">Kurs bo'limlari</h5>
										<ul className="list-group">
											<li className="list-group-item d-flex justify-content-between align-items-center">Microsoft Application Tools such MS Word, MS Excel, MS PowerPoint. <span className="badge badge-primary badge-pill">1 Month</span></li>
											<li className="list-group-item">Computer Organizations and Operating Systems.</li>
											<li className="list-group-item">Programming in C.</li>
											<li className="list-group-item d-flex justify-content-between align-items-center">Introduction to Computer and Internet. <span className="badge badge-primary badge-pill">1 Month</span></li>
											<li className="list-group-item d-flex justify-content-between align-items-center">RDBMS and Data Management <span className="badge badge-primary badge-pill">2Month</span></li>
											<li className="list-group-item">Web Technologies such as creation of dynamic website.</li>
											<li className="list-group-item">Object Oriented Programming Languages such as C++/Java.</li>
										</ul>
										<h5 className="mt-4">Kursni bitirgan talaba qilishi mumkin:</h5>
										<ul className="list-group">
											<li className="list-group-item">Introduction to Computer and Internet.</li>
											<li className="list-group-item">Microsoft Application Tools such MS Word, MS Excel, MS PowerPoint.</li>
											<li className="list-group-item d-flex justify-content-between align-items-center">Computer Organizations and Operating Systems.<span className="badge badge-primary badge-pill">6 Month</span></li>
											<li className="list-group-item">Programming in C.</li>
											<li className="list-group-item">Object Oriented Programming Languages such as C++/Java.</li>
											<li className="list-group-item">RDBMS and Data Management</li>
											<li className="list-group-item">Web Technologies such as creation of dynamic website.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
