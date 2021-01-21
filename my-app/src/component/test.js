const removeOdd = (arr)=>{
    
    return arr.filter((item)=>{
        return item % 2 === 0 
    })

}


console.log(removeOdd([1],2))