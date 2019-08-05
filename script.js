
    var eventType = prompt("What type of event are you attending?");
    var correctAttire;
    var tempFahr = prompt("What is the current temperature in degrees Fahrenheit?");
    var tempAttire;
    
    if (tempFahr <= 54) {
    			tempAttire = "a coat";
    }	else if (tempFahr <= 70 && tempFahr > 54) {
    			tempAttire = "a jacket";
    } else if (tempFahr > 70) {
    		tempAttire = "no jacket";
    } else {
        tempAttire = null;
    }
    
    
    if (eventType == "casual") {
    		correctAttire = "something comfy";
    } else if (eventType == "semi-formal") {
    		correctAttire = "a polo";
    } else if (eventType == "formal") {
    		correctAttire = "a suit";
    } else {
    		correntAttire = null;
    }
    
    var result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + correctAttire + " and " + tempAttire + ".");
    console.log(result);
    document.write(result)
