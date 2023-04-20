const fullEnKeyboardKeys = [
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
  ],
  [
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Delete',
  ],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  [
    'Shift',
    '\\',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    'ArrowUp',
    'Shift',
  ],
  [
    'Control',
    'Meta',
    'Alt',
    ' ',
    'Alt',
    'Control',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ],
];

let fullRuKeyboardKey = [
  [
    'ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
  ],
  [
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Delete',
  ],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  [
    'Shift',
    '\\',
    'я',
    'ч',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    'ArrowUp',
    'Shift',
  ],
  [
    'Control',
    'Meta',
    'Alt',
    ' ',
    'Control',
    'AltGraph',
    'Control',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ],
];

let currentLanguage = 'en';

// Init first screen
function firstScreen() {
  const body = document.body;
  const keyboardSection = document.createElement('section');
  const keyboardContainer = document.createElement('div');
  const textScreen = document.createElement('textarea');
  const textScreenPlaceholder = `I'll be there for you . . .`;

  keyboardSection.classList = 'keyboard';
  body.prepend(keyboardSection);

  keyboardContainer.classList = 'keyboard__container';
  keyboardSection.prepend(keyboardContainer);

  textScreen.classList = 'keyboard__screen';
  textScreen.placeholder = textScreenPlaceholder;
  keyboardSection.prepend(textScreen);
  initKeyboardsBtns(keyboardContainer);
}

function initKeyboardsBtns(keyboardContainer) {
  let currentArray =
    currentLanguage === 'en' ? fullEnKeyboardKeys : fullRuKeyboardKeys;

  for (let i = 0; i < currentArray.length; i++) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');

    for (let j = 0; j < currentArray[i].length; j++) {
      const keyboardKey = document.createElement('div');
      keyboardKey.classList.add('keyboard__key');
      keyboardKey.textContent = currentArray[i][j];
      keyboardRow.appendChild(keyboardKey);
    }

    keyboardContainer.appendChild(keyboardRow);
  }
}

firstScreen();

// let temporaryArray = [];

// document.addEventListener('keydown', function (event) {
//   // console.log(event.key)
//   temporaryArray.push(event.key);
//   console.log(temporaryArray);
// });
