import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Button from '../components/button'
import Status from '../components/status'
import Footer from '../components/footer'
import Header from '../components/header'

const team = 'corsi.it'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {tot: 0}
    this.update = this.update.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  async update () {
    const res = await fetch(`http://localhost:8888/${team}`)
    const status = await res.json()
    this.refs.footer.update(status)
    this.refs.bad.update(status)
    this.refs.meh.update(status)
    this.refs.great.update(status)
    this.setState({ tot: status.tot })
  }

  async handleClick (what) { fetch(`http://localhost:8888/${team}/${what}`,{method: 'put'}) }

  componentDidMount () {
    this.update()
    setInterval(this.update, 750)
  }

  render () {
    return (
    <div>
      <Head>
        <title>Team Health</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic' />
        <link rel='stylesheet' href='//cdn.rawgit.com/necolas/normalize.css/master/normalize.css' />
        <link rel='stylesheet' href='//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css' />
      </Head>
      <Header />
      <div className='container' style={{paddingTop: '5%'}}>
        <div className='row'>
          <div className='column'>
            <Button ref={'bad'} icon='bad' onClick={this.handleClick} />
          </div>
          <div className='column'>
            <Button ref={'meh'} icon='meh' onClick={this.handleClick} />
          </div>
          <div className='column'>
            <Button ref={'great'} icon='great' onClick={this.handleClick} />
          </div>
        </div>
        <div style={{ height: 100 }}> </div>
        <Footer ref={'footer'} />
      </div>
    </div>
    )
  }
}