#lorem-ipsum-simple
This is simple lorem-ipsum generator. You can make it easy to generate mock text.

##USAGE
`$ npm i lorem-ipsom-simple`  
or  
`$ yarn add lorem-ipsom-simple`  

##Caution
This is work-progress. it's really tiny now. I'm supposed to make additional feature.

##Basic feature.
```javascript
import lorem from 'lorem-ipsum-simple';
lorem(20) // => generate mock text.
console.log(lorem(20))
// => Tristique tristique eu pharetra eleifend blandit vitae tellus quis ante cursus molestie eget sodales rhoncus turpis vulputate praesent aliquam elit tellus.
// like above result.
// you can add any type of number in argument. after call this function, it will render any words in your console.
// but maximum is 200. if you set over 200 number in argument, this function will render 200 words in your console.
```

## Background
Sometimes, I needed mocking text which like a lorem ipsom. I made it by assuming to use React.js environment.
