import React from 'react'

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = { percent: 0 }
    this.update = this.update.bind(this)
  }

  update (status) {
    let percent = 0
    switch (this.props.what) {
      case 'bad': percent = status.badPercent; break
      case 'meh': percent = status.mehPercent; break
      default: percent = status.greatPercent;
    }
    this.setState({ percent })
    return percent
  }

  render () {
    const percent = this.state.percent
    return (
      <div>
        <h3><strong>{this.state.percent} %</strong></h3>
        <div className='bar'>
          <p style={{width: `${this.state.percent * 1.6}px`}}></p>
          <style jsx>{`
            .bar {
              width: 164px;
              border: 5px solid #000;
              margin: 0 auto;
              padding: 0;
              border-radius: 30px;
            }
            .bar > p {
              background-color: #FFDD67;
              color: #000;
              text-align: center;
              height: 10px;
              margin: 2px;
              border-radius: 30px;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
