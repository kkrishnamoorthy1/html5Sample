var canvasRef= document.getElementById("mycanvas")

var ctx = canvasRef.getContext("2d")
//draw line

ctx.moveTo(0,0)
ctx.lineTo(300,300)
ctx.stroke()
ctx.strokeText("Hello  Canvas", 10,200)

//draw the Text
ctx.font = "44px serif"


ctx.fillStyle = "rgba(200,0,0,0.5)"
ctx.fillRect(50,50,100,100)

ctx.fillStyle = "rgba(200,0,0,0.5)"
ctx.fillRect(50,50,100,100)

