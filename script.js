let inputlabel = document.getElementById('inputlabel');
const btnC = document.querySelectorAll('button');
for (i of btnC){
    i.addEventListener('mousedown', e => e.target.style.backgroundColor='crimson');
    i.addEventListener('mouseup', e => e.target.style.backgroundColor='white');
}
pushbtn0=()=> inputlabel.innerHTML+='0'; pushbtn9 =()=> inputlabel.innerHTML+='9';
pushbtn8=()=> inputlabel.innerHTML+='8'; pushbtn7 =()=> inputlabel.innerHTML+='7';
pushbtn6=()=> inputlabel.innerHTML+='6'; pushbtn5 =()=> inputlabel.innerHTML+='5';
pushbtn4=()=> inputlabel.innerHTML+='4'; pushbtn3 =()=> inputlabel.innerHTML+='3';
pushbtn2=()=> inputlabel.innerHTML+='2'; pushbtn1=()=> inputlabel.innerHTML+='1';
pushbtnA=()=> inputlabel.innerHTML+='+'; pushbtnM = () =>  inputlabel.innerHTML+='*';
pushbtnS = () => inputlabel.innerHTML+='-'; pushbtnD = () => inputlabel.innerHTML+= '/'
pushbtnpoint = () => inputlabel.innerHTML+= '.'

pushbtnDel=()=> inputlabel.innerHTML=inputlabel.innerHTML.slice(0,-1);
pushbtnAC = () => inputlabel.innerHTML='';
pushbtnEqual=()=> inputlabel.innerHTML !== '' ? inputlabel.innerHTML = eval(inputlabel.innerHTML) : inputlabel.innerHTML='';