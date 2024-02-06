//데이터베이스와 상호작용
const getPool = require("../common/pool");
const axios = require('axios');

const sql = {
    productList: "select * from product",

    buy: "update product set auction_status = '?' where product_id = ?",

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
    // 페이지네이션 
    totalProducts: "SELECT COUNT(product_id) as TOTALCOUNT FROM product",
    listOnepage: "SELECT * FROM product LIMIT ?, ?",
};

const productDAO = {

    productList: async (callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()
            const [resp] = await conn.query(sql.productList, [])
            console.log('1010', resp)
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
            await conn.query(sql.buy, [
                item.product_id,
                item.title,
                item.email,
                item.master_price,
                item.auction_id,
                item.isbn,
            ]);
            console.log("22222", resp)
            // 콜백으로 성공 응답 전송
            callback(null, { status: 200, message: "구매 신청 완료" });
        } catch (error) {
            return { status: 500, message: '구매 실패', error: error }
        } finally {
            if (conn !== null) conn.release()
        }
    },

    // 페이지네이션
    listpage1: async (page, count, callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()
            const [totalCount] = await conn.query(sql.totalProducts)
            const [result] = await conn.query(sql.listOnepage, [(page - 1) * count, count])
            if (result) callback({ status: 200, data: result, totalCount: totalCount[0].TOTALCOUNT })
            else callback({ status: 500, message: '결과없음' })
        } catch (e) {
            console.log(e)
            return { status: 500, message: "상품조회실패", error: e }
        } finally {
            if (conn !== null) conn.release()
        }
    },
    listpage: async (page, callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()
            const [items] = await conn.query(sql.productList)
            //한페이지에 2개 item 가정
            const responseData = items.slice((page - 1) * 2, page * 2)
            //totalItems : 항목 갯수
            //perPage: 한 페이지당 항목 수
            if (responseData) callback({ status: 200, totalItems: items.length, perPage: 2, data: responseData })
            else callback({ status: 500, message: '결과없음' })
        } catch (e) {
            console.log(e)
            return { status: 500, message: "상품조회실패", error: e }
        } finally {
            if (conn !== null) conn.release()
        }
    },
// -------------------------------------------------------------------------------------------------------------







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