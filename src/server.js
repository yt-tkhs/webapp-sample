import Express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = Express()

// client.js を読み込むための設定 (環境変数のようなもの)
app.use(Express.static('public'))

app.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(
    <div>
      <div id="app"/>
      <script src="client.js"/>
    </div>
  ))
})

app.listen(3000, () => {
  console.log('listening on port 3000!')
})