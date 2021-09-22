import React, { Component } from "react";
import { connect } from "react-redux";
import Ckeditor from "./ckeditor";
import { dropDownMenuAction } from "../../actions/settingsAction";

class Profilecomponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardRemove: false,
      isFullScreen: false,
      isCollapsed: false,
    };
  }
  render() {
    const { dropDownMenu, dropDownMenuAction } = this.props;
    const { isCardRemove, isFullScreen, isCollapsed } = this.state;
    return (
      <div className="row">
        <div className="col-xl-4 col-md-12">
          <div className="card ">
            <div className="card-body w_user ">
              <div className="user_avtar">
                <img
                  className="rounded-circle"
                  src="../assets/images/sm/avatar1.jpg"
                  alt=""
                />
              </div>
              <div className="wid-u-info ">
                <h5>Dessie Parks</h5>
                <p className="text-muted m-b-0">
                  119 Peepee Way, Hilo, HI, 96720
                </p>
                <p className="">Rollar: </p>
                <div className="text-right">
                  <span className="p-1 rounded border border-danger text-secondary ">
                    Teacher
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">To'liq ma'lumot</h3>
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
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Jinsi: </b>
                  <div>ayol</div>
                </li>

                <li className="list-group-item">
                  <b>Tug'ilgan sana: </b>
                  <div>01.02.202</div>
                </li>
                <li className="list-group-item">
                  <b>Telefon:</b>
                  <div>(417) 646-8377</div>
                </li>
                <li className="list-group-item">
                  <b>Manzil:</b>
                  <div>Andijon shahar</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-12">
          <div
            className={`card ${isCardRemove ? "card-remove" : ""} ${
              isFullScreen ? "card-fullscreen" : ""
            } ${isCollapsed ? "card-collapsed" : ""}`}
          >
            <div className="card-header">
              <h3 className="card-title">Timeline Activity</h3>
              <div className="card-options">
                <a
                  href
                  className="card-options-collapse"
                  onClick={() => this.setState({ isCollapsed: !isCollapsed })}
                >
                  <i className="fe fe-chevron-up"></i>
                </a>
                <a
                  href
                  className="card-options-fullscreen"
                  data-toggle="card-fullscreen"
                  onClick={() => this.setState({ isFullScreen: !isFullScreen })}
                >
                  <i className="fe fe-maximize"></i>
                </a>
                {/* <div className="card"> */}
                {/* </div> */}
              </div>
            </div>
            <div className="d-flex ">
              <div className="w-100 ml-2 mr-1">
                <div className="card w-100">
                  <div className="card-body  w-100 ">
                    <div className="wid-u-info w-100">
                      <div className="d-flex justify-content-between">
                        <h5>Guruh nomi </h5>
                        <div className="disabled btn border-secondary px-2 py-1">
                          0
                        </div>
                      </div>
                      <p className="text-muted m-b-0">Backend</p>
                    </div>
                  </div>
                </div>
                <div className="card w-100">
                  <div className="card-body  w-100 ">
                    <div className="wid-u-info w-100">
                      <div className="d-flex justify-content-between">
                        <h5>Guruh nomi </h5>
                        <div className="disabled btn border-secondary px-2 py-1">
                          0
                        </div>
                      </div>
                      <p className="text-muted m-b-0">Backend</p>
                    </div>
                  </div>
                </div>
                <div className="card w-100">
                  <div className="card-body  w-100 ">
                    <div className="wid-u-info w-100">
                      <div className="d-flex justify-content-between">
                        <h5>Guruh nomi </h5>
                        <div className="disabled btn border-secondary px-2 py-1">
                          0
                        </div>
                      </div>
                      <p className="text-muted m-b-0">Backend</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100  ml-1 mr-2">
                <div className="card w-100">
                  {/* <div className="card"> */}
                  <div className="card-body py-0">
                    <div className=" text-center mb-5">
                      <img
                        className="card-profile-img w-100 p-3 m-0 shadow-none"
                        src="../assets/images/sm/avatar1.jpg"
                        alt=""
                      />
                      <h2 className="mb-5 bold ">08:00</h2>
                    </div>

                    {/* <span>Python</span>
                            <span>Backend</span> */}

                    <div className="text-muted d-flex justify-content-between mb-2">
                      <h5 className='font-weight-bold'>Guruh nomi </h5>
                      <h6>15 </h6>
                    </div>
                    <div className="text-muted d-flex justify-content-between mb-2">
                      <h6>Python </h6>
                      <h6>0</h6>
                    </div>
                    <div className="text-muted d-flex justify-content-between mb-2">
                      <h6>2020.02.02 </h6>
                      <h6>2020.02.02 </h6>
                     
                    </div>
                    {/* <p className="mb-4 mt-3">449 Thompson St, Conway, SC, 29527</p> */}
                    <div className="text-right mb-3">
                      <button className="btn btn-outline-secondary p-1">Guruhga o'tish </button>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dropDownMenu: state.settings.isDropDownMenu,
});

const mapDispatchToProps = (dispatch) => ({
  dropDownMenuAction: (e) => dispatch(dropDownMenuAction(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profilecomponent2);
