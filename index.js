const express = require("express")
const cheerio = require("cheerio")
const download = require("node-image-downloader")
const request = require("request")

const app = express()

app.get("/", (req, res)=>{
    var url = "https://www.facebook.com/sagor286/"

    request(url,(error, response,html)=>{
        if(!error){
            var imagesrc = $("img").attr("src");

            download({
                imgs:[
                    {
                        uri:imagesrc
                    }
                ],
                dest:"./download"
            })
            .then((info)=>{
                console.log("download")
                process.exit(1)
            })
            console.log(html)
        }
    })
})

app.listen(5000)