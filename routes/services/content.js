const express = require("express")
const app = express.Router()
const path = require('path')
const config = require(path.join(__dirname, '../../config.json'))

app.get("/api/pages/fortnite-game", async (req, res) => {
    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenews: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: config.newsImage,
                        tileImage: config.newsImage,
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: config.newsTitle,
                        _type: "CommonUI Simple Message MOTD",
                        title: config.newsTitle,
                        body: config.newsText,
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Aurora-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: config.noticeTitle,
                        body: config.noticeText,
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        stage: config.seasonStage,
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        stage: config.seasonStage,
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        }
    })
})


module.exports = app