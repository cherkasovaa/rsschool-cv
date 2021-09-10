# Alina Cherkasova
## Contact information:
* *Phone:* +48 883 192 426
* *E-mail:* alina.ch1202@gmail.com
* *Telegram:* @alina_gd_pl
* [LinkedIn](https://www.linkedin.com/in/alinacherkasova/)
* [Github](https://github.com/cherkasovaa)
## Skills and Proficiency:
* HTML5
* CSS3 (SCSS, Less)
* CSS Framework: Bootstrap
* BEM
* JavaScript (ES5+)
* JQuery
* ActionScript3
* Gulp
* Git
* Figma, Photoshop
* Editors: VSCode, Sublime
## Code examples:
*KATA from CODEWARS:* **An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.**
```javascript
function isIsogram(str){
  let setSize = new Set(str.toLowerCase()).size;
  return setSize === str.length ? true : false
}
```

*KATA from CODEWARS:* **Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. /n Your task is to write a function maskify, which changes all but the last four characters into '#'.**
```javascript
function maskify(cc) {
  let result = cc.split('')
                  .map((n, i, arr) => arr.length - 5 < i ? n : "#")
                  .join('');

  return result;
}
```
## Courses and Education:
* GeekBrain
  HTML5 & CSS3. Introduction to Frontend Website Development
[Certificate](https://gb.ru/certificates/654907.en#)
* Front-end Basic
  HTML5 & CSS3
[Certificate](https://admin.itschool-hillel.org/certificate/HISD46309649-en.png)
* Front-end Pro
  Basic knowledge of JavaScript (ES5, ES6+)
[Certificate](https://admin.ithillel.ua/certificate/HISD59043827-en.pdf)
## Languages:
* Russian - native
* Ukrainian - advance
* English - B1
* Polish - A1
