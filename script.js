let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let turnO = true ;// playerx playery
let newgamebtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")



//winning pattern 
let newgameBtn = document.querySelector("#new-btn");



 const winpatt = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[6,7,8]
 ];
 
 //we can add an eventlistenrer
 
 boxes.forEach((box)=>{
      box.addEventListener("click" , ()=>{
		console.log("box was clicked");
		box.innerText ="abcd"
		if(turnO){
			box.innerText = "O";
			turnO = false;
			//wehave to disable the currrent box
			
		}
		else{
		   box.innerText ="X"
		   turnO = true;
		}
		box.disabled = true;
		
		checkWinner();
	  })
 } )
 
 const resetgame  = ()=>{
	turnO = true;
	enablebox();
	msgcontainer.classList.add("hide");
 }
 
 const showwinner  = (winner) => {
	msg.innerText = "CONGRATS "
	msgcontainer.classList.remove("hide");
	disablebox();
 }
 const disablebox = () =>{
	for(let box of boxes){
		box.disabled = true;
	}
 }
 const enablebox = () =>{
	for(let box of boxes){
		box.disabled = false;
		box.innerText = "";
	}
 }
 const checkWinner = () =>{
	for(let pat of winpatt){
		 let pos1 = boxes[pat[0]].innerText;
		 let pos2 = boxes[pat[1]].innerText;
		 let pos3 = boxes[pat[2]].innerText;
		 
		 if(pos1 != "" &&pos2 != "" && pos3 !=""){
			if(pos1 === pos2 && pos2 ===pos3 ){
				console.log("winner" ,pos1);
				showwinner(pos1);
				
			}
		 }
			
	}
	
 }
 
 newgameBtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click", resetgame);
