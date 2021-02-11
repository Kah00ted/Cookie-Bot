console.log(`Cookies: ${Game.Cookies}`)
console.log(`Price: ${Game.ObjectsById['2'].bulkPrice}`)

if (Game.cookies >= Game.ObjectsById['2'].bulkPrice){
    console.log("Buy Now")
}