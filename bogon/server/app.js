var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// 路由信息，存放routes目录
var index = require('./routes/index');

// 模板


// 载入中间件
app.use(express.static(path.join(__dirname, 'pulic')));  // 使用静态文件

// 配置路由
app.get('/', function(req, res) {
    res.send('Hello Express');
})
app.use('/query', index);

// 错误处理
app.use(function(err, req, res, next) {
    console.log(err);
})

// 运行服务
app.listen(3000, function() {
    console.log('Serving is listening at port: %s', port);
})