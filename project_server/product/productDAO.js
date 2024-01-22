//데이터베이스와 상호작용
const getPool = require("../common/pool");

const sql = {
    productlist: "select * from product",
    // buy:
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

    list: async (item, callback) => {
        let conn = null;
        try {
            // 데이터베이스 풀에서 연결을 가져옵니다.
            conn = await getPool().getConnection();
            // 'product' 테이블에서 모든 상품 정보를 조회하는 쿼리를 실행합니다.
            const [rows] = await conn.query("SELECT * FROM product");
            // 쿼리 실행 결과를 콜백으로 반환합니다.
            callback(null, { status: 200, message: "ok", data: rows });
        } catch (error) {
            // 에러가 발생한 경우, 에러 정보를 반환합니다.
            callback(error, { status: 500, message: "상품 목록 조회 실패", error: error });
        } finally {
            // 연결을 풀로 반환합니다.
            if (conn) conn.release();
        }
    },
    

    buy: async (item, callback) => {
        let conn = null;
        try {
            // 데이터베이스 연결 및 트랜잭션 시작
            conn = await getPool().getConnection();
            await conn.beginTransaction();
            // 'auction' 테이블에 구매 정보 기록
            await conn.query(sql.recordPurchase, [/* 구매 정보 */]);
            // 'product' 테이블의 상태 업데이트
            await conn.query(sql.updateProductStatus, [/* 상품 ID 등 */]);
            // 트랜잭션 커밋
            await conn.commit();
            // 콜백으로 성공 응답 전송
            callback(null, { status: 200, message: "구매 신청 완료" });
        } catch (error) {
            // 트랜잭션 롤백 및 에러 처리
            if (conn) await conn.rollback();
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