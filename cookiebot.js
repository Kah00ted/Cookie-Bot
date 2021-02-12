//console.log(`Cookies: ${Game.Cookies}`)
//console.log(`Price: ${Game.ObjectsById['2'].bulkPrice}`)

cookieGoals = {
    "cursor":0,
    "grandma":0,
    "farm":0,
    "mine":0,
    "factory":0,
    "bank":0,
    "temple":0,
    "wizzard":0,
    "shipment":0,
    "alchLab":3,
    "portal":10,
    "timeMach":0,
    "condenser":0,
    "prism":0,
    "chance":0,
    "fracEngine":0,
    "jsConsole":0,
    "idleverse":0
}

function scanCookies(){
    if (Game.ObjectsById['0'].amount < cookieGoals.cursor){
        tryBuy(0)
    }else if (Game.ObjectsById['1'].amount < cookieGoals.grandma){
        tryBuy(1)
    }else if (Game.ObjectsById['2'].amount < cookieGoals.farm){
        tryBuy(2)
    }else if (Game.ObjectsById['3'].amount < cookieGoals.mine){
        tryBuy(3)
    }else if (Game.ObjectsById['4'].amount < cookieGoals.factory){
        tryBuy(4)
    }else if (Game.ObjectsById['5'].amount < cookieGoals.bank){
        tryBuy(5)
    }else if (Game.ObjectsById['6'].amount < cookieGoals.temple){
        tryBuy(6)
    }else if (Game.ObjectsById['7'].amount < cookieGoals.wizzard){
        tryBuy(7)
    }else if (Game.ObjectsById['8'].amount < cookieGoals.shipment){
        tryBuy(8)
    }else if (Game.ObjectsById['9'].amount < cookieGoals.alchLab){
        tryBuy(9)
    }else if (Game.ObjectsById['10'].amount < cookieGoals.portal){
        tryBuy(10)
    }else if (Game.ObjectsById['11'].amount < cookieGoals.timeMach){
        tryBuy(11)
    }else if (Game.ObjectsById['12'].amount < cookieGoals.condenser){
        tryBuy(12)
    }else if (Game.ObjectsById['13'].amount < cookieGoals.prism){
        tryBuy(13)
    }else if (Game.ObjectsById['14'].amount < cookieGoals.chance){
        tryBuy(14)
    }else if (Game.ObjectsById['15'].amount < cookieGoals.fracEngine){
        tryBuy(15)
    }else if (Game.ObjectsById['16'].amount < cookieGoals.jsConsole){
        tryBuy(16)
    }else if (Game.ObjectsById['17'].amount < cookieGoals.idleverse){
        tryBuy(17)
    }
}

function tryBuy(buildingId){
    if (Game.cookies >= Game.ObjectsById[buildingId].bulkPrice){
        Game.ObjectsById[buildingId].buy()
        console.log("Buy Now")
    }else{
        console.log("Not Enough Cookies")
    }
}

function cookieBotLoop() {         
    setTimeout(function() {
        scanCookies()
        cookieBotLoop()               
    }, 10000)
}

cookieBotLoop()