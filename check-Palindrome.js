function checkPolidromWords (str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(checkPolidromWords ('kayak'));
console.log(checkPolidromWords ('cool'));
console.log(checkPolidromWords ('repaper'));
console.log(checkPolidromWords ('deified'));
console.log(checkPolidromWords ('delete'));
