
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') 
   {
      new_image('rr1.png');
      console.log("r")
   }
   if(keyPressed == '71')
   {
       block_x = 200;
     
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       
   }
   if(keyPressed == '66')
   {
       block_x = 700;
  
   }
   
}
