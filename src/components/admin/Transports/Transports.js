import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import ToolTip from "../../common/toolTip";
import SweetAlert from 'sweetalert2-react';
import Dropzone from '../../common/DropzoneExample';

export default class Transports extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			
			show: false
		};
	}
	render() {
		const { activeTab } = this.state
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Harajatlar</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Harajatlar</li>
								</ol>
							</div>
							
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										Transport List
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Add Transport
    			               </NavLink>
								</NavItem>
								
							</Nav>

						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
					<TabContent activeTab={activeTab}>
					<TabPane tabId={1} className={classnames(['fade show'])}>
								<div className="card">
									<div className="table-responsive">
										<table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
											<thead>
												<tr>
													<th>Nomi</th>
													<th>Sana</th>
													<th>turkum</th>
													<th>Oluvchi</th>
													<th>Summa</th>
													<th>o'chirish</th>
												</tr>
											</thead>
											<tbody>
											
												<tr>
													<td>Alan Johnson</td>
													<td>404-447-6013</td>
													<td>GHT-25-5845</td>
													<td>UXS 111</td>
													<td>Botanic to Brooklyn</td>
													{/* <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button> */}
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
													
													{/* <button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button> */}
													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Alan Johnson</td>
													<td>404-447-2356</td>
													<td>GHT-25-4523</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												
												</tr>
												<tr>
													<td>Ken Smith</td>
													<td>404-447-8563</td>
													<td>GHT-25-1599</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Corrine Johnson</td>
													<td>404-447-7532</td>
													<td>GHT-25-5845</td>
													<td>UXS 581</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Alan Johnson</td>
													<td>404-447-7856</td>
													<td>GHT-25-5263</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>charGladys Smithlie</td>
													<td>404-447-9512</td>
													<td>GHT-25-7533</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Alice Smith</td>
													<td>404-447-6013</td>
													<td>GHT-25-7485</td>
													<td>UXS 324</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Alan Johnson</td>
													<td>404-447-4563</td>
													<td>GHT-25-3577</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Gerald Smith</td>
													<td>404-447-9852</td>
													<td>GHT-25-4566</td>
													<td>UXS 494</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
												<tr>
													<td>Danny Johnson</td>
													<td>404-447-4758</td>
													<td>GHT-25-2588</td>
													<td>UXS 4578</td>
													<td>Botanic to Brooklyn</td>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>

													{/* <td><button type="button" className="btn btn-icon btn-sm" title="Map"><i className="fa fa-map"></i></button></td> */}
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<ul className="pagination">
									<li className="page-item"><a className="page-link" href>Dastlabki</a></li>
									<li className="page-item"><a className="page-link" href>1</a></li>
									<li className="page-item"><a className="page-link" href>2</a></li>
									<li className="page-item"><a className="page-link" href>3</a></li>
									<li className="page-item"><a className="page-link" href>Keyingi</a></li>
								</ul>
								<SweetAlert
										show={this.state.show}
										title="Rostan ham o'chirmoqchimisiz?!"
										text="Siz ushbu ma'lumotni tiklay olmaysiz!"
										type="Ogohlantirish"
										showCancelButton={true}
										confirmButtonColor="#dc3545"
										confirmButtonText="Ha, o'chirish!"
										closeOnConfirm={false}
										onConfirm={() => this.setState({ show: false })}
									/>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="card">
									<form className="card-body form-horizontal">
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Route Name <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Vehicle Number <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Driver Name <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">License Number <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Phone Number <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Avatar <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<Dropzone />
												<small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label">Description <span className="text-danger">*</span></label>
											<div className="col-md-7">
												<textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-md-3 col-form-label"></label>
											<div className="col-md-7">
												<button type="submit" className="mr-1 btn btn-primary">Submit</button>
												<button type="submit" className="btn btn-outline-secondary">Cancel</button>
											</div>
										</div>
									</form>
								</div>
							</TabPane>
						</TabContent>
					</div>
				</div>
			</>
		);
	}
}
