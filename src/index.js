const express = require('express')
const childProcess = require("child_process");


const app = express()
app.get('*', (req, res) => {
    res.end(`<html><body>
    <div>hello ssr</div>
    </body></html>`)
})

app.listen(3000, () => {
    console.log('ssr server 3000...')
})

childProcess.exec("start http://127.0.0.1:3000");
