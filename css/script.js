function name1() {
    var name = prompt("What is your name?");
    var firstLetter = name.slice(0,1);
    var restOfName = name.slice(1, name.length)
    firstLetter = firstLetter.toUpperCase();
    restOfName = restOfName.toLowerCase();
    var name2 = firstLetter + restOfName;
    document.getElementById('name').innerHTML = "Hello " + name2;
}