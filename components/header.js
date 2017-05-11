import React from 'react'

export default () => (
  <header>
    <div className='top'> </div>
    <div className='title'>
      <h1 style={{color: 'black'}}>Team health</h1>
    </div>
    <style jsx>{`
      header {
        background: #F9A11F;
        position: relative;
        height: 200px;
      }
      .top {
        background: #FCD837;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100px;
      }
      .title {
        background: #fff;
        margin: 0 auto;
        height: 100px;
        width: 50%;
        position: absolute;
        top: 50px;
        left: 25%;
        border-radius: 50px;
      }
      .title h1 {
        line-height: 100px;
        font-weight: bold;
        white-space: nowrap; overflow: hidden;
        text-transform: uppercase;
      }
    `}</style>
  </header>
)