// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string "Hello, Alex!" when executed', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, Jane! when executed', function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, World!" when executed', function (){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the function is true', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the function is false', function (){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe("isFive", function (){
    it('should be a defined function', function (){
        expect(typeof isFive).toBe('function');
    });
    it('should return true if input is 5', function (){
        expect(isFive(5)).toBe(true);
    });
    it('should return a boolean when called', function (){
        expect(typeof isFive()).toBe("boolean");
    });
});

describe("isEven",  function (){
    it('should be a defined function', function (){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function (){
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when the input is even', function (){
        expect(isEven(0)).toBe(true);
    });
});

describe("isVowel", function (){
    it('should be a defined function', function (){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function (){
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when the input is a vowel', function (){
        expect(isVowel('a', 'e', 'i', 'o', 'u')).toBe(true);
    });
    it('should ')
})

describe("add", function (){
    it('should return')
});

// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN

