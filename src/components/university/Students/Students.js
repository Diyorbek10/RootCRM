import React, { Component } from 'react';
import Profilecomponent from '../../common/profilecomponent';
import SweetAlert from 'sweetalert2-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Dropzone from '../../common/DropzoneExample';

let StudentsObj = [
	{
		no:25,
		img: "../assets/images/xs/avatar1.jpg",
		name:'Ken Smith',
		mail:'ken@gmail.com',
		Phone:'(417) 646-7483',
		data: '04 Jan, 2019',
	},
	{
		no:26,
		img: "../assets/images/xs/avatar2.jpg",
		name:'Gerald K Smith',
		mail:'Gerald@gmail.com',
		Phone:'154) 646-2486',
		data: '04 Jan, 2019',
	},
	{
		no:27,
		img: "../assets/images/xs/avatar3.jpg",
		name:'Ken Smith',
		mail:'ken@gmail.com',
		Phone:'(417) 646-8377',
		data: '04 Jan, 2019',
	},
]

export default class Students extends Component {
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
								<h1 className="page-title">O'quvchilar</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">O'quvchilar</li>
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										List View
                   				</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Profil
    			               </NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Qo'shish
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
									<div className="card-body">
										<div className="row">
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="ID" />
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Ism" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Pochta" />
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<div className="input-group">
													<DatePicker
														placeholderText="Sana"
														className="form-control"
													/>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<a href className="btn btn-sm btn-primary btn-block" title="">Qidiruv</a>
											</div>
										</div>
									</div>
								</div>
								<div className="table-responsive card">
									<table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
										<thead>
											<tr>
												<th>ID</th>
												<th>Rasm</th>																
												
												<th>Ism</th>																							
												<th>Email</th>
												<th>Telefon </th>
												<th>Aloqa</th>
												<th>Tug'ilgan Sanasi</th>
												<th>tahrirlash</th>
											</tr>
										</thead>
										<tbody>
											{StudentsObj.map((item) => (

											<tr>
												<td>A{item.no}</td>
												<td className="w60">
													<img className="avatar" src={item.img} alt="" />
												</td>
												<td><span className="font-16">{item.name}</span></td>
												
												<td>{item.mail}</td>
												<td>{item.Phone}</td>
												<td>{item.Phone}</td>
												<td>{item.data}</td>
												<td>													
													<button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
													<button onClick={() => this.setState({ show: true })} type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
												</td>
											</tr>

											))}					
										
											
										</tbody>
									</table>
									<SweetAlert
										show={this.state.show}
										title="Rostdan o'chirmoqchimisiz?"
										text="Siz buni faylni tiklay olmaysiz!"
										type="warning"
										showCancelButton={true}
										confirmButtonColor="#dc3545"
										confirmButtonText="Ha, O'chirilsin!"
										closeOnConfirm={false}
										onConfirm={() => this.setState({ show: false })}
									/>
								</div>
							</TabPane>
							<TabPane tabId={2} className={classnames(['fade show'])}>
								<Profilecomponent />
							</TabPane>
							<TabPane tabId={3} className={classnames(['fade show'])}>
								<div className="row clearfix">
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Asosiy ma'lumotlar</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<form className="card-body">
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Ism <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Familiyasi <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												{/* <div className="form-group row">
													<label className="col-md-3 col-form-label"> <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div> */}
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Email<span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												{/* <div className="form-group row">
													<label className="col-md-3 col-form-label">Ro'yhatdan otgan sana<span className="text-danger">*</span></label>
													<div className="col-md-9">
														<DatePicker
															className="form-control"
														/>
													</div> */}
												{/* </div> */}
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Guruh <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<select className="form-control input-height" name="department">
															<option value="">Select...</option>
															<option value="Category 1">Foundation</option>
															<option value="Category 2">Frontend</option>
															<option value="Category 3">Python</option>
															<option value="Category 3">SMM</option>
															<option value="Category 4">Android</option>
															<option value="Category 5">Php</option>
															<option value="Category 6">Desktop</option>
														</select>
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Jinsi <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<select className="form-control input-height" name="gender">
															<option value="">Select...</option>
															<option value="Category 1">Erkak</option>
															<option value="Category 2">Ayol</option>
														</select>
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Telefon <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Aloqa <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Tug'ilgan sana <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Manzil <span className="text-danger">*</span></label>
													<div className="col-md-9">
														<input type="text" className="form-control" />
													</div>
												</div>
												<div className="form-group row">
													<label className="col-md-3 col-form-label">Profil surati</label>
													<div className="col-md-9">
														<Dropzone />
														<small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
													</div>
												</div>
											</form>
										</div>
									</div>
									{/* <div className="col-lg-4 col-md-12 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="row clearfix">
													<div className="col-sm-12">
														<div className="form-group">
															<label>User Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group">
															<label>Confirm Password</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-sm-12">
														<button type="submit" className="mr-1 btn btn-primary">Submit</button>
														<button type="submit" className="btn btn-outline-secondary">Cancel</button>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Account Information</h3>
												<div className="card-options ">
													<a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
													<a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
												</div>
											</div>
											<div className="card-body">
												<div className="form-group">
													<label>Facebook</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Twitter</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>LinkedIN</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>Behance</label>
													<input type="text" className="form-control" />
												</div>
												<div className="form-group">
													<label>dribbble</label>
													<input type="text" className="form-control" />
												</div>
												<button type="submit" className="mr-1 btn btn-primary">Submit</button>
												<button type="submit" className="btn btn-outline-secondary">Cancel</button>
											</div>
										</div>
									</div> */}
								</div>
							</TabPane>
						</TabContent>
					</div>
				</div>
			</>
		);
	}
}
