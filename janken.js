var clientUchite;
var serverUchite;

// クライアントからのpostを受け取って、そのまま返す（テストのために作成）
exports.clientUchiteGenerator = function clientUchiteGenerator(c) {
    return clientUchite = c;
}

// サーバ側の打ち手をランダムに決定
exports.serverUchiteGenerator = function serverUchiteGenerator() {
    // 乱数を発生させる
    return serverUchite = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

// じゃんけんのアルゴリズム部分（勝敗を決定してresultを返す）
// c = クライアントの打ち手、 s = サーバの打ち手
exports.janken = function janken(c, s) {

    clientUchite = c;
    serverUchite = s;

    // アルゴリズム
    if ((clientUchite === 0 && serverUchite === 1) || (clientUchite === 1 && serverUchite === 2) || (clientUchite === 2 && serverUchite === 0)) {
        result = "君の勝ちだ！";
    }
    else if ((clientUchite === 1 && serverUchite === 0) || (clientUchite === 2 && serverUchite === 1) || (clientUchite === 0 && serverUchite === 2)) {
        result = "君の負けだ！";
    }
    else if (clientUchite === serverUchite) {
        result = "引き分けだ！";
    }
    return result;
}

// テストのための仕掛け
// テスト時に任意のc = クライアントの打ち手、 s = サーバの打ち手を引数にすることができる
exports.test = function test(c, s) {
    var jk = require("./janken.js")

    // 引数を変数に代入
    var tempoCU = c;
    var tempoSU = s;

    // test()から、janken(){}を呼び出し
    var result = jk.janken(tempoCU, tempoSU);

    return result;
}