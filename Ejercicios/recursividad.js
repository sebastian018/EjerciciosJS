function factorial(num)
{   if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}

var result = factorial(8);
document.write(result);