import React, { Component } from 'react';
import './Dashboard.scss';
import { SideNavItem, SideNav, Button } from 'react-materialize';
import CollapsibleMenu from './components/CollapsibleMenu';
import TaskReminder from './components/ReminderLayout'
import * as actions from './../../redux/actions/AppActionTypes';
import { connect } from 'react-redux';

class Dashboard extends Component {
    onLogoutFirebase = () =>{
        this.props.onSignoutReminder();
    }

    render() {
        return (
            <div className="dashboard-layout">
                <div className="control">
                    <div className="sideNav">
                        <SideNav
                            trigger={<Button className="bntSideNav">
                                <i className="material-icons">menu</i></Button>}
                            options={{ closeOnClick: false }}>
                            <SideNavItem>
                                <CollapsibleMenu/>
                            </SideNavItem>
                        </SideNav>
                    </div>
                    <div className="onDisplay">
                        <div className="profile">
                            <div className="profile-icon">
                                <div className="iconMedly">
                                    <img className="icon" alt="iconMedly" src="/assets/icon_title.png" />
                                </div>
                            </div>
                            <div className="user-info">
                                <div className="user-name">
                                    <span className="user-name-content">Pham Phu Cuong</span>
                                </div>
                                <div className="mail">
                                    <span className="mail-content">cuong.pham@terralogic.com</span>
                                </div>
                                <div className="role">
                                    <span className="role-content">(Admin)</span>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-control">
                                <CollapsibleMenu />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-content">
                    <div className="dashboard-support">
                        <div className="title">
                            <div className="title-content">
                                <h5 className="white-text">Dashboard</h5>
                            </div>
                        </div>
                        <div className="support-content">
                            <div className="support-control">
                                <div className="search">
                                    <div className="search-icon">
                                        <img className="icon" href="" src="/assets/ico-search.png" alt="logo" />
                                    </div>
                                    <div className="search-title">
                                        <h6 className="white-text">Search</h6>
                                    </div>
                                </div>
                                <div className="delivery">
                                    <div className="delivery-title">
                                        <h6 className="white-text">+New Delivery</h6>
                                    </div>
                                </div>
                                <div className="delivery">
                                    <div className="delivery-title">
                                        <h6 className="white-text">+New Patient</h6>
                                    </div>
                                </div>
                                <div className="logout">
                                    <div className="bnt-logout">
                                        <a className="waves-effect waves-light red-text text-darken-4" onClick={this.onLogoutFirebase}>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-body">
                    <TaskReminder/>
                    </div>
                    <div className="dashboard-footer">
                        <div className="copy-right">
                            <span className="copy-right-content">© 2017 Lindenwood Health, Inc</span>
                        </div>
                        <div className="contact">
                            <span className="contact-content">Contact Support</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
  }
const mapDispatchToProps = (dispatch, props) => {
    return {
      onSignoutReminder: () => {
        dispatch(actions.signoutReminder());
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
