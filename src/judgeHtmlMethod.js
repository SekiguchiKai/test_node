// HTTPのメソッド(GETかPOST)によって行なう操作を区別する
// webServer.jsからURLのパスに応じて呼ばれる

// GETかPOSTか調べ、POSTの場合はそのボディを変数に格納する
var url = require('url');
var qs = require('querystring');

var http = require('http');
var url = require('url');
var server = http.createServer();
var path = require("path");



exports.GET = function GET(req, res) {
    // URLを解析して、URLデーコディングする　（GETはURLでパラメータが来るので）
    var urlParts = url.parse(req.url, true);
    console.log(urlParts.query);
    return;

};

exports.POST = function POST(req, res) {
    var postConntents;

    console.log("POSTメソッドが呼ばれたよ");

    // POSTリクエストのボディを格納する (POSTはリクエストのボディにパラメータが格納されるから)
    // POSTリクエストのボディを格納するための変数を宣言する
    var body = '';
    // リクエストが来たら、そのパラメータをボディ(body)に格納する
    req.on('data', function (data) {
        body += data;
        console.log("bodyは" + body);
    });
    // リクエストが終了したら、コールバック関数（）を呼び出し
    req.on('end', function () {
        // body（クエリ）をパース
        postConntents = qs.parse(body);
        console.log("postConntentsの値は" + postConntents);

        // stContents = parseInt(POST.C_uchite);
        // オブジェクトの値（ここでいうpostの値を取り出す。ここには、クライアントの打ち手が入っている）
        console.log(postConntents + 'POSTのリクエストが届きました');
        
    });

    return postConntents;
};




