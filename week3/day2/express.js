const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body); 
  res.send(res.body);
});

app.listen(3000, () => console.log('Server running on port 3000'));

const express = require("express")

var user =[{
    name : 'teja',
    character : 'goodboy'
},{
    name: 'mani',
    character : 'bad boy'
}]

function calculateSum (n){
    let ans=0;
    for(i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

const app = express();

app.get("/", function(req,res){
    const n = parseInt(req.query.n);
    const ans = calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const numbers = [10, 20, 30, 40, 50];

// Filter numbers greater than 25
const filteredNumbers = numbers.filter(num => num > 25);
console.log(filteredNumbers); // [30, 40, 50]

const numbers = [1, 2, 3, 4, 5];

// Square each number
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15