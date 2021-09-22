import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Columnchart from '../../common/columnchart';
import Radarchart from '../../common/radarchart';
import Ckeditor from '../../common/ckeditor';
import ToolTip from "../../common/toolTip";
import { toggle3DotMenuAction } from "../../../actions/settingsAction";


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
			isCardRemove: false,
			isFullScreen: false,
			isCollapsed: false,
		};
	}
	render() {
		const { is3DotMenu, toggle3DotMenuAction } = this.props
		const { activeTab, isCardRemove, isFullScreen, isCollapsed } = this.state
		return (
			<>

				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row clearfix row-deck">
							{/* <div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newProfessors" text="Yangi o'qituvchilar" />
										<div className="ribbon-box green" data-tip data-for="newProfessors">5</div>
										<Link to="/professors" className="my_sort_cut text-muted">
											<i className="fa fa-black-tie"></i>
											<span>O'qituvchilar</span>
										</Link>
									</div>
								</div>
							</div> */}
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="O'quvchilar" />
										<div className="ribbon-box orange" data-tip data-for="newStaff">8</div>
										<Link to="/contact" className="my_sort_cut text-muted">
											<i className="fa fa-user-circle-o"></i>
											<span>O'quvchilar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="Hodimlar" />
										<div className="ribbon-box green" data-tip data-for="newStaff">8</div>
										<Link to="/staff" className="my_sort_cut text-muted">
											<i className="fa fa-black-tie"></i>
											<span>Hodimlar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="Guruhlar" />
										<div className="ribbon-box orange" data-tip data-for="newStaff">8</div>
										<Link to="/filemanager" className="my_sort_cut text-muted">
											<i className="fa fa-folder"></i>
											<span>Guruhlar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="Kurslar" />
										<div className="ribbon-box green" data-tip data-for="newStaff">8</div>
										<Link to="/library" className="my_sort_cut text-muted">
											<i className="fa fa-book"></i>
											<span>Kurslar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="Lidlar" />
										<div className="ribbon-box orange" data-tip data-for="newStaff">8</div>
										<Link to="/holiday" className="my_sort_cut text-muted">
											<i className="fa fa-bullhorn"></i>
											<span>Faol lidlar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<ToolTip id="newStaff" text="Qarzdorlar" />
										<div className="ribbon-box green" data-tip data-for="newStaff">8</div>
										<Link to="/holiday" className="my_sort_cut text-muted">
											<i className="fa fa-credit-card"></i>
											<span>Qarzdorlar</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<TabContent activeTab={activeTab}>
							<TabPane tabId={1} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-xl-12">
										<div className={`card ${isCardRemove ? 'card-remove' : ''} ${isFullScreen ? 'card-fullscreen' : ''} ${isCollapsed ? 'card-collapsed' : ''}`}>
											<div className="card-header">
												<h3 className="card-title">To'lov tarixi</h3>
												<div className="card-options">
													<a href className="card-options-collapse" onClick={() => this.setState({ isCollapsed: !isCollapsed })}><i
														className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen"
														data-toggle="card-fullscreen" onClick={() => this.setState({ isFullScreen: !isFullScreen })}><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" onClick={() => this.setState({ isCardRemove: !isCardRemove })}><i
														className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="d-sm-flex justify-content-between">
													{/* <div className="font-12 mb-2"><span>Measure How Fast You’re Growing Monthly
														Recurring Revenue. <a href>Learn More</a></span></div> */}
													<div className="selectgroup w250">
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="low"
																className="selectgroup-input" defaultChecked />
															<span className="selectgroup-button">Kun</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="medium"
																className="selectgroup-input" />
															<span className="selectgroup-button">Hafta</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="high"
																className="selectgroup-input" />
															<span className="selectgroup-button">Oy</span>
														</label>
														<label className="selectgroup-item">
															<input type="radio" name="intensity" value="veryhigh"
																className="selectgroup-input" />
															<span className="selectgroup-button">Yil</span>
														</label>
													</div>
												</div>
												<Columnchart></Columnchart>
											</div>
											
										</div>
									</div>
								</div>
								<div className="row clearfix row-deck">
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Bugungi dars jadvali</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i
														className="fe fe-chevron-up"></i></a>
												</div>
											</div>
											<div className="table-responsive" style={{ height: "310px" }}>
												<table
													className="table card-table table-vcenter text-nowrap table-striped mb-0">
													<tbody>
														<tr>
															<th className="text-center">Kim/Guruh nomi</th>
															<th className="text-center">Kurs</th>
															<th className="text-center">O'quvchilar</th>
															<th className="text-center">Vaqti</th>

														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
														<tr>

															<td className="w80 d-flex">
																<div>
																	<div>Merri Diamond</div>
																	<div className="text-muted">Backend</div></div>
															</td>
															<td className="text-center">Python Backend</td>
															<td className="text-center">10</td>
															<td className="text-center">14.00-16.00</td>
														</tr>
													</tbody>
												</table>
											</div>
											{/* <div className="card-footer d-flex justify-content-between">
												<div className="font-14"><span>Measure How Fast You’re Growing Monthly Recurring
                                                    Revenue. <a href>View All</a></span></div>
												<div>
													<button type="button" className="btn btn-primary">Export</button>
												</div>
											</div> */}
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Lidlar</h3>
											</div>
											<div className="card-body">
												<Radarchart></Radarchart>
												{/* <div id="apex-radar-multiple-series"></div> */}
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Yangi o'quvchilar ro'yxati</h3>
												<div className="card-options">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i
														className="fe fe-chevron-up"></i></a>
													<a href className="card-options-fullscreen"
														data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i
														className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-striped mb-0 text-nowrap">
														<thead>
															<tr>
																<th>No</th>
																<th>Name</th>
																<th>O'qituvchi</th>
																<th>Boshlagan sana</th>
																<th>To'lov</th>
																<th>Kurs</th>
																<th>Tahrirlash</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>1</td>
																<td>Jens Brincker</td>
																<td>Kenny Josh</td>
																<td>27/05/2016</td>
																<td>
																	<span className="tag tag-success">to'lagan</span>
																</td>
																<td>Mechanical</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>2</td>
																<td>Mark Hay</td>
																<td> Mark</td>
																<td>26/05/2018</td>
																<td>
																	<span className="tag tag-danger">to'lamagan</span>
																</td>
																<td>Science</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>3</td>
																<td>Anthony Davie</td>
																<td>Cinnabar</td>
																<td>21/05/2018</td>
																<td>
																	<span className="tag tag-success ">to'lagan</span>
																</td>
																<td>Commerce</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>4</td>
																<td>David Perry</td>
																<td>Felix </td>
																<td>20/04/2019</td>
																<td>
																	<span className="tag tag-danger">to'lamagan</span>
																</td>
																<td>Mechanical</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
															<tr>
																<td>5</td>
																<td>Anthony Davie</td>
																<td>Beryl</td>
																<td>24/05/2017</td>
																<td>
																	<span className="tag tag-success ">to'lagan</span>
																</td>
																<td>M.B.A.</td>
																<td>
																	<a href><i
																		className="fa fa-check"></i></a>
																	<a href><i
																		className="fa fa-trash"></i></a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<div className="row clearfix row-deck">
									<div className="col-xl-7 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Quick Mail</h3>
												<div className="card-options">
													<a href className="card-options-remove"
														data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i
															className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-cloud-download"></i>
																Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text w80">To:</span>
													</div>
													<input type="text" className="form-control" />
													<div className="input-group-append">
														<span className="input-group-text">CC BCC</span>
													</div>
												</div>
												<div className="input-group mt-1 mb-3">
													<div className="input-group-prepend">
														<span className="input-group-text w80">Subject:</span>
													</div>
													<input type="text" className="form-control" />
												</div>

												<div className="summernote">
													<Ckeditor />
												</div>
												<button className="btn btn-default mt-3">Send</button>
											</div>
										</div>

									</div>
									<div className="col-xl-5 col-lg-6 col-md-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">University Stats</h3>
												<div className="card-options">
													<a href className="card-options-remove"
														data-toggle="card-remove"><i className="fe fe-x"></i></a>
													<div className="item-action dropdown ml-2">
														<a href data-toggle="dropdown"><i
															className="fe fe-more-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-eye"></i> View Details </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-share-alt"></i> Share </a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-cloud-download"></i>
																Download</a>
															<div className="dropdown-divider"></div>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-copy"></i> Copy to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-folder"></i> Move to</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-edit"></i> Rename</a>
															<a href className="dropdown-item"><i
																className="dropdown-icon fa fa-trash"></i> Delete</a>
														</div>
													</div>
												</div>
											</div>
											<div className="card-body">
												<div className="row text-center">
													<div className="col-lg-4 col-4 border-right">
														<label className="mb-0 font-10">Department</label>
														<h4 className="font-20 font-weight-bold">05</h4>
													</div>
													<div className="col-lg-4 col-4 border-right">
														<label className="mb-0 font-10">Total Teacher</label>
														<h4 className="font-20 font-weight-bold">43</h4>
													</div>
													<div className="col-lg-4 col-4">
														<label className="mb-0 font-10">Total Student</label>
														<h4 className="font-20 font-weight-bold">267</h4>
													</div>
												</div>
												<table className="table table-striped mt-4">
													<tbody>
														<tr>
															<td>
																<label className="d-block">Mechanical Engineering<span
																	className="float-right">43%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-indigo" role="progressbar"
																		aria-valuenow="43" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "43%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Business Analysis - BUS <span
																	className="float-right">27%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-blue" role="progressbar"
																		aria-valuenow="27" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "27%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Computer Technology - CT <span
																	className="float-right">81%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-cyan" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "81%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Management - MGT <span
																	className="float-right">61%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-pink" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "61%" }}></div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<label className="d-block">Science <span
																	className="float-right">77%</span></label>
																<div className="progress progress-xs">
																	<div className="progress-bar bg-orange" role="progressbar"
																		aria-valuenow="77" aria-valuemin="0"
																		aria-valuemax="100" style={{ width: "77%" }}></div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="card-footer">
												<small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a
													href>Learn More</a></small>
											</div>
										</div>
									</div>
									<div className="col-xl-12 col-lg-12">
										<div className="card">
											<div className="table-responsive todo_list">
												<table
													className="table table-hover text-nowrap table-striped table-vcenter mb-0">
													<thead>
														<tr>
															<th>Task</th>
															<th className="w150 text-right">Due</th>
															<th className="w100">Priority</th>
															<th className="w80 text-center"><i className="icon-user"></i></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">Report Panel
																		Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 12-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
															<td>
																<ToolTip id="id0" text="Avatar Name" />
																<span className="avatar avatar-pink" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Report Panel
																		Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 18-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar1.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">New logo design for
																		Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 02-2019</td>
															<td><span className="tag tag-success ml-0 mr-0">High</span></td>
															<td>
																<img src="../assets/images/xs/avatar2.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">Report Panel
																		Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 12-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
															<td>
																<span className="avatar avatar-pink" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Report Panel
																		Usag</span>
																</label>
															</td>
															<td className="text-right">Feb 18-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar3.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" defaultChecked />
																	<span className="custom-control-label">New logo design for
																		Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 02-2019</td>
															<td><span className="tag tag-success ml-0 mr-0">High</span></td>
															<td>
																<span className="avatar avatar-blue" data-tip data-for="id0"
																	data-placement="top" title=""
																	data-original-title="Avatar Name">NG</span>
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Design PSD files for
																		Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 20-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar4.jpg"
																	data-tip data-for="id0" data-placement="top" title=""
																	alt="Avatar" className="avatar"
																	data-original-title="Avatar Name" />
															</td>
														</tr>
														<tr>
															<td>
																<label className="custom-control custom-checkbox">
																	<input type="checkbox" className="custom-control-input"
																		name="example-checkbox1" value="option1" />
																	<span className="custom-control-label">Design PSD files for
																		Angular Admin</span>
																</label>
															</td>
															<td className="text-right">March 20-2019</td>
															<td><span className="tag tag-danger ml-0 mr-0">MED</span></td>
															<td>
																<img src="../assets/images/xs/avatar5.jpg" data-tip data-for="id0" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</TabPane>
						</TabContent>
					</div>

				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	is3DotMenu: state.settings.is3DotMenu
})

const mapDispatchToProps = dispatch => ({
	toggle3DotMenuAction: (e) => dispatch(toggle3DotMenuAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);