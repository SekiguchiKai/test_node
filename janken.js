// じゃんけんのアルゴリズム部分（勝敗を決定してresultを返す）
/*c = クライアントの打ち手、 s = サーバの打ち手（デフォルト値）
cは、クライアントから送られてくる、sは、デフォルト値を使うこととし、テストの場合のみ変数を与える
*/
exports.janken = function janken(c, s = Math.floor(Math.random() * (2 - 0 + 1)) + 0) {

    //クライアントの打ち手に引数を代入
    var clientUchite = c;

    //サーバの打ち手を代入に引数を代入
    var serverUchite = s;

    //じゃんけんの結果を格納する変数を宣言
    var result;


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

    console.log(result);
    return result;
}
//確認のため一時的に
var jk = require("./janken.js")
jk.janken();



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


exports.test2 = function test2(s) {
    var jk = require("./janken.js")
    //グーで固定
    var tempoCU = 0;
    var tempoSU = s;

    var resultArray = new Array(1000);
    for (var i; i < 1001; i++) {
        // test()から、janken(){}を呼び出し
        var resultArray = jk.janken(tempoCU, tempoSU);
    }

    var result;
    if (resultArray.indexOf("君の勝ちだ！") != 0 && resultArray.indexOf("引き分けだ！" != 0) && resultArray.indexOf("君の負けだ！") != 0) {
        result = "合格";
    } else {
        result = "不合格";
    }

    return result;

}