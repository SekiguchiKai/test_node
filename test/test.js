// webServer.jsのテストをBDDで行う

// assertアサーションを利用できるようにする
var chai = require('chai');
var assert = chai.assert;

// webServer.jsをmoduleとして使用するために
var jk = require('../src/janken.js');


// describe()は、複数のテストケースをまとめるためのもの
describe('じゃんけんアルゴリズム', function () {
    // 事前に行う処理

    it('「クライアント:グー、サーバ:チョキ」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.judgeResultTest(0, 1), "君の勝ちだ！");
    });

    it('クライアント:チョキ、サーバ:パー」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.judgeResultTest(1, 2), "君の勝ちだ！");
    });

    it('クライアント:パー、サーバ:グー」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.judgeResultTest(2, 0), "君の勝ちだ！");
    });

    it('クライアント:チョキ、サーバ:グー」の場合は、サーバの勝ち', function () {
        assert.equal(jk.judgeResultTest(1, 0), "君の負けだ！");
    });

    it('クライアント:パー、サーバ:チョキ」の場合は、サーバの勝ち', function () {
        assert.equal(jk.judgeResultTest(2, 1), "君の負けだ！");
    });

    it('クライアント:グー、サーバ:パー」の場合は、サーバの勝ち', function () {
        assert.equal(jk.judgeResultTest(0, 2), "君の負けだ！");
    });

    it('クライアント:グー、サーバ:グー」の場合は、引き分け', function () {
        assert.equal(jk.judgeResultTest(0, 0), "引き分けだ！");
    });

    it('クライアント:チョキ、サーバ:チョキ」の場合は、引き分け', function () {
        assert.equal(jk.judgeResultTest(1, 1), "引き分けだ！");
    });

    it('クライアント:パー、サーバ:パー」の場合は、引き分け', function () {
        assert.equal(jk.judgeResultTest(2, 2), "引き分けだ！");
    });

    it('クライアントをグー固定で1000回対戦してみて、勝ち・負け・引き分け のそれぞれが最低1回以上発生するかというテスト', function () {
        // クロームでのデバッグのために、timeoutの期限を伸ばす
        this.timeout(999999999999);
        // var resultArray = new Array(1000);
        var resultArray = [];
        for (var i = 0; i < 1001; i++) {
            // クライアントの引数をグーで固定し、janken()を1000回呼び出し
            resultArray.push(jk.judgeResultTest(0));
        }
        // テストで、janken.jsのjdugeResult関数に処理させて返ってきた結果が正しいかどうかを判断するための関数を格納したオブジェクト
        var judgeAdequacy = {
            returnAdequency: function (result) {
                // judgeResultTest関数を使用して、テストした勝負の結果を格納する配列
                var resultArray = result;
                // テスト結果が適切かどうかを判断した結果を格納する変数
                var resultAdequacy = "";

                // janken.jsのjdugeResult関数に1000回処理させた結果を格納したresultArrayにテストとして正しい値が格納されているか判断
                if ((resultArray.indexOf("君の勝ちだ！") >= 0) && (resultArray.indexOf("君の負けだ！") >= 0) && (resultArray.indexOf("引き分けだ！") >= 0)) {
                    resultAdequacy = "合格";
                } else {
                    resultAdequacy = "不合格";
                }
                return resultAdequacy;
            }

        }
        assert.equal(judgeAdequacy.returnAdequency(resultArray), "合格");
    });

});