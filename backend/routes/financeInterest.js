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
            const $bodyList = $("#marketindex_aside > div:nth-child(1) > table:nth-child(2) tbody").children("tr");
            console.log(typeof($bodyList));
            $bodyList.each(function(i, elem) {
                ulList[i] = {
                    title: $(this).find('th a span').text(),
                    value: $(this).find('td:nth-child(2)').text(),
                    change: $(this).find('td:nth-child(3)').text(),
                };
            });
            res.send(ulList);
            // return ulList.filter(n => n.title);
        })
        // .then(result => res.render('index', { title: result }));
    
});

module.exports = router;