import React, { Component } from 'react';

class DinnerSupplies extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h2>Dinner Supplies</h2>
                <div>
                    Spoons: {this.props.count * 2}
                </div>
                <div>
                    Forks: {this.props.count * 2}
                </div>
                <div>
                    Knives: {this.props.count * 2}
                </div>
            </div>
        );
    }
}
 
export default DinnerSupplies;