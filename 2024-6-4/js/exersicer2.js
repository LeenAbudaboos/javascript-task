function average(avg){
    if(avg<=100 && avg>=90 ){
        console.log("A")
    } 
    else if(avg<=89 && avg>=80 ){
        console.log("B")
    }
    else if(avg<=79 && avg>=70 ){
        console.log("C")
    }
    else if(avg<=69 && avg>=60 ){
        console.log("D")
    }
    else if(avg<=59 && avg>=50 ){
        console.log("E")
    }
    else{
        console.log("Fail")
    }
}

average(44);