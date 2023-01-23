import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("background","kartkaswiateczna.png")
loadSprite("mikolaj","mikolaj.png")

loadSound("muzyka", "MedrcySwiata.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("background"),
    pos(0,0)
]) 
const mikolaj = add([
    sprite("mikolaj"),
    pos(0,230)
]);

let w_prawo=true

onUpdate(()=> { 

    if(w_prawo) mikolaj.moveTo(mikolaj.pos.x+1,mikolaj.pos.y)

    else mikolaj.moveTo(mikolaj.pos.x-1,mikolaj.pos.y)

    if(mikolaj.pos.x>440)

    {
        //mikolaj.moveTo(0,230)
        w_prawo=false

        debug.log("W lewo")

    }

    if(mikolaj.pos.x<0) 
    {
        //mikolaj.moveTo(0,230)
        w_prawo=true

        debug.log("W prawo")

    }
    

})


onKeyPress("space", ()=>{
    play("muzyka")
})
