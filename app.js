
function startsign(){
    date=document.getElementById("birthdate").value;
    birthDate=new Date(date);
    year=birthDate.getFullYear();
    signe=year % 12;
    if(birthDate.getMonth()===0 && birthDate.getDate()<21){
        signe-=1;
        if(signe===-1)
            signe=11
    }
    img = document.getElementById("img");
        

    switch(signe){
        case 11:
            img.src = "img/Goat.jfif";
            break;
        case 0:
            img.src = "img/Monkey.jfif";
            break;
        case 1:
            img.src = "img/chicken.jfif";
            break;
        case 2:
            img.src = "img/dog.jfif";
            break;
        case 3:
            img.src = "img/pig.jfif";
            break;
        case 4:
            img.src = "img/Rat.jfif";
            break;
        case 5:
            img.src = "img/Buffalo.jfif";
            break;
        case 6:
            img.src = "img/tiger.jfif";
            break;
        case 7:
            img.src = "img/Rabbit.jfif";
            break;
        case 8:
            img.src = "img/dragon.jfif";
            break;
        case 9:
            img.src = "img/Snake.jfif";
            break;
        case 10:
            img.src = "img/Horse.png";
            break;
    }




}

