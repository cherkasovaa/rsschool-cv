# Alina Cherkasova

================================================================

## Contact information

**Location:** Moscow, Russia
**Phone:** +7 999 918 43 73
**E-mail:** alina.ch1202@yandex.com
**Telegram:** @cherkasova_aa
[Github](https://github.com/cherkasovaa)
[LinkedIn](https://www.linkedin.com/in/alinacherkasova/)

================================================================

## Summary

Enthusiastic and motivated Frontend Developer eager to leverage strong skills in HTML, CSS, JavaScript (ES6+), and React to create beautiful and user-friendly web applications.

Experienced in porting legacy code to modern web technologies and optimizing for performance and cross-browser compatibility. 

Proven ability to work both independently and collaboratively to deliver high-quality results within challenging and fast-paced environments. 

Seeking a role where I can contribute to innovative projects and continue to learn and grow as a front-end developer.

================================================================

## Skills and Proficiency

* **Main skills:**
  - HTML5
  - CSS3 (SASS/SCSS, Less)
  - JavaScript (ES5+)
  - TypeScript
* **Frameworks & Libraries:**
  - Bootstrap
  - React
* **Metodologic:**
  - BEM
* **Tools:**
  - Webpack
  - Gulp
  - Grunt
  - Git
  - IDE: VSCode
  - Figma, Photoshop
  
================================================================

## Code examples:

**KATA from CODEWARS:** _Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'_

```javascript
function maskify(cc) {
  let result = cc.split('')
                  .map((n, i, arr) => arr.length - 5 &lt; i ? n : "#")
                  .join('');

  return result;
}
```