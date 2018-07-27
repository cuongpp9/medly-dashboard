import React, { Component } from 'react';

class CollapsibleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDeliveries: false,
      toggleTransfers: false,
      togglePatints: false,
      key: 0,
    }
  }
  handleOnChange(number) {
    if (number === 1) {
      this.setState({
        toggleIcon: !this.state.toggleIcon,
        toggleTransfers: false,
        togglePatints: false,
        key: number
      });
    }
    if (number === 2) {
      this.setState({
        toggleIcon: false,
        toggleTransfers: !this.state.toggleTransfers,
        togglePatints: false,
        key: number
      });
    }
    if (number === 3) {
      this.setState({
        toggleIcon: false,
        toggleTransfers: false,
        togglePatints: !this.state.togglePatints,
        key: number
      });
    }
    if (number === 0) {
      this.setState({
        toggleIcon: false,
        toggleTransfers: false,
        togglePatints: false,
        key: number
      });
    }
  }
  render() {
    return (
      <div>
        <ul className="collapsible">
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">dashboard</i>Dashboard
              </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(1)}>
              <i className="material-icons">directions_car</i>
              Deliveries
                <i className="material-icons menu-deliver">
                {this.state.toggleIcon === true && this.state.key === 1 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 1
                </div>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 2
                </div>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 3
                </div>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 4
          </div>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 5
          </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">laptop_mac</i>Micro Marchant
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(2)}>
              <i className="material-icons">compare_arrows</i>
              Rx Transfers
          <i className="material-icons menu-transfers">
                {this.state.toggleTransfers === true && this.state.key === 2 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 1
          </div>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">fast_forward</i>Item 2
          </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(3)}>
              <i className="material-icons">face</i>
              Patients
          <i className="material-icons menu-Patients">
                {this.state.togglePatints === true && this.state.key === 3 ?
                  'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
            </div>
            <div className="collapsible-body">
              <div className="collapsible-header">
                <i className="material-icons">filter_frames</i>Item
          </div>
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">local_drink</i>Medications
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">business</i>Pharmacies
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">view_list</i>Sig Codes
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">notifications</i>Alerts
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">verified_user</i>Prior Authorization
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">people</i>User Signups
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">people_outline</i>Users and Roles
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">settings</i>Setting
            </div>
          </li>
          <li>
            <div className="collapsible-header" onClick={() => this.handleOnChange(0)}>
              <i className="material-icons">highlight_off</i>Logout
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollapsibleMenu;
