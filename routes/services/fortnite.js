const express = require("express")
const app = express.Router()
const fs = require("fs")
const path = require('path')
const { Z_ASCII } = require("zlib")

const checkToken = require(`${__dirname}/../../middleware/checkToken`)
const cache = require(`${__dirname}/../../structs/caching`)
const errors = require(`${__dirname}/../../structs/errors`)
const config = require(path.join(__dirname, '../../config.json'))

app.use(require(`${__dirname}/cloudstorage.js`))
app.use(require(`${__dirname}/timeline.js`))
app.use(require(`${__dirname}/mcp.js`))

app.get("/api/storefront/v2/catalog", async (req, res) => {
    console.log(`[\x1b[35mAurora\x1b[0m] Loaded Itemshop\x1b[0m`)
    res.json({
        "refreshIntervalHrs": 9999999,
        "dailyPurchaseHrs": 9999999,
        "expiration": "9999-12-02T01:12:00Z",
        "storefronts": [
            {
            "name": "BRDailyStorefront",
            "catalogEntries": [
                {
                "devName": config.item1,
                "offerId": "v2:/dfgfdgdfg-gf-fdggfgfd-fggf-dgfgf",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item1,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item1,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.item2,
                "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item2,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item2,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.item3,
                "offerId": "v2:/gffdgfggfgf-ggfddgdggafdsdqwewr-gfgfdwfqwe",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item3,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item3,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.item4,
                "offerId": "v2:/dffdf-fdadfsadqa-dffasd-adfdfg-rrws",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item4,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item4,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.item5,
                "offerId": "v2:/dfsdsfwe809fef-8wef-wef89dfswd-wwfd",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item5,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item5,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.item6,
                "offerId": "v2:/d89fdsa89sdaf87ffae0fdf-dffefwefwe-fwdfdw",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.item6,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.item6,
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                }
            ]
            },
            {
            "name": "BRWeeklyStorefront",
            "catalogEntries": [
                {
                "devName": config.ft1,
                "offerId": "v2:/dsf-fsdfd-fds-fd-sf-fqae-effqef",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.ft1,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.ft1,
                    "quantity": 1
                    }
                ],
                "sortPriority": -1,
                "catalogGroupPriority": 0
                },
                {
                "devName": config.ft2,
                "offerId": "v2:/dsfsdfffaefasd-dafadfdsafsdf-fadfasdf-adfds",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 0,
                    "finalPrice": 0,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 0
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": config.ft2,
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": config.ft2,
                    "quantity": 1
                    }
                ],
                "sortPriority": -2,
                "catalogGroupPriority": 0
                }
            ]
            }
        ]         
    })
    res.status(200);
})

app.all("/api/v2/versioncheck/Windows", (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.json({type: "NO_UPDATE"})
})

app.all("/api/game/v2/tryPlayOnPlatform/account/:accountId", checkToken, (req, res) => {
    if(req.method != "POST") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.setHeader('Content-Type', 'text/plain')
    res.send(true)
})

app.all("/api/game/v2/enabled_features", checkToken,  (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.json([])
})

app.all("/api/storefront/v2/keychain", checkToken, (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))

    res.json(cache.getKeychain())
})

app.all("/api/game/v2/matchmakingservice/ticket/player/:accountId", checkToken, (req, res) => {
    res.status(401).json(errors.create(
        "Due to Epic TOS, we are not able to support matchmaking. Sorry for any inconvenience.", 12002,
        "dev.slushia.fdev.matchmaking.not_enabled",
        "fortnite", "prod"
    ))
})

app.all("/api/game/v2/privacy/account/:accountId", checkToken, (req, res) => {
    res.json({
        acceptInvites: "public"
    })
})

app.all("/api/game/v2/world/info", checkToken, (req, res) => {
    res.json({})
})

app.all("/api/matchmaking/session/findPlayer/:accountId", (req, res) => {
    res.status(204).end()
})

app.use((req, res, next) => {
    res.status(404).json(errors.create(
        "errors.com.epicgames.common.not_found", 1004,
        "Sorry the resource you were trying to find could not be found",
        "fortnite", "prod"
    ))
})

module.exports = app