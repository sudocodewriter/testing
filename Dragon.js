const ctx = canvas.getContext('2d');
var direction = 0;
function Dragon_Curve_Sequence(str) 
{
    length = str.length
    string ='';
    for(var i = 0; i<length;i++)
    {
        if(str[i]=='L')
        {
            string = string + 'LR';
        }
        else{
            string = string + 'RL';
        }
    }
    return string;
}


function Dragon_curve_n(str, n_iter)
{
var str = "LR"
for(var  i = 0; i<n_iter;i++)
{
    str = Dragon_Curve_Sequence(str);
}
}

function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo()
drawLLLL()
drawRRRR()
}
drawLLLL()
{
    drawL()
    drawL()
    drawL()
    drawL()
}
drawRRRR()
{
    drawR()
    drawR()
    drawR()
    drawR()
}
drawL()
{

}
drawR()
{

}

class Pen {
    vec2 cur_point
    const vec2 ORIENT = N|E|S|W
    cur_orient = 0|1|2|3
    (0,1),(1,0),(0,-1),(-1,0)

    draw() {

        canvas.lineTo(cur_point, cur_point + ORIENT * LENGTH)

    }

    Line cur_line;
    drawR(){
        cur_orient = (cur_orient++)%4;
        cur_line such that c
    }
    Pen(x,y) {
        this.loc_x = x
        this.loc_y = y;
    }

    drawR()


    
}
/*

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(00, 000);
    ctx.lineTo(300, 000);
    ctx.stroke();
    */

// write a function to draw a horizontal line on the canvas of length say n pixels where n is 100

// LLLL and RRRR both draw squares
// write a drawR and drawL function that should both take a current 'point' setup
// drawR after drawL should draw a line taking a right from the end of drawL
// pen {}

/*while(iter(outstring)) {
    //char i
    if i=='L' then do canvAsfdsfsd.line
    if i =='R'
}
*/