const express = require("express");
const router = express.Router();
const productDAO = require("./productDAO");

// 상품 목록을 가져오는 GET 요청 처리
router.get("/productlist", function (req, res, next) {
    console.log("상품 페이지");
    productDAO.productList((resp) => {
        res.json(resp);
    });
});

// 상품 구매 목록을 가져오는 GET 요청 처리
router.post("/buy/:id", function (req, res, next) {
    console.log("상품 구매등록");
    const data = req.body;
    // productDAO.buy 호출 시 데이터 전달
    productDAO.buy(data, (resp) => {
        res.json(resp);
    });
});



// buy 무한로딩 미치겠다 진짜.. 이건 테스트용 
// router.get("/buy", function (req, res, next) {
//     console.log("상품 구매 목록");
//     const id = req.query.id;
//     if (id) {
//         productDAO.buy(id, (resp) => {
//             res.json(resp);
//         });
//     } else {
//         res.status(400).json({ error: "No product ID provided" });
//     }
// });



// 화면메인 부분 - 준영님


router.get("/detail/:id", function (req, res, next) {
    console.log("디테일 불러오기");
    const id = req.params.id;
    productDAO.detail({ product_id: id }, (resp) => {
        //productDAO.detail 함수의 매개변수로는 객체를 받도록 정의되어 있으니까 객체 안에 담아야함
        res.json(resp);
    });
}); //성공

router.post("/bidding", (req, res, next) => {
    console.log("낙찰페이지 불러오기");
    const data = req.body;
    productDAO.bidding(data, (resp) => {
        res.json(resp);
    });
});

router.get("/biddingTable", function (req, res, next) {
    console.log("낙찰테이블 불러오기");
    productDAO.biddingTable((resp) => {
        res.json(resp);
    });
}); //성공

router.post("/update", function (req, res, next) {
    console.log("게시글 수정하기");
    const data = req.body;
    productDAO.update(data, (resp) => {
        res.json(resp);
    });
});

// router.get("/", function (req, res) {
//   res.send("products.ok");
// });

// router.get("/detail/:id", function (req, res) {
//   res.send("detail.ok");
// });

// router.get("/bidding", function (req, res) {
//   res.send("bidding.ok");
// });

module.exports = router;