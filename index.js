let exam = document.getElementById('exam');
let Name = document.getElementById('name');
let center = document.getElementById('center');
let eng = document.getElementById('eng');
let select1 = document.getElementById('select1');
let select1input = document.getElementById('select1input');
let btn = document.getElementById('btn');
// display
let examdisplay = document.getElementById('examdisplay');
let namedisplay = document.getElementById('namedisplay');
let centerdisplay = document.getElementById('centerdisplay');
let engdisplay = document.getElementById('engdisplay');
let select1display = document.getElementById('select1display');
let select1inputdisplay = document.getElementById('select1inputdisplay');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    examdisplay.value = exam.value;
    namedisplay.value = Name.value;
    centerdisplay.value = center.value;
    if(eng.value >=65 && eng.value < 80){
        engdisplay.value = 'B';
    }
    else if(eng.value >= 50 && eng.value < 65){
        engdisplay.value = 'C';
    }
    else if(eng.value >= 45 && eng.value < 50){
        engdisplay.value = 'D';
    }
    else if(eng.value >= 80){
        engdisplay.value = 'A';
    }
    else{
        engdisplay.value = 'F';
    }

    
    select1display.textContent = select1.value;

    if(select1input.value >=65 && select1input.value < 80){
        select1inputdisplay.value = 'B';
    }
    else if(select1input.value >= 50 && select1input.value < 65){
        select1inputdisplay.value = 'C';
    }
    else if(select1input.value >= 45 && select1input.value < 50){
        select1inputdisplay.value = 'D';
    }
    else if(select1input.value >= 80){
        select1inputdisplay.value = 'A';
    }
    else{
        select1inputdisplay.value = 'F';
    }
    
})