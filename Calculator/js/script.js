let buttons = document.getElementsByClassName("button");
let ar=[];
let outputstring="";
let tempstring="";

function add(e){
	// console.log(e.target.innerHTML);
	let input=e.target.innerHTML;
	// ar.push(input);
	outputstring+=input;
    document.getElementById("inputField").innerHTML=outputstring;
    
    if(input== 'C'){
    	document.getElementById("inputField").innerHTML="";
    	document.getElementById("output").innerHTML="";

    	outputstring="";

    }else if(input == ' + '){
       ar.push(tempstring);
       ar.push(input);
       tempstring="";
    }else if(input == ' - '){
    	ar.push(tempstring);
    	ar.push(input);
    	tempstring = "";
    }else if(input == ' X '){
    	ar.push(tempstring);
    	ar.push(input);
    	tempstring = "";
    }else if(input == ' = '){
    	
    	ar.push(tempstring);
    	
    	tempstring="";
    	document.getElementById("output").innerHTML=calculate();
    }else if(input == ' / '){
    	ar.push(tempstring);
    	tempstring="";
    }else{
    	tempstring+=input;
    }

}
Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', add);
});

function calculate(){
	let [op1,operator,op2]=ar;
	ar=[];
	if(operator == ' + ')
	return parseInt(op1)+parseInt(op2);
    else if(operator == ' - ') return parseInt(op1)-parseInt(op2);
    // else if(operator == ' / ') return parseInt(op1)/parseInt(op2);
    else return parseInt(op1)*parseInt(op2);

	
}
