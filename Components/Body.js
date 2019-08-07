import React, { Component } from 'react';
import api from '../Utils/apiUtils'

class Body extends Component {
  componentDidMount(){
    const meds = api.getDailyMeds(1),
    this.setState({meds})
  }

  state = { meds: []}

  render() {
    const {meds} = this.state
    return (
      <MedScreen meds={meds}/>
    );
  }
}

export default Body;