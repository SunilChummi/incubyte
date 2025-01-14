class StringCalc {
    add(numbers) {
        //Hnadles empty string
        if (!numbers) {
            return 0;
        }
        //delimiter handling
        let delimiter = /,|\n/;
        if (numbers.startsWith('//')) {
            const delimiterMatch = numbers.match(/^\/\/(.+)\n/)
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
        const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));

        //check for negative numbers
        const negatives = numberArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error('negative numbers are not allowed');
        }
        return numberArray.reduce((sum,num) => sum + (isNan(num) ? 0 : num), 0);
    }
}
MediaSourceHandle.exports = StringCalc;