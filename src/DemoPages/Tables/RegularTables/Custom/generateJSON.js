import React, { Component } from 'react'

class GenerateJSON extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estados: [],
      isLoading: false,
      isError: false
    }
  }

async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('http://d1b2de7b75f3.ngrok.io/turistas/get-llegada-turistas-from-year')
    if (response.ok) {
      const estados = await response.json()
      this.setState({ estados, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }
  render() {
    const { estados, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return estados.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }
  renderTableHeader = () => {
    return Object.keys(this.state.estados[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }
  renderTableRows = () => {
    return this.state.estados.map(estados => {
      return (
        <tr key={estados._id}>
          <td>{estados._id}</td>
          <td>{estados.Año}</td>
          <td>{estados.Municipio}</td>
          <td>{estados.Region}</td>
     
        </tr>
      )
    })
  }}
  export default GenerateJSON;