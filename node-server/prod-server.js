/**
 * Created by Administrator on 2017/12/7 0007.
 */

var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var open = require('opn');


var app = express();
var port = 8181;


app.use('/yzlpms', proxy({ target: 'http://dev.inzlink.com', changeOrigin: true }));

app.use(express.static('./'))
// const staticDest = path.join(__dirname, '../xui/html/')  // ok
// const staticDest = path.join(path.normalize('G:\demo\node\xui\html'))  // not ok
// const staticDest = path.join(path.normalize('G:\demo\node\\xui\html'))  // not ok
// const staticDest = path.join(path.normalize('G:\\demo\\node\\xui\\html')) // ok
const staticDest = path.join(path.normalize('G:/demo/node/xui/html')) // ok
app.use(express.static(staticDest))

app.listen(port, function () {
  console.log('服务器启动完成....');
  var uri = 'http://localhost:' + port + '/boyuan/shzb/index.html';
  open(uri);
});