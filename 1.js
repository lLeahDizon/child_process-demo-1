const child_process = require('child_process')
const {spawn} = child_process

const userInput = '.'

const streams = spawn('ls', ['-la', userInput], {
  cwd: '/users/apple',
  env: {NODE_ENV: 'development'}
})

streams.stdout.on('data', (chunk) => {
  console.log(chunk.toString())
})
