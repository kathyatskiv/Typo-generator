
chbxskip = document.getElementById("skip");
chbxdouble = document.getElementById("double");
chbxreverse = document.getElementById("reverse");
chbxmisspell = document.getElementById("misspell");

text = document.getElementById("search")
result = document.getElementById("result");

function generateTypos()
{
    result.value = "";

    if(chbxskip.checked)
    {
        let res = skip(text.value);
        res.forEach(element => {
            result.value += element + "\n"
        });
    }
    
    if(chbxdouble.checked)
    {
        let res = double(text.value);
        res.forEach(element => {
            result.value += element + "\n"
        });
    }
    
    if(chbxreverse.checked)
    {
        let res = reverse(text.value);
        res.forEach(element => {
            result.value += element + "\n"
        });
    }

    if(chbxmisspell.checked)
    {
        let res = misspell(text.value);
        res.forEach(element => {
            result.value += element + "\n"
        });
    }
}

function skip(word)
{
    let answer = [];
   
    for(let i = 0; i < word.length; i++)
        answer.push(word.slice(0,i) + word.slice(i + 1, word.length));

    return answer;
}

function double(word)
{
    let answer = [];
   
    for(let i = 0; i < word.length; i++)
    {
        if(word.charAt(i) == word.charAt(i + 1)) continue;

        answer.push(word.slice(0,i) + word.charAt(i) + word.slice(i, word.length));
    }

    return answer;
}

function reverse(word)
{
    let answer = [];
   
    for(let i = 0; i < word.length - 1; i++)
    {
        if(word.charAt(i) == word.charAt(i + 1)) continue;
        if(word.charAt(i) == " " || word.charAt(i + 1) == " ") continue;

        answer.push(word.slice(0,i) + word.charAt(i + 1) + word.charAt(i) + word.slice(i + 2, word.length));
    }

    return answer;
}

function misspell(word)
{
    let answer = [];
    
    for(let i = 0; i < word.length; i++)
    {
        let ind = alphabet.indexOf(word.charAt(i));
        if(word.charAt(i) == " " || ind == -1) continue;

        for(let j = 0; j < misspells[ind].length; j++)
            answer.push(word.slice(0,i) + misspells[ind][j] + word.slice(i + 1, word.length));
    }

    return answer;
}

let alphabet = "abcdefghigklmnoparstuvwxyzåäö"

let misspells = [
    ['q', 'w', 's', 'z'],
    ['v', 'g', 'h', 'n'],
    ['x', 'd', 'f', 'v'],
    ['s', 'e', 'r', 'f', 'c', 'x'],
    ['w', 's', 'd', 'r'],
    ['d', 'r', 't', 'g', 'v', 'c'],
    ['f', 't', 'h', 'y', 'b', 'v'],
    ['g', 'y', 'u', 'j', 'n', 'b'],
    ['u', 'j', 'k', 'o'],
    ['h', 'u', 'i', 'k', 'm', 'n'],
    ['j', 'i', 'o', 'l' , 'm'],
    ['k', 'o', 'p'],
    ['n', 'j', 'k'],
    ['b', 'h', 'j', 'm'],
    ['i', 'k', 'l', 'p'],
    ['o', 'l'],
    ['a', 'w'],
    ['e', 'd', 'f', 't'],
    ['a', 'w', 'e', 'd', 'x', 'z'],
    ['r', 'f', 'g', 'y'],
    ['y', 'h', 'j', 'i'],
    ['c', 'f', 'g', 'b'],
    ['q', 'a', 's', 'e'],
    ['z', 's', 'd', 'c'],
    ['t', 'g', 'h', 'u'],
    ['a', 's', 'x'],
    ['a'],
    ['a'],
    ['o'],
]

/*
*/
