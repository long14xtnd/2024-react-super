import React from 'react'
//Function component
// function Welcome(props) {
//   return <h1>Welcome to React {props.name} </h1>
// }

//Class component
class Welcome extends React.Component {
  render() {
    console.log(this.props)
    return (
      <h1>
        Hello {this.props.name} - age: {this.props.age}{' '}
      </h1>
    )
  }
}
export default Welcome
