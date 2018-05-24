import React from 'react'
import { connect } from 'react-redux'

class AboutUs extends React.Component {
    render(){
        return (
            <div>{this.props.title}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      title: state.aboutUs.title 
    }
}

export default connect(mapStateToProps)(AboutUs)