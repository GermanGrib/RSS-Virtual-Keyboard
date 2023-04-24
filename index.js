const fullKeyBoardKeys = [
  {192: {'en': '`', 'ru': 'ё'}, 49: {'en': '1', 'ru': '1'}, 50: {'en': '2', 'ru': '2'}, 51: {'en': '3', 'ru': '3'}, 52: {'en': '4', 'ru': '4'}, 53:{'en': '5', 'ru': '5'}, 54: {'en': '6', 'ru': '6'}, 55: {'en': '7', 'ru': '7'}, 56: {'en': '8', 'ru': '8'}, 57: {'en': '9', 'ru': '9'}, 48:{'en': '0', 'ru': '0'}, 189:{'en': '-', 'ru': '-'}, 187: {'en': '=', 'ru': '='}, 8:{'en': 'Backspace', 'ru': 'Backspace'}},
  {9: {'en': 'Tab', 'ru': 'Tab'}, 81: {'en': 'q', 'ru': 'й'}, 87: {'en': 'w', 'ru': 'ц'}, 69: {'en': 'e', 'ru': 'у'}, 82: {'en': 'r', 'ru': 'к'}, 84:{'en': 't', 'ru': 'е'}, 89: {'en': 'y', 'ru': 'н'}, 85: {'en': 'u', 'ru': 'г'}, 73:{'en': 'i', 'ru': 'ш'}, 79: {'en': 'o', 'ru': 'щ'}, 80: {'en': 'p', 'ru': 'з'}, 219:{'en': '[','ru': 'х'}, 221:{'en': ']','ru': 'ъ'}, 220:{'en': '\\','ru': '\\'}, 46:{'en': 'Delete','ru': 'Delete'}},
  {20:{'en': 'CapsLk', 'ru': 'CapsLk'}, 65: {'en': 'a', 'ru': 'ф'}, 83: {'en': 's', 'ru': 'ы'}, 68: {'en': 'd', 'ru': 'в'}, 70:{'en': 'f', 'ru': 'а'}, 71: {'en': 'g', 'ru': 'п'}, 72: {'en':'h', 'ru': 'р'}, 74: {'en': 'j', 'ru': 'о'}, 75: {'en': 'k', 'ru': 'л'}, 76: {'en': 'l', 'ru': 'д'}, 186: {'en': ';', 'ru': 'ж'}, 222:{'en': "'",'ru': 'э'}, 13: {'en': 'Enter', 'ru': 'Enter'}},
  {16:{'en': 'Shift', 'ru': 'Shift'},220: {'en': '\\','ru': '\\'}, 88:{'en': 'z', 'ru': 'я'}, 90: {'en': 'x', 'ru': 'ч'}, 67: {'en': 'c', 'ru': 'с'}, 86: {'en': 'v', 'ru': 'м'}, 66: {'en': 'b', 'ru': 'и'}, 78:{'en': 'n', 'ru': 'т'}, 77: {'en': 'm','ru': 'ь'}, 188: {'en': ',', 'ru': 'б'}, 190: {'en': '.', 'ru': 'ю'}, 191:{'en': '/', 'ru': '.'}, 38:{'en': 'ArrowUp', 'ru': 'ArrowUp'}, 16: {'en': 'Shift', 'ru': 'Shift'}},
  {17: {'en':'Ctrl', 'ru': 'Ctrl'}, 91: {'en': 'Win', 'ru': 'Win'}, 18:{'en': 'Alt', 'ru': 'Alt'}, 32:{'en': ' ', 'ru': ' '}, 18: {'en': 'Alt','ru': 'Alt'}, 17: {'en': 'Ctrl', 'ru': 'Ctrl'}, 37: {'en': 'ArrowLeft','ru': 'ArrowLeft'}, 40:{'en': 'ArrowDown', 'ru': 'ArrowDown'}, 39: {'en':'ArrowRight', 'ru': 'ArrowRight'}}
];
const keyboardKeysCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 220, 88, 90, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 17, 37, 40, 39]
];
const userEvents = ['keydown', 'keyup', 'mousedown', 'mouseup'];

let currentLanguage = 'en';

function initFirstScreen() {
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

  for (let i = 0; i < fullKeyBoardKeys.length; i++) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    for (let j =0; j < keyboardKeysCode[i].length; j++) {
      const currentKey = keyboardKeysCode[i][j];
      const keyboardKey = document.createElement('div');
      keyboardKey.classList.add('keyboard__key');
      keyboardKey.textContent = fullKeyBoardKeys[i][currentKey][currentLanguage];
      keyboardKey.dataset.key = currentKey;
      keyboardRow.appendChild(keyboardKey);
    }

    keyboardContainer.appendChild(keyboardRow);
  }

  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key, index) => {
    key.dataset.location = 0;
    key.dataset.key = key.dataset.key || index; // если data-key не задан, то использовать индекс
  
    // проверка наличия data-key у других элементов
    const keysWithSameDataKey = document.querySelectorAll(`[data-key="${key.dataset.key}"]`);
    if (keysWithSameDataKey.length > 1) {
      keysWithSameDataKey.forEach((key, index) => {
        key.dataset.location = index + 1;
      });
    }
  });

  let backSlashKey = document.querySelectorAll('[data-key="220"]');
  backSlashKey[0].dataset.location = 0;
  backSlashKey[1].dataset.location = 0;
  let winKey = document.querySelector('[data-key="91"]');
  winKey.dataset.location = 1;
}

//! Need to handle Ctrl, Alt and another(double Btns) 2) Handle Ctrl + R (and another combinations)
function handleUserEvents(event) {
  console.log(event.location)
  const keyBtns = Array.from(document.querySelectorAll('.keyboard__key'));
  const textArea = document.querySelector('.keyboard__screen');
  let currentKeyBtn;
  textArea.focus();

  switch (event.type) {
  case 'mousedown':
  case 'mouseup': {
    currentKeyBtn = event.target;
    break;
  }
  case 'keydown':
  case 'keyup': {
    currentKeyBtn = keyBtns.find((btn) =>(Number(btn.dataset.key) === event.keyCode && Number(btn.dataset.location) === event.location));
    break;
  }
  }

  if(currentKeyBtn.classList.contains('keyboard__key')){
    currentKeyBtn.classList.toggle('is-active');
  } else if(currentKeyBtn.classList.contains('keyboard__row')) {
    return;
  } 

}

initFirstScreen();
userEvents.forEach((event) => {
  document.addEventListener(event, handleUserEvents);
});

// let temporaryArray = [];

// document.addEventListener('keydown', function (event) {
//   temporaryArray.push(event.keyCode);
//   console.log(temporaryArray);
// });
