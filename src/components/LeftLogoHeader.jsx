import React, { Component } from 'react';

class LeftLogoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { leftLogo } = this.props;
        return (
            <div>
                <img src={leftLogo} className="headerLeftLogo" alt=""/>
            </div>
        );
    }
}

export default LeftLogoHeader;
