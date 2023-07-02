# Alina Cherkasova

## Contact information:

- **Location:** Moscow, Russia
- **Phone:** +7 999 918 43 73
- **E-mail:** alina.ch1202@gmail.com
- **Telegram:** @cherkasova_aa
- [LinkedIn](https://www.linkedin.com/in/alinacherkasova/)
- [Github](https://github.com/cherkasovaa)

## Skills and Proficiency:

- HTML5
- CSS3 (SCSS, Less)
- CSS Framework: Bootstrap
- BEM
- JavaScript (ES5+)
- JQuery
- ActionScript3
- Gulp
- Git
- Figma, Photoshop
- Editors: VSCode, Sublime

## Summary

Self-motivated developer with 2 years commercial experience in the gaming industry. Seeking to use proven skills in JavaScript and project management via JIRA to meet business needs.

## Experience

- HTML5 Developer.
  Absolutist Ltd.
  December 2018 – January 2020.

  Key Achievement:

  - Ported more than 40 flash games to JavaScript;
  - Introducted adaptation of games for mobile devices;
  - Created and maintained documentation;
  - Mentoring

  Some finished projects:

  - [Blocks](https://wellgames.com/ru/free_online/blocks/)
  - [Into Space](https://wellgames.com/ru/free_online/into-space/)
  - [Fly Squirrel Fly 2](https://wellgames.com/ru/free_online/fly-squirrel-fly-2/)
  - [Summon the hero](https://wellgames.com/ru/free_online/summon-the-hero/)
  - [Sugar tales](https://wellgames.com/ru/free_online/sugar-tales/)
  - [Cover Orange: Journey Pirates](https://absolutist.com/online/cover-orange-journey-pirates/)

- My projects during courses:

  - Websites:

    - [Shelter](https://rolling-scopes-school.github.io/cherkasovaa-JSFE2022Q1/shelter/pages/main/)
    - [Photographer's portfolio](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/portfolio/)
    - [Tattos Website](https://cherkasovaa.github.io/tattoo/)

  - Applications:

    - [Random jokes](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/random-jokes/)
    - [Custom audio player](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/audio-player/)
    - [Eco sounds](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/eco-sounds)
    - [Momentum](https://rolling-scopes-school.github.io/cherkasovaa-JSFE2021Q3/momentum/)
    - [Image Gallery](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/image-galery)

  - Games
    - [Memory](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/memory-game/)
    - [Tic tac toe](https://rolling-scopes-school.github.io/cherkasovaa-JSFEPRESCHOOL/tic-tac-toe/)

## Code examples:

**KATA from CODEWARS:** _The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value._

```javascript
function rgb(r, g, b) {
  r = createHex(r);
  g = createHex(g);
  b = createHex(b);

  return `${r}${g}${b}`;
}

function createHex(color) {
  if (color < 0) color = 0;
  if (color > 255) color = 255;

  let hex = color.toString(16).toUpperCase();
  return hex.length === 1 ? '0' + hex : hex;
}
```

**KATA from CODEWARS:** _Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'._

```javascript
function maskify(cc) {
  let result = cc
    .split('')
    .map((n, i, arr) => (arr.length - 5 < i ? n : '#'))
    .join('');

  return result;
}
```

## Courses and Education:

- 2021-2022 - JS Rolling Scopes School:
  Front-end Developer
  [Certificate](https://app.rs.school/certificate/6t0l85gj#)
- 2019 - HTML5 & CSS3:
  Introduction to Frontend Website Development. GeekBrain
  [Certificate](https://gb.ru/certificates/654907.en#)
- 2018 - Front-end Basic:
  HTML5 & CSS3
  [Certificate](https://admin.itschool-hillel.org/certificate/HISD46309649-en.png)
- 2018 - Front-end Pro:
  Basic knowledge of JavaScript (ES5, ES6+)
  [Certificate](https://admin.ithillel.ua/certificate/HISD59043827-en.pdf)

## Languages:

- Russian - native
- Ukrainian - advance
- English - B1
- Polish - A2
