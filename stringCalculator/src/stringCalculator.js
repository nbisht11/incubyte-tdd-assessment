function add(numbers) {
    if(numbers=="") 
        return 0;
    else 
        return parseInt(numbers,10);
}

module.exports = add;