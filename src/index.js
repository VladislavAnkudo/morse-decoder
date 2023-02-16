const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
                    
    const keysMorce = Object.keys(MORSE_TABLE);
    const valuesMorce = Object.values(MORSE_TABLE);            
    let arr = [], res = [];
    
    expr = expr.split(/(.{10})/).filter(item => item);
    expr.map(item => item === '**********'? arr.push(' ') : arr.push(String(+item)))
    arr = arr.map((item) => item.replace(/11/g, '-').replace(/10/g, '.'));
                    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] ===' ') {
            res.push(arr[i]);
        }
        for (let j = 0; j < keysMorce.length; j++) {
            if (arr[i] === keysMorce[j]) {
                res.push(valuesMorce[j])
            }
        }
    }
    return res.join('');


}

module.exports = {
    decode
}