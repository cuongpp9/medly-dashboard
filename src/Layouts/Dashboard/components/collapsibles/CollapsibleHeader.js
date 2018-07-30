import React, { Component } from 'react';

class CollapsibleHeader extends Component {

  render() {
    return (
          <div className="collapsible-header">
            <i className="material-icons">{this.props.iconName}</i>
            {this.props.Title}
        </div>
    );
  }
}

export default CollapsibleHeader;
