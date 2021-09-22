import React, { Component } from "react";
import Gridviewcomponent from "../../common/gridviewcomponent";
import Profilecomponent2 from "../../common/profilecomponent2";
import SweetAlert from "sweetalert2-react";
import DatePicker from "react-datepicker";
// import ToolTip from "../../common/toolTip";
import "react-datepicker/dist/react-datepicker.css";
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from "classnames";
import Dropzone from "../../common/DropzoneExample";

let StaffObj = [
  {
    no: 25,
    img: "../assets/images/xs/avatar1.jpg",
    name: "Ken Smith",
    mail: "ken@gmail.com",
    Phone: "(417) 646-7483",
    data: "04 Jan, 2019",
  },
  {
    no: 26,
    img: "../assets/images/xs/avatar2.jpg",
    name: "Gerald K Smith",
    mail: "Gerald@gmail.com",
    Phone: "154) 646-2486",
    data: "04 Jan, 2019",
  },
  {
    no: 27,
    img: "../assets/images/xs/avatar3.jpg",
    name: "Ken Smith",
    mail: "ken@gmail.com",
    Phone: "(417) 646-8377",
    data: "04 Jan, 2019",
  },
];
export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      show: false,
    };
  }
  render() {
    const { activeTab } = this.state;
    return (
      <>
        <div className="section-body">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="header-action">
                <h1 className="page-title">Hodimlar</h1>
                <ol className="breadcrumb page-breadcrumb">
                  <li className="breadcrumb-item">
                    <a href>Ericsson</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Hodimlar
                  </li>
                </ol>
              </div>
              <Nav tabs className="page-header-tab">
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 1 })}
                    onClick={() => this.setState({ activeTab: 1 })}
                  >
                    Jadval ko'rinishi
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => this.setState({ activeTab: 2 })}
                  >
                    
                    Ro'yxat ko'rinishi
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => this.setState({ activeTab: 3 })}
                  >
                    Profil
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 4 })}
                    onClick={() => this.setState({ activeTab: 4 })}
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
              <TabPane tabId={1} className={classnames(["fade show"])}>
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          
                          <th>Ism</th>
                          <th>Telefon</th>
                          <th>Kurs</th>                          
                          <th>Qo'shilgan sana</th>                          
                          <th>tahrirlash</th>
                        </tr>
                      </thead>
                      <tbody>
                        {StaffObj.map((item) => (
                          <tr>
                            <td className="w60">
                              <img className="avatar" src={item.img} alt="" />
                            </td>
                            <td>
                              <div className="font-15">{item.name}</div>
                            </td>
                            <td>
                              <span>{item.Phone}</span>
                            </td>
                            <td>
                              <span className="text-muted">Peon</span>
                            </td>
                            
                            <td>
                              <strong>04 Jan, 2019</strong>
                            </td>
                           
                            <td>
                              
                              
                              <button
                                type="button"
                                className="btn btn-icon btn-sm"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                onClick={() => this.setState({ show: true })}
                                type="button"
                                className="btn btn-icon btn-sm js-sweetalert"
                                title="Delete"
                                data-type="confirm"
                              >
                                <i className="fa fa-trash-o text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                        
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
              </TabPane>
              <TabPane tabId={2} className={classnames(["fade show"])}>
                <Gridviewcomponent />
              </TabPane>
              <TabPane tabId={3} className={classnames(["fade show"])}>
                <Profilecomponent2 />
              </TabPane>
              <TabPane tabId={4} className={classnames(["fade show"])}>
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Shaxsiy ma'lumotlar</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Ism Familiya</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                         
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Tug'ilgan sana </label>
                              <DatePicker className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <label>Jinsi</label>
                            <select className="form-control show-tick">
                              <option value="">-- Jinsi --</option>
                              <option value="10">Erkak</option>
                              <option value="20">Ayol</option>
                            </select>
                          </div>
                         
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Telefon</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                         
                          <div className="col-sm-12">
                            <div className="form-group mt-2 mb-3">
                              <Dropzone />
                              
                            </div>
                          </div>
                        
                          <div className="col-sm-12">
                            <button
                              type="submit"
                              className="mr-1 btn btn-primary"
                            >
                              Yuborish
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                            >
                              Bekor qilish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Parol yaratish</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row clearfix">
                          {/* <div className="col-sm-12">
                            <div className="form-group">
                              <label>User Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div> */}
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Parol</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Parolni tasdiqlash</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button
                              type="submit"
                              className="mr-1 btn btn-primary"
                            >
                              Yuborish
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                            >
                              Bekor qilish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Account Information</h3>
                        <div className="card-options ">
                          <a
                            href
                            className="card-options-collapse"
                            data-toggle="card-collapse"
                          >
                            <i className="fe fe-chevron-up"></i>
                          </a>
                          <a
                            href
                            className="card-options-remove"
                            data-toggle="card-remove"
                          >
                            <i className="fe fe-x"></i>
                          </a>
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
                        <button type="submit" className="mr-1 btn btn-primary">
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </div> */}
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
