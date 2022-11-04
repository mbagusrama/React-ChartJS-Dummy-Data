
function Random() {
  var arr = [];

  const randomNumber = () => {
    const fs = require('fs');
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const jsonContent = JSON.stringify(alphabet);
    var num = Math.floor((Math.random() * 100) + 1);
    arr.push(num);
    console.log(arr);
    fs.writeFile("./alphabet.json", jsonContent, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  }

  randomNumber();
  return (<></>)
}

export default Random;