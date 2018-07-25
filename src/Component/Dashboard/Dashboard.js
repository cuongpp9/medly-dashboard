import React, { Component } from 'react';
import '../../CSS/Dashboard.css';

class Dashboard extends Component {
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
                                <h6 className="user-name-content">Darth Vader</h6>
                            </div>
                            <div className="mail">
                                <h6 className="mail-content">cuongpp000000@gmail.com</h6>
                            </div>
                            <div className="role">
                                <h6 className="role-content">(Admin)</h6>
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
                                        <img className="icon" alt="icon" src="/assets/ico-search.png" />&nbsp;
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
                        <div className="asdasdt">
                            <h6 className="white-text">Dashboard</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
