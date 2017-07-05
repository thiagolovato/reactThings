import React from 'react';
import FontAwesome from 'react-fontawesome';

class Loading extends React.Component {

    render() {
        return (
            <FontAwesome name='spinner'
                spin={true}
                size={this.props.size ? this.props.size : '3x'} />
        )
    }
}

export default Loading;