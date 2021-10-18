const child_process = require('child_process')
const {execFile} = child_process

const userInput = '.'

const streams = execFile('ls', ['-la', userInput], {
  cwd: '', // 设置运行目录
  env: {NODE_ENV: 'development'},  // 设置 node 运行的环境
  shell: '', // 配置使用的命令
  maxBuffer: 1024 * 1024, // 最大内存
}, (error, stdout) => {
  console.log(error)
  console.log(stdout)
})
