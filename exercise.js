longestConsec = ['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus']
k = 3

let newString = '';
function longestConsecutive(array, num) {
    for (let i = 0; i < array.length; i++){
        let tempString = array.slice(i,i+k).join('');
        if (tempString.length > newString.length) {
            newString = tempString;
        };
    };
    return newString;
};

longestConsecutive(longestConsec, k);
console.log(newString);

