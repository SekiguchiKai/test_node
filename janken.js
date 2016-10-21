// じゃんけんのアルゴリズム部分（勝敗を決定してresultを返す）
/*c = クライアントの打ち手、 s = サーバの打ち手（デフォルト値）
cは、クライアントから送られてくる、sは、デフォルト値を使うこととし、テストの場合のみ変数を与える
*/

//クライアントとサーバのじゃんけんの結果を判定する関数
exports.judgeResult = function judgeResult(c = 1, s = Math.floor(Math.random() * (2 - 0 + 1)) + 0) {

    // クライアントの打ち手に引数を代入
    var clientUchite = c;

    // サーバの打ち手を代入に引数を代入
    var serverUchite = s;

    // じゃんけんの結果を格納する変数を宣言
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


// テストのための仕掛け
// テスト時に任意のc = クライアントの打ち手、 s = サーバの打ち手を引数にすることができる
exports.judgeResultTest = function judgeResultTest(c, s = Math.floor(Math.random() * (2 - 0 + 1)) + 0) {
    var jk = require("./janken.js")

    // 配列結果を格納する配列を作成
    var resultArray;

    // じゃんけんの結果をresultArray（配列）に代入
    resultArray = (jk.judgeResult(c, s));

    return resultArray;

}





