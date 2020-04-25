(() => {
  const context = document.getElementById("canvas").getContext("2d");
  const canvas = context.canvas;
  const sceneColor = "#00AAFF";
  const w = 230; // width of the frame in the Sprite Sheet
  const h = 450; // height of the frame in the Sprite Sheet
  const maxFrameLength = 10;
  const scale = 1; // scale of the frame
  let delay = 80; // delay till animating the next frame
  let count = 1; // counter for the delay
  let currentFrameX = 0; // start frameX

  const centerCanvas = () => {
    canvas.style.marginTop =
      `${((window.innerHeight / 2) - (canvas.height / 2))}px`;
  };

  const range = document.getElementById("fps")
  .addEventListener("change", (e) => { delay = e.target.value; });

  canvas.width = w* scale; canvas.height = h * scale;

  document.body.style.background = sceneColor;
  canvas.style.background = sceneColor;

  centerCanvas();

  const animate = () => {
		if(currentFrameX==9)
		{
		canvas.width=2*canvas.width;
		context.clearRect(0, 0, canvas.width, canvas.height);
		}
		else
    context.clearRect(0, 0, canvas.width, canvas.height);

 
  // if(count <=10)
  // {
	  // if(count == 1)
	  // {
		// console.log("start="+count);
	  // }
	  // else{
		  // console.log(count);
	  // }
	 console.log(currentFrameX);
	//   if(currentFrameX != 10)
	//   {  
          // console.log('in 11 block');
		  // return false;
		  
	  
		// we'll start with the second frame (index = 1) which is the start of
		// the walking cycle
		const frameX = currentFrameX;
		// only animate the first row of frames from the Sprite Sheet
		const frameY = 0;
	
		const sx = 8 + frameX * w;
		const sy = frameY * h;

		if (count > delay) 
		{
			//console.log("in if");
			//alert("If");
		  currentFrameX ++; count = 1;
		} 
		else 
		{
			//alert("else");
			//console.log("in else");
			count ++; 
		}
		if(currentFrameX==10)
		{
			context.clearRect(0, 0, canvas.width, canvas.height);
		}
		 //console.log(currentFrameX);

		if (currentFrameX > maxFrameLength) currentFrameX = 1;

		

		context.drawImage(spriteSheet, sx, sy, 460, h, 0, 0, 460* scale, h * scale);
	 //}
  };

  const frame = () => {
	  if(currentFrameX==10)
	  {
		  return false;
	  }

	 animate(); 
	 requestAnimationFrame(frame);
  };

  const spriteSheet = new Image(); spriteSheet.src = "mario3.png";
  //const spriteSheet = new Image(); spriteSheet.src = "numbers-colourful.jpg";

  spriteSheet.onload = () => { frame(); };

})();
