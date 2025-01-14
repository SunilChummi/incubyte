class StringCalc {
    add(numbers) {
        //Hnadles empty string
        if (!numbers) {
            return 0;
        }

        let delimiter = /,|\n/;
        if (numbers.startsWith('//')) {
            const delimiterMatch = numbers.match(/^\/\/(.+)\n/)
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
    }
}