var express = require('express');
var URL = require('url');
var mysql = require('mysql');  // 使用mysql模块
var router = express.Router();

// 创建连接
var connection = mysql.createConnection({
    host: '94.191.14.80',
    user: 'root',
    password: 'abc123456',
    database: 'RUNOOB'
})

connection.connect();

// SQL语句
var sql = 'SELECT * FROM runoob_tb1';

router.get('/query', function(req, res, next) {
    // 解析请求参数
    var params = URL.parse(req.url, true).query;

    connection.query(sql, function(err, result) {
        if(err) {
            console.log('[SELECT ERROR] -', err.message);
            return ;
        }

        console.log(params);
        res.send(result);
    })
})

module.exports = router;
