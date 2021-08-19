//Helping Function
//html Elmenent id and value bringer
function getMe(id){
    let i = document.getElementById(id).value;
    return (i);
}
//radio check function
function rad(id){
    let i = document.getElementById(id).checked;
    return Boolean(i);
}
//Html injection function
function inject(id,val){
    document.getElementById(id).innerHTML = val;
}
//start the solution
//function calc Action onclick
function calc(){
    let kg = Number(getMe("gross"));
    let age = Number(getMe("alt"));
    let gew = Number(getMe("gew"));
    let man = rad("mn");
    let wom = rad("fr");
    let active = getMe("akti");
    let grund,gesamt;
    if (kg == 0 || age == 0 || gew == 0 || man == false && wom==false){
        alert("Bitte füllen Sie alle Fielder aus");
    }else{
        if (man == true ){
            grund = 664.7+(13.7*gew)+(5*kg)-(6.8*age);
        }else if (wom == true){
            grund = 655.1+(9.6*gew)+(1.8*kg)-(4,7*age); 
        }
        switch (active) {
            case "one":
                gesamt = grund*0.95;
                break;
            case "tow":
                gesamt = grund*1.2;    
                break;
            case "three":
                gesamt = grund*1.5;
                    break;
            case "four":
                gesamt = grund*1.7;    
                break;
            case "five":
                gesamt = grund*1.9;
                break;
            case "six":
                gesamt = grund*2.2;    
                break;       
        }
        let kjgrund,kjgesamt ;
        kjgrund =grund*4.184;
        kjgesamt =gesamt*4.184;
        inject("gkc",Math.round(grund));
        inject("gkj",Math.round(kjgrund));
        inject("geskc",Math.round(gesamt));
        inject("geskj",Math.round(kjgesamt));
    }
    
    }
    