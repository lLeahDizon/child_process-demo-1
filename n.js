const child_process = require('child_process')

var n = child_process.fork('./child.js')
n.on('message', function (m) {
  console.log('父进程得到值', m)
})
n.send({hello: 'world'})
