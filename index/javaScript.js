let count = 1; 
let vaiVolta = 0
document.getElementById("radio1").checked = true; 

setInterval( function() {     
        nextImage(); 
    }, 5000);  
    
    function nextImage() {     
        
        if (count < 4 && vaiVolta == 0){
        count++
        vaiVolta = 0;     
    }
    else {vaiVolta = 1}

    if (count > 1 && vaiVolta == 1){
        count--
        vaiVolta = 1;
    }
    
    else {vaiVolta = 0}

        document.getElementById("radio"+count).checked = true;  
    }