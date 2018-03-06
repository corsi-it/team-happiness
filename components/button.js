import React from 'react'
import fetch from 'isomorphic-fetch'
import Status from './status'

export default class Button extends React.Component {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
  }
  
  update (status) {
    this.refs.st.update(status)
  }

  render () {
    return (
      <div className='mainCont'>
        <div className='btnBox'>
          <img
          src={`/static/${this.props.icon}.svg`}
          alt={this.props.icon}
          onClick={() => this.props.onClick(this.props.icon)}
          />
        </div>
        <Status ref={'st'} what={this.props.icon} />
      <style jsx>{`
      .mainCont {
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        min-height: 160px;
        width: 160px;
      }
      .btnBox {
        height: 160px;
        width: 160px;
        text-align: center;
        position: relative;
      }
      img {
        height: 150px;
        width: 150px;
        cursor: pointer;
        border-radius: 50%;
        border: 0px solid #000;
        position: absolute;
        left: 0;
      }
      img:hover {
        height: 160px;
        width: 160px;
        animation-name: select;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      img:active {
        animation-name: winkle;
        animation-duration: 100ms;
        animation-iteration-count: infinite;
      }
      @keyframes winkle {
        0% {left: 0;}
        50% {left: 20px;}
        100% {left: 0;}
      }
      @keyframes select {
        0% {
          height: 150px;
          width: 150px;
          transform: rotate(0);
        }
        30% {
          transform: rotate(3deg);
        }
        50% {
          height: 155px;
          width: 155px;
          transform: rotate(0);
        }
        80% {
          transform: rotate(-3deg);
        }
        100% {
          height: 150px;
          width: 150px;
          transform: rotate(0);
        }
      }
      `}</style>
      </div>
    )
  }
}