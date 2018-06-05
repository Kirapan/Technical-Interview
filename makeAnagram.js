function main() {
    const a = 'cde';

    const b = 'abc';
    let c = b;
    let count = 0;
    for (let i=0; i< a.length; i++) {
        if (c.indexOf(a.charAt(i))>=0) {
            c = c.replace(a.charAt(i),"")
        } else {
            count++;
        }
    }
    return count + c.length;
}

console.log(main());