const jwt = require('jsonwebtoken');

const payload = {
    _id: 1,
    iat: Date.now() / 1000,
    exp: Date.now() / 1000 + 5
};

const PASS = 'yalasabes';

const token = jwt.sign(payload, PASS);


console.log('Decoded: ', jwt.decode(token));

const result = jwt.verify(token, PASS);
console.log('Result: ', result);

setTimeout( () => {
    console.log('Result: ', jwt.verify(token, PASS));
}, 6000);