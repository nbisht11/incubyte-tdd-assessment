function add(numbers) {
    if(numbers=="") return 0;
    const sum = numbers.replace("\n", ",").split(",").reduce((total, num) => total + parseInt(num, 10), 0);
    return sum;
}

module.exports = add;