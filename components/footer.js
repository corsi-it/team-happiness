import React from 'react'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {status: {
      bad: 0,
      meh: 0,
      great: 0,
      badPercent: 0,
      mehPercent: 0,
      greatPercent: 0,
      tot: 0
    }}
    this.update = this.update.bind(this)
  }
  update (status) {
    this.setState({status})
  }
  render () {
    return (
      <footer>
        <style jsx>{`
          footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px;
            margin: 0;
            padding: 4px 0 4px 0;
            background: #F27C21;
          } 
          footer > p {
            font-size: 12px;
            line-height: 12px;
          } 
        `}</style>
        <p>&copy; <a href='http://matteomerola.me' target='blank'>Matteo Merola</a> 2017 - {this.state.status.tot} hits and counting...</p>
      </footer>
    )
  }
}