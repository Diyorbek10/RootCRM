import React, { Component } from 'react';
import ToolTip from "../../common/toolTip";
import SweetAlert from 'sweetalert2-react';

export default class Leave extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
	render() {
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Leave</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Leave</li>
								</ol>
							</div>
							<a href className="btn btn-info btn-sm">Export Excel</a>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="table-responsive">
										<table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
											<thead>
												<tr>
													<th>Guruhlar</th>
													<th>O'qituvchilar</th>
													<th>Kurslar</th>
													<th>Summa</th>
													
												</tr>
											</thead>
											<tbody>
												<tr>
													
													<td><div className="font-15">Marshall Nichols</div></td>
													<td><span>LA-8150</span></td>
													<td>24 July, 2019 to 26 July, 2019</td>
													<td>Going to Family Function</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Gary Camara</div></td>
													<td><span>LA-8795</span></td>
													<td>20 July, 2019 to 26 July, 2019</td>
													<td>Going to Development</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Maryam Amiri</div></td>
													<td><span>LA-0258</span></td>
													<td>21 July, 2019 to 26 July, 2019</td>
													<td>Attend Birthday party</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Frank Camly</div></td>
													<td><span>LA-1515</span></td>
													<td>11 Aug, 2019 to 21 Aug, 2019</td>
													<td>Going to Holiday</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Marshall Nichols</div></td>
													<td><span>LA-8150</span></td>
													<td>24 July, 2019 to 26 July, 2019</td>
													<td>Going to Family Function</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Frank Camly</div></td>
													<td><span>LA-1515</span></td>
													<td>11 Aug, 2019 to 21 Aug, 2019</td>
													<td>Going to Holiday</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Gary Camara</div></td>
													<td><span>LA-8795</span></td>
													<td>20 July, 2019 to 26 July, 2019</td>
													<td>Going to Development</td>
													
												</tr>
												<tr>
													
													<td><div className="font-15">Maryam Amiri</div></td>
													<td><span>LA-0258</span></td>
													<td>21 July, 2019 to 26 July, 2019</td>
													<td>Attend Birthday party</td>
													
												</tr>
											</tbody>
										</table>
										<SweetAlert
											show={this.state.show}
											title="Are you sure?"
											text="You will not be able to recover this imaginary file!"
											type="warning"
											showCancelButton={true}
											confirmButtonColor="#dc3545"
											confirmButtonText="Yes, delete it!"
											closeOnConfirm={false}
											onConfirm={() => this.setState({ show: false })}
										/>
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
