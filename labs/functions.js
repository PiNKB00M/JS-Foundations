function fizzBuzz(x)
{
    if(x % 3 == 0 && x % 5 == 0)
    {
        return "FizzBuzz";
    }
    if(x % 3 == 0)
    {
        return "Fizz";
    }
    if(x % 5 == 0)
    {
        return "Buzz";
    }

    return x;
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(4)); // 4
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(11)); // 11
console.log(fizzBuzz(15)); // "FizzBuzz"

for (let i=1; i<=15; i++)
{
    console.log(fizzBuzz(i));
}

