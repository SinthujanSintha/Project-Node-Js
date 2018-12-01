function TypeCheck(){
    var  selects=document.getElementById('type');
    selects.options[selects.selectedIndex]
    var selectOptionVal=selects.options[selects.selectedIndex].value;
    if (selectOptionVal=='employee'){
        document.getElementById('salary').style.visibility='visible';
    }
    else if(selectOptionVal=='owner'){
        document.getElementById('sala').value=0;
        document.getElementById('salary').style.visibility='visible';
     

    }
    else{document.getElementById('sala').value=0;
    document.getElementById('salary').style.visibility='visible';
    }
    return false;
    

}