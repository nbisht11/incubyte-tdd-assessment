function add(numbers) {
    if (numbers == "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const numbersAndDelimiter = numbers.split("\n");
        delimiter = new RegExp(`[${numbersAndDelimiter[0].slice(2)}]`);
        numbers = numbersAndDelimiter[1];
    }

    let numbersArray = numbers.split(delimiter);
    const negativeNumbers = numbersArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }
    numbersArray = numbersArray.filter(num => num <= 1000);
    const sum = numbersArray.reduce((total, num) => total + parseInt(num, 10), 0);
    return sum;
}

module.exports = add;