const StringCalc = require('./code.js');

describe('StringCalc', () => {
    let calculator;
    beforeEach(() => {
        calculator = new StringCalc();
    });
    
    test('should return 0 if empty string passed', () => {
        expect(calculator.add('').toBe(0));
    });

    test('should return the number itself for a single number', () => {
        expect(calculator.add('1').toBe(1));
    })

    test('should return the sum of 2 numbers', () => {
        expect(calculator.add('1,5').toBe(6));
    });

    test('should handle newlines between numbers', () => {
        expect(calculator.add('1\n2,3').toBe(6));
    });

    test('should handle custom delimiters', () => {
        expect(calculator.add('//;\n1;2').toBe(3));
    });

    test('should throw an error for negative numbers', () => {
        expect(() => calculator.add('1,-2,3')).toThrow('negative numbers not allowed -2');
    });

    test('should list all negative numbers in the error message', () => {
        expect(() => calculator.add('1,-2,-3')).toThrow('negative numbers not allowed -2,-3');
    })
});