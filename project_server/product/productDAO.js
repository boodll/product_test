//데이터베이스와 상호작용
const getPool = require("../common/pool");

const sql = {
    productList: "select * from product",

    buy: "update product set auction_status = '판매완료' where product_id = ?",

    detail: "select * from product where product_id = ?", //read
    update:
        "update product set master_price =?, content = ? where product_id = ?", //update
    bidding:
        "insert into product (auction_id, product_id, email, auction_price, picture, product_status, createAt) values (?,?,?,?,?,?,?)", //create
    biddingTable:
        "insert into auction (email, auction_price, product_status) values (?, ?, ?)",
    // create 입찰보드에서 입력한 내용이 상세페이지 내부에 있는 테이블에 들어가게끔 하려면... 일단 update가 아니라 insert??
    // biddingTable:
    //   "update auction set email =?, auction_price =?, product_status =? ", //update
};

const productDAO = {

    productList: async (callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()
            const [resp] = await conn.query(sql.productList, [])
            callback({ status: 200, message: 'OK', data: resp })
        } catch (error) {
            return { status: 500, message: '조회 실패', error: error }
        } finally {
            if (conn !== null) conn.release()
        }
    },


    buy: async (item, callback) => {
        let conn = null;
        try {
            conn = await getPool().getConnection();
            // auction 테이블에 구매 정보 기록 하나씩 전부 받아야 하는건가..? 빈 배열은?
            // 'product' 테이블의 상태 업데이트
            await conn.query(sql.buy, [item.email, item.product_id]);
            // 콜백으로 성공 응답 전송
            callback(null, { status: 200, message: "구매 신청 완료" });
        } catch (error) {
            // 오류 발생시 처리
            callback(error, { status: 500, message: '구매 실패', error: error });
        } finally {
            // 연결 종료
            if (conn) conn.release();
        }
    },



    // 구매 항목 객체
    // let itemToBuy = {
    //     buy: '항목ID'  예시 항목 ID
    // };

    // `buy` 함수 호출
    // this.buy(itemToBuy, (response) => {
    //     if (response.status === 200) {
    //         성공 시 알림
    //         alert("구매등록완료");
    //     } else {
    //         실패 시 오류 메시지 표시
    //         alert("구매 등록 실패: " + response.message);
    //     }
    // });


    detail: async (item, callback) => {
        //item 매개변수로 조회하고자 하는 상품의 정보가 담긴 객체를 받음
        let conn = null;
        try {
            conn = await getPool().getConnection();
            const [resp] = await conn.query(sql.detail, [item.product_id]); //바인딩할 변수가 필요 sql 쿼리에서 사용하는 ?자리를 채워놓음
            callback({ status: 200, message: "ok", data: resp });
        } catch (error) {
            return { status: 500, message: "디테일 불러들이기 실패", error: error };
        } finally {
            if (conn !== null) conn.release();
        }
    },

    bidding: async (item, callback) => {
        let conn = null;
        try {
            conn = await getPool().getConnection();
            const [resp] = await conn.query(sql.bidding, [
                item.auction_id,
                item.product_id,
                item.email,
                item.auction_price,
                item.picture,
                item.product_status,
                item.createAt,
            ]);
            callback({ status: 200, message: "ok", data: resp });
        } catch (error) {
            return { status: 500, message: "입찰 실패", error: error };
        } finally {
            if (conn !== null) conn.release();
        }
    },

    biddingTable: async (item, callback) => {
        let conn = null;
        try {
            conn = await getPool().getConnection();
            const [resp] = await conn.query(sql.biddingTable, [
                item.email,
                item.auction_price,
                item.product_status,
            ]);
            callback({ status: 200, message: "ok", data: resp });
        } catch (error) {
            return { status: 500, message: "입찰 테이블 조회 실패", error: error };
        } finally {
            if (conn !== null) conn.release();
        }
    },

    update: async (item, callback) => {
        let conn = null;
        try {
            conn = await getPool().getConnection();
            const [resp] = await conn.query(sql.update, [
                item.master_price,
                item.content,
                item.product_id,
            ]);
            callback({ status: 200, message: "ok" });
        } catch (error) {
            return { status: 500, message: "게시글 수정 실패", error: error };
        } finally {
            if (conn !== null) conn.release();
        }
    },
};

module.exports = productDAO;