function greeting() {
    let username = 'Kleber';

    function displayUserName() {
        return `hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());