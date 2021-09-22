function checkButton() {    
    if(document.getElementById('frontend').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("frontend").value   
            + " radio button is checked";   
    }   
    else if(document.getElementById('backend').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("backend").value   
            + " radio button is checked";     
    }   
    else if(document.getElementById('fullstack').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("fullstack").value   
            + " radio button is checked";     
    }   
    else if(document.getElementById('java').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("java").value   
            + " radio button is checked";     
    }  
    else {   
        document.getElementById("error").innerHTML   
            = "You have not selected any season";   
    }   
}  


