import React, { Component, PropTypes } from 'react'
import { Provider , connect } from 'react-redux'
import action from '../action/index'

class Counter extends Component {
    render () {
        const { value , onInClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onInClick}>click</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onInClick: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        onInClick: () =>  dispatch(action)
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Counter)