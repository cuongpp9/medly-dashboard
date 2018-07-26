import React, { Component } from 'react';
import '../../CSS/Dashboard.css';
// import { CollapsibleItem, Collapsible, Collection, CollectionItem, Icon } from 'react-materialize';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
          toggleIcon: false,
          key: 0,
        }
      }

      handleOnChange (number){
        this.setState({
            toggleIcon : !this.state.toggleIcon,
            key: number
        });
    }

    render() {
        return (
            <div className="dashboard-layout">
                <div className="control">
                    <div className="profile">
                        <div className="profile-icon">
                            <div className="iconMedly">
                                <img className="icon" alt="iconMedly" src="/assets/icon_title.png" />
                            </div>
                        </div>
                        <div className="user-info">
                            <div className="user-name">
                                <span className="user-name-content">Darth Vader</span>
                            </div>
                            <div className="mail">
                                <span className="mail-content">cuongpp000000@gmail.com</span>
                            </div>
                            <div className="role">
                                <span className="role-content">(Admin)</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-control">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header"><i className="material-icons">dashboard</i>Dashboard</div>
                            </li>
                            <li>
                                <div className="collapsible-header" onClick={()=>this.handleOnChange(1)}>
                                    <i className="material-icons">directions_car</i>
                                    Deliveries
                                <i className="material-icons menu-deliver">
                                {this.state.toggleIcon === true && this.state.key ===1?
                                     'keyboard_arrow_down':'keyboard_arrow_right'}</i>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item 1
                                </div>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item 2
                                </div>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item 3
                                </div>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item 4
                                </div>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item 5
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">laptop_mac</i>Micro Marchant</div>
                            </li>
                            <li>
                                <div className="collapsible-header" onClick={()=>this.handleOnChange(2)}>
                                    <i className="material-icons">swap_horiz</i>
                                    Rx Transfers
                                <i className="material-icons menu-transfers">{this.state.toggleIcon === true && this.state.key ===2?
                                     'keyboard_arrow_down':'keyboard_arrow_right'}</i>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header" onClick={()=>this.handleOnChange(3)}>
                                    <i className="material-icons">face</i>
                                    Patients
                                <i className="material-icons menu-Patients">{this.state.toggleIcon === true && this.state.key ===3?
                                     'keyboard_arrow_down':'keyboard_arrow_right'}</i>
                                </div>
                                <div className="collapsible-body"><div className="collapsible-header">
                                    <i className="material-icons">filter_frames</i>Item
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">local_drink</i>Medications</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">business</i>Pharmacies</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">view_list</i>Sig Codes</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">notifications</i>Alerts</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">verified_user</i>Prior Authorization</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">people</i>User Signups</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">people_outline</i>Users and Roles</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">settings</i>Setting</div>
                            </li>
                            <li>
                                <div className="collapsible-header"><i className="material-icons">highlight_off</i>Logout</div>
                            </li>
                        </ul>
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
                                    <img className="icon" src="/assets/ico-search.png" alt="logo"/>
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
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-body">
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

export default Dashboard;
