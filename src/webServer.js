// クライアントからのレスポンスを受け取り、適切なファイルに処理を依頼する

var http = require('http');
var url = require('url');
var server = http.createServer();
var qs = require('querystring');
var path = require("path");

// janken.jsを呼び出すためにrequire
var jk = require("./janken.js");
// responseGenerater.jsを呼び出すためにrequire
var rG = require("./responseGenerater.js");
// ejsResponser.jsを呼び出すためにrequire
var ejR = require("./ejsResponser.js");

var stContents;


// http.createServerがrequestされたら、
exports.webserver = server.on('request', function (req, res) {
    // ①parseHttpMethodを呼び出す
    parseHttpMethod(req, res);

    // ①HTTPのクライアントからびリクエストのメソッドの解析を行う関数
    function parseHttpMethod(req, res) {
        // POSTのクライアント打ち手を格納するための変数

        // GETかPOSTか調べ、POSTの場合はそのボディを変数に格納する
        if (req.method == 'GET') {
            // URLを解析して、URLデーコディングする　（GETはURLでパラメータが来るので）
            var urlParts = url.parse(req.url, true);
            console.log(urlParts.query);
        } else if (req.method == 'POST') {
            // POSTリクエストのボディを格納する (POSTはリクエストのボディにパラメータが格納されるから)
            // POSTリクエストのボディを格納するための変数を宣言する
            var body = '';
            // リクエストが来たら、そのパラメータをボディ(body)に格納する
            req.on('data', function (data) {
                body += data;
            });
            // リクエストが終了したら、コールバック関数（）を呼び出し
            req.on('end', function () {
                // body（クエリ）をパース
                var POST = qs.parse(body);
                console.log(POST);

                stContents = parseInt(POST.C_uchite);
                // オブジェクトの値（ここでいうpostの値を取り出す。ここには、クライアントの打ち手が入っている）
                console.log(stContents + 'POSTのリクエストが届きました');
                return stContents;

            });
    
        };
        
    };
    console.log("①のstContentsは" + stContents);

    // ②Handleを呼び出す
    Handle(req, res, stContents);


    // ②urlを解析し、ハンドラを呼び出す関数
    function Handle(req, res, stContents) {
        // stContentsを確認
        console.log("stContents" + stContents);
        // urlのpathをuriに代入
        var uri = url.parse(req.url).pathname;
        // cwd()：カレントディレクトリ、uri：path
        var filename = path.join(process.cwd(), uri);

        // URIで行う処理を分岐させる
        if (uri === "/") {
            // responseGenerater.jsのhtmlGeneratorを呼び出す
            // メモ：index.HTMLなど具体的なファイルはこちらから呼び出す
            // responseGenerater.jsでは、一般的な操作だけを定義し、同じような処理を繰り返させない
            rG.responseGenerator(res, './template/index.html', 'text/html'); // res, resource, content_Type
        } else if (uri === "/calcprocess") {
            // janken.jsのjudgeResultを呼び出し、その戻り値を格納

            // stContentsを実験的に表示
            console.log(stContents + '確認用');
            // judgeResultの戻り値（result, clientUchite, serverUchite)を全て格納するオブジェクトを格納するオブジェクトを宣言
            var allResultObj = jk.judgeResult(stContents);

            console.log("alljudgeResultArray" + allResultObj);

            // responseGenerater.jsにじゃんけんの結果を渡して、結果を反映させたHTMLを返してもらう
            ejR.ejsResponser(res, './template/result.ejs', 'text/html', allResultObj)

        }
    }

});

// 指定されたポート(8080)でコネクションの受け入れを開始する
server.listen(8080)
console.log('Server running at http://localhost:8080/');