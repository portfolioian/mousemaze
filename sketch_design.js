function setup() {
let c =  createCanvas(1600, 800);


}

function draw() {
  
background(191,240,236);
for(var a=0; a<=1600; a=a+100){
	for(var b=0; b<=1600; b=b+150){  
		for(var c=75; c<=1600; c=c+150){

		  //fill(0,180,255);
		  fill("#FFFF00");
		  quad(a,b,a+50,b+25,a+50,b+75,a,b+50);

		  fill("#2C2F33");
		  quad(a+50,c,a+100,c+25,a+100,c+75,a+50,c+50);
		  //fill(0,0,100);
		  fill("#0bf14d");
		  quad(a+50,b+25,a+100,b,a+100,b+50,a+50,b+75);

		  fill("#ffffff");
		  quad(a,c+25,a+50,c,a+50,c+50,a,c+75);
		}
	}
}


}
