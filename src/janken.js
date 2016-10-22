// じゃんけんのアルゴリズム部分（勝敗を決定してresultを返す）
/*c = クライアントの打ち手、 s = サーバの打ち手（デフォルト値）
cは、クライアントから送られてくる、sは、デフォルト値を使うこととし、テストの場合のみ変数を与える
*/

// クライアントとサーバのじゃんけんの結果を判定する関数
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

    // 表示のための処理
                // クライアント
                switch (clientUchite) {
                    case 0:
                        clientUchite = "グー"
                        break;
                    case 1:
                        clientUchite = "チョキ"
                        break;
                    case 2:
                        clientUchite = "パー"
                        break;
                }

                // 表示のための処理
                // サーバ
                switch (serverUchite) {
                    case 0:
                        serverUchite = "グー"
                        break;
                    case 1:
                        serverUchite = "チョキ"
                        break;
                    case 2:
                        serverUchite = "パー"
                        break;
                }

    console.log(result, clientUchite, serverUchite);
    return result, clientUchite, serverUchite;
}


// テストのための仕掛け
// テスト時に任意のc = クライアントの打ち手、 s = サーバの打ち手を引数にすることができる
exports.judgeResultTest = function judgeResultTest(c, s = Math.floor(Math.random() * (2 - 0 + 1)) + 0) {
    var jk = require("./janken.js")

    // 結果を格納する変数を作成
    var resultArray; //　名前変えること

    // じゃんけんの結果をresultArray（配列）に代入
    resultArray = (jk.judgeResult(c, s));

    return resultArray;

}
