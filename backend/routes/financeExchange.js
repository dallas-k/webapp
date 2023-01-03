const express = require('express');
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite')

const url = 'https://finance.naver.com/marketindex/';

const getHtml = async (url) => {
    try {
        return await axios.get(url, {
            responseType: 'arraybuffer',
          });
    } catch (error) {
        console.error(error);
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
    getHtml(url)
        .then(html => {
            var ulList = [];
            const content = iconv.decode(html.data, 'euc-kr');
            const $ = cheerio.load(content);
            const $bodyList = $("ul#exchangeList").children("li");
            console.log(typeof($bodyList));
            $bodyList.each(function(i, elem) {
                var upDown = $(this).find('span.blind').text();
                ulList[i] = {
                    title: $(this).find('h3.h_lst').text(),
                    value: $(this).find('span.value').text(),
                    change: $(this).find('span.change').text(),
                    direction: upDown.slice(-2),
                };
            });
            res.send(ulList);
            // return ulList.filter(n => n.title);
        })
        // .then(result => res.render('index', { title: result }));
    
});

module.exports = router;