let a = 0, b = 1, i = 0;
while (i < 10) {
    console.log(a);
    [a,b] = [b, a + b];
    i++
}