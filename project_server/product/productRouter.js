const express = require("express");
const router = express.Router();
const productDAO = require("./productDAO");

router.get("/list", function (req, res, next) {
    console.log("상품 메인 불러오기");
    productDAO.list((resp) => {
        res.json(resp);
    });
});

router.get("/buy" , function (req , res, next) {
    console.log("상품 구매 목록 불러오기");
    productDAO.buy((resp) =>{
        res.json(resp);
    })
})


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