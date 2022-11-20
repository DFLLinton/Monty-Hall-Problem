let s = [0,0];
var t = [0,0];

function simulate(x)
{
document.querySelectorAll('.box').forEach(box => {
  box.style.border = "none";
  box.style.backgroundColor = "gray";
})
  
	var corr = Math.floor(Math.random()*3)+1; // pick correct answer
	var guess = Math.floor(Math.random()*3)+1; // make a random guess
	var alt; // define the switch option

	if (corr == guess) { 
      var n = Math.floor(Math.random() * (3-1) + 1);
    if (n >= corr) n++;
    var alt = n; 
	} else { // if incorrect, present correct answer as alternative
		alt = corr;
	}
	
  if (x==1){
    var final = alt;
  } else {
    var final = guess;
  };
  
  if(final == corr){
    var outcome = 1;
  } else{
    var outcome = 0;
  }
  
  if (x==1 && outcome==1){
    document.getElementById("explanation").innerHTML=`Success! In this iteration your first guess was door ${guess}. Your second guess was door ${final}. And the correct answer was door ${corr}`;
  } if (x==1 && outcome==0){
    document.getElementById("explanation").innerHTML=`Failure! In this iteration your first guess was door ${guess}. Your second guess was door ${final}. And the correct answer was door ${corr}`;
} if (x==0 && outcome==1) {
    document.getElementById("explanation").innerHTML=`Success! In this iteration your first guess was door ${guess}. You stuck with your first guess. And the correct answer was door ${corr}`;
  } if (x==0 && outcome==0){
    document.getElementById("explanation").innerHTML=`Failure! In this iteration your first guess was door ${guess}. You stuck with your first guess. And the correct answer was door ${corr}`;
  }

  t[x]++; //Counts number of simulations
  s[x]+= outcome; //Counts number of wins
  document.getElementsByClassName("ans")[x].innerHTML = s[x]+"/"+t[x]+" ("+Math.floor(s[x]/t[x]*100)+"%)";
  document.getElementsByClassName("box")[corr-1].style.backgroundColor = (outcome==1) ? "green" : "red";
  document.getElementsByClassName("box")[final-1].style.border = "solid yellow 5px";
}