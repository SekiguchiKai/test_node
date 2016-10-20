
// webServer.jsのテストをBDDで行う

// assertアサーションを利用できるようにする
var chai = require('chai');
var assert = chai.assert;


// webServer.jsをmoduleとして使用するために
var jk = require('../janken.js');


// describe()は、複数のテストケースをまとめるためのもの
describe('じゃんけんアルゴリズム', function () {
    // 事前に行う処理

    it('「クライアント:グー、サーバ:チョキ」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.test(0, 1), "君の勝ちだ！");
    });

    it('クライアント:チョキ、サーバ:パー」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.test(1, 2), "君の勝ちだ！");
    });

    it('クライアント:パー、サーバ:グー」の場合は、クライアントの勝ち', function () {
        assert.equal(jk.test(2, 0), "君の勝ちだ！");
    });

    it('クライアント:チョキ、サーバ:グー」の場合は、サーバの勝ち', function () {
        assert.equal(jk.test(1, 0), "君の負けだ！");
    });

    it('クライアント:パー、サーバ:チョキ」の場合は、サーバの勝ち', function () {
        assert.equal(jk.test(2, 1), "君の負けだ！");
    });

    it('クライアント:グー、サーバ:パー」の場合は、サーバの勝ち', function () {
        assert.equal(jk.test(0, 2), "君の負けだ！");
    });

    it('クライアント:グー、サーバ:グー」の場合は、引き分け', function () {
        assert.equal(jk.test(0, 0), "引き分けだ！");
    });

    it('クライアント:チョキ、サーバ:チョキ」の場合は、引き分け', function () {
        assert.equal(jk.test(1, 1), "引き分けだ！");
    });

    it('クライアント:パー、サーバ:パー」の場合は、引き分け', function () {
        assert.equal(jk.test(2, 2), "引き分けだ！");
    });

    it('クライアントをグー固定で1000回対戦してみて、勝ち・負け・引き分け のそれぞれが最低1回以上発生するかというテスト', function () {
        // var resultArray = new Array(1000);
        for (var i; i < 1001; i++) {
            // クライアントの引数をグーで固定し、janken()を1000回呼び出し
            assert.equal(jk.test(0), resultArray.indexOf("君の勝ちだ！") != 0 && resultArray.indexOf("引き分けだ！" != 0) && resultArray.indexOf("君の負けだ！") != 0);
        }

    });

});
