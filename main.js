var canvas = new fabric.Canvas('myCanvas')
 block_image_width = 40;
 Block_image_height = 40;

 player_x =10;
 player_y=10;
 player_object = "";
 block_object = "";


 function player_update(){

    
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);



    });
}

function block_update(get_Image) {

    fabric.Image.fromURL(get_Image, function (Img) {

        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(Block_image_height)
        block_object.set({

            top: player_y,
            left: player_x
        })

        canvas.add(block_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    var key_pressed = e.keyCode

    console.log(key_pressed);
    if (e.shiftKey && key_pressed == '80') {
        console.log("Shift and P pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey && key_pressed == '77') {

        console.log("Shift and M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;

    }

    if (key_pressed == '38') {

        up();
        console.log("up");
    }


    if (key_pressed == '40') {

        down();
        console.log("down");

    }
    if (key_pressed == '37') {

        left();
        console.log("left");
    }

    if (key_pressed == '39') {
        right();
        console.log("right");
    }
   
    if (key_pressed == '70') {
        block_update("ironman_face.png");
        console.log("f");
    }
    if (key_pressed == '82') {
        block_update("thor_right_hand.png.png");
        console.log("r");
    }
    if (key_pressed == '76') {
        block_update("captain_america_left_hand.png");
        console.log("l");
    }
    if (key_pressed == '66') {
        block_update("spiderman_body.png");
        console.log("b");
    }
    if (key_pressed == '72') {
        block_update("hulk_legs.png");
        console.log("h");
    }
}

function up(){

    if(player_y>0){

        player_y=player_y-block_image_height;
        console.log("Block_image_height")
        console.log("When up arrow key is pressed X =" + player_x +",y" + player_y)
        canvas.remove(player_object)
        player_update()
    }

   
}

function down(){

    if(player_y<550){

        player_y = player_y + block_image_height;
        console.log("block_image_height")
        console.log("When down arrow key is pressed X =" + player_x +",Y ="+player_y)
        canvas.remove(player_object)
        player_update()

    }

}

function left(){

    if(player_x>0){

        player_x = player_x - block_image_width;
        console.log("block_image_width")
console.log("When left arrow key is pressed  X = "+player_x + ",Y" + player_y)
canvas.remove(player_object)
player_update()


    }
}

function right(){

    if( player_x<1450){

        player_x = player_x + block_image_width;
        console.log("block_image_Width");
        console.log("When right arrow key is pressed X = " + player_x +",Y ="+ player_x)
        canvas.remove(player_object)
        player_update()
    }
}