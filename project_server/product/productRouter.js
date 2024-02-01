const express = require("express");
const router = express.Router();
const productDAO = require("./productDAO");
const axios = require('axios')
const xpath = require('xpath');
const dom = require('@xmldom/xmldom').DOMParser;

router.get("/productlist", function (req, res, next) {
    console.log("상품 페이지");
    productDAO.productList((resp) => {
        res.json(resp);
    });
});

router.post("/buy", function (req, res, next) {
    console.log("상품 구매등록");
    const data = req.body;
    // productDAO.buy 호출 시 데이터 전달
    productDAO.buy(data, (resp) => {
        res.json(resp);
    });
});


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

router.get('/search', async function (req, res, next) {
    console.log("search invoked...");
    const input = req.query.input
    console.log("input:", input);
    try {
        //응답 성공
        const response = await axios.get(`https://www.nl.go.kr/NL/search/openApi/searchKolisNet.do?key=39b4dd4a523f80ea24ba476b79fc50c968db9622ffd612dc415b4176e41ccadd&kwd=${input}&apiType=json&searchType=&sort=`);
        console.log(response.status);
        const doc = new dom().parseFromString(response.data, 'text/xml');
        const nodes = xpath.select("/root/result/item", doc);
        const result = [];
        for (i = 0; i < nodes.length; i++) {
            var title_node = xpath.select("title_info", nodes[i]);
            const title = title_node[0].firstChild.data;
            var id_node = xpath.select("id", nodes[i]);
            var id = "";
            if (id_node[0].firstChild) {
                id = id_node[0].firstChild.data;
            }
            const result_item = { title: title, id: id };
            console.log(result_item);
            result.push(result_item);
        }
        res.send(result);
    } catch (error) {
        //응답 실패
        console.error(error);
    }
})

module.exports = router