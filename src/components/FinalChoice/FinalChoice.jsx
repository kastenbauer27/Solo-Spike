import React, { Component } from 'react';
import { connect } from 'react-redux';

class FinalChoice extends Component {
    state = {  }
    render() { 
        return ( 
            <p>Final Choice is: {this.props.reduxState}</p>
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default connect(mapStateToProps)(FinalChoice);