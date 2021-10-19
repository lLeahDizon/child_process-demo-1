setTimeout(() => {
  process.send({foo: 'bar'})
}, 2000)
process.on('message', (data) => {
  console.log('子进程得到值')
  console.log(data)
})
