import React from 'react'
import { connect } from 'react-redux'

class home extends React.Component {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}


const mapStateToProps = (state) => {
    return { 
      title: state.homepage.title 
    }
}

export default connect(mapStateToProps)(home)