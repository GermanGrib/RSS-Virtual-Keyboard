const fullKeyBoardKeys = [
  {192: {'en': '`', 'ru': 'ё', 'shiften': '~', 'shiftru': 'Ё'}, 49: {'en': '1', 'ru': '1', 'shiften': '!', 'shiftru': '!'}, 50: {'en': '2', 'ru': '2','shiften': '@', 'shiftru': '"'}, 51: {'en': '3', 'ru': '3','shiften': '#', 'shiftru': '№'}, 52: {'en': '4', 'ru': '4','shiften': '$', 'shiftru': ';'}, 53:{'en': '5', 'ru': '5','shiften': '%', 'shiftru': '%'}, 54: {'en': '6', 'ru': '6','shiften': '^', 'shiftru': ':'}, 55: {'en': '7', 'ru': '7','shiften': '&', 'shiftru': '?'}, 56: {'en': '8', 'ru': '8','shiften': '*', 'shiftru': '*'}, 57: {'en': '9', 'ru': '9','shiften': '(', 'shiftru': '('}, 48:{'en': '0', 'ru': '0','shiften': ')', 'shiftru': ')'}, 189:{'en': '-', 'ru': '-','shiften': '_', 'shiftru': '_'}, 187: {'en': '=', 'ru': '=','shiften': '+', 'shiftru': '+'}, 8:{'en': 'Backspace', 'ru': 'Бэкспейс'}},
  {9: {'en': 'Tab', 'ru': 'Таб'}, 81: {'en': 'q', 'ru': 'й'}, 87: {'en': 'w', 'ru': 'ц'}, 69: {'en': 'e', 'ru': 'у'}, 82: {'en': 'r', 'ru': 'к'}, 84:{'en': 't', 'ru': 'е'}, 89: {'en': 'y', 'ru': 'н'}, 85: {'en': 'u', 'ru': 'г'}, 73:{'en': 'i', 'ru': 'ш'}, 79: {'en': 'o', 'ru': 'щ'}, 80: {'en': 'p', 'ru': 'з'}, 219:{'en': '[','ru': 'х'}, 221:{'en': ']','ru': 'ъ'}, 220:{'en': '\\','ru': '\\','shiften': '|', 'shiftru': '/'}, 46:{'en': 'Delete','ru': 'Дэлит'}},
  {20:{'en': 'CapsLk', 'ru': 'КапсЛк'}, 65: {'en': 'a', 'ru': 'ф'}, 83: {'en': 's', 'ru': 'ы'}, 68: {'en': 'd', 'ru': 'в'}, 70:{'en': 'f', 'ru': 'а'}, 71: {'en': 'g', 'ru': 'п'}, 72: {'en':'h', 'ru': 'р'}, 74: {'en': 'j', 'ru': 'о'}, 75: {'en': 'k', 'ru': 'л'}, 76: {'en': 'l', 'ru': 'д'}, 186: {'en': ';', 'ru': 'ж','shiften': ':', 'shiftru': 'Ж'}, 222:{'en': "'",'ru': 'э','shiften': '"', 'shiftru': 'Э'}, 13: {'en': 'Enter', 'ru': 'Энтер'}},
  {16:{'en': 'Shift', 'ru': 'Шифт'},220: {'en': '\\','ru': '\\'}, 88:{'en': 'z', 'ru': 'я'}, 90: {'en': 'x', 'ru': 'ч'}, 67: {'en': 'c', 'ru': 'с'}, 86: {'en': 'v', 'ru': 'м'}, 66: {'en': 'b', 'ru': 'и'}, 78:{'en': 'n', 'ru': 'т'}, 77: {'en': 'm','ru': 'ь'}, 188: {'en': ',', 'ru': 'б','shiften': '<', 'shiftru': 'Ю'}, 190: {'en': '.', 'ru': 'ю','shiften': '>', 'shiftru': 'Ю'}, 191:{'en': '/', 'ru': '.','shiften': '?', 'shiftru': ','}, 38:{'en': '&uarr;', 'ru': '&uarr;'}, 16: {'en': 'Shift', 'ru': 'Шифт'}},
  {17: {'en':'Ctrl', 'ru': 'Ктрл'}, 91: {'en': 'Win', 'ru': 'Вин'}, 18:{'en': 'Alt', 'ru': 'Алт'}, 32:{'en': ' ', 'ru': ' '}, 18: {'en': 'Alt','ru': 'Алт'}, 17: {'en': 'Ctrl', 'ru': 'Ктрл'}, 37: {'en': '&larr;','ru': '&larr;'}, 40:{'en': '	&darr;', 'ru': '	&darr;'}, 39: {'en':'&rarr;', 'ru': '&rarr;'}}
];
const keyboardKeysCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 220, 88, 90, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 17, 37, 40, 39]
];
const userEvents = ['keydown', 'keyup', 'mousedown', 'mouseup',];

let currentLanguage = 'en';
let flag = false;

function initFirstScreen() {
  const body = document.body;
  const keyboardSection = document.createElement('section');
  const keyboardContainer = document.createElement('div');
  const textScreen = document.createElement('textarea');
  const textScreenPlaceholder = 'To change language use Ctrl + Alt . . . \nKeyboard was created on Windows';

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
    for (let j = 0; j < keyboardKeysCode[i].length; j++) {
      const currentKey = keyboardKeysCode[i][j];
      const keyboardKey = document.createElement('div');
      keyboardKey.classList.add('keyboard__key');
      keyboardKey.innerHTML = fullKeyBoardKeys[i][currentKey][currentLanguage];
      keyboardKey.dataset.key = currentKey;
      keyboardRow.appendChild(keyboardKey);
    }

    keyboardContainer.appendChild(keyboardRow);
  }

  const keyboardKeys = document.querySelectorAll('.keyboard__key');

  keyboardKeys.forEach((key, index) => {
    key.dataset.location = 0;
    key.dataset.key = key.dataset.key || index; 
  
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

//! Need to handle & <> - don't work
function handleUserEvents(event) {
  const KEY_BTNS = Array.from(document.querySelectorAll('.keyboard__key'));
  const TEXT_AREA = document.querySelector('.keyboard__screen');
  const CAPSLOCK = 20;
  const CTRL = 17;
  const ALT = 18;
  const BACKSPACE = 8;
  const SHIFT = 16;
  const ARROW_KEYS = [37, 38, 39, 40];
  const SYMBOL_KEYS = ['55', '188', '190'];
  let currentKeyBtn;
  let isMouseDownOrKeyDown = event.type === 'mousedown' || event.type === 'keydown';
  let isMouseUpOrKeyUp = event.type === 'mouseup' || event.type === 'keyup';

  currentKeyBtn = (event.type === 'mousedown' || event.type === 'mouseup') ? event.target :
    currentKeyBtn = KEY_BTNS.find((btn) =>(Number(btn.dataset.key) === event.keyCode && Number(btn.dataset.location) === event.location)); 

  TEXT_AREA.focus();

  let currentDatasetKey = Number(currentKeyBtn.dataset.key);

  if(isMouseDownOrKeyDown && currentKeyBtn.classList.contains('keyboard__key')){
    TEXT_AREA.value = (currentKeyBtn.innerHTML.length < 2 || SYMBOL_KEYS.includes(currentDatasetKey) ) ?
      TEXT_AREA.value + currentKeyBtn.textContent : TEXT_AREA.value;
    TEXT_AREA.selectionEnd = TEXT_AREA.value.length;
    TEXT_AREA.blur();
  }

  if (currentDatasetKey === CTRL ||currentDatasetKey === ALT){  
    changeKeyboardLanguage(event);
  }

  if((currentDatasetKey === BACKSPACE && event.type === 'keydown') || (currentDatasetKey === BACKSPACE && event.type === 'mousedown')) { //Backspace
    TEXT_AREA.value = TEXT_AREA.value.slice(0, -1);
  }

  if ((ARROW_KEYS.includes(currentDatasetKey) && event.type === 'mouseup') ||
   (ARROW_KEYS.includes(currentDatasetKey) && event.type === 'keyup')) { 
    moveCursor(currentDatasetKey);
  }

  if (currentDatasetKey === CAPSLOCK && event.type === 'keyup') { 
    toggleCase(event);
  } else if (currentDatasetKey === SHIFT) { 
    toggleCase(event);
  } 

  if(currentKeyBtn.classList.contains('keyboard__key') && isMouseDownOrKeyDown) {
    currentKeyBtn.classList.add('is-active');
  } else if(currentKeyBtn.classList.contains('keyboard__key') && isMouseUpOrKeyUp) {
    currentKeyBtn.classList.remove('is-active');
  } else if(currentKeyBtn.classList.contains('keyboard__row')) {
    return;
  } 

  KEY_BTNS.forEach(btn => btn.addEventListener('mouseleave', () => KEY_BTNS.forEach(
    el => el.classList.remove('is-active'))
  ));
}

function changeKeyboardLanguage(event){
  const KEYBOARD_KEYS = document.querySelectorAll('.keyboard__key');
  const TEXT_SCREEN = document.querySelector('.keyboard__screen');
  const CTRL_BTNS = document.querySelectorAll('[data-key="17"]');
  const ALT_BTNS = document.querySelectorAll('[data-key="18"]');
  const ALT = 18;
  const CTRL = 17;
  const isAltPressedWithActiveCtrl = event.keyCode === ALT && (CTRL_BTNS[0].classList.contains('is-active') || CTRL_BTNS[1].classList.contains('is-active'));
  const isCtrlPressedWithActiveAlt = event.keyCode === CTRL && (ALT_BTNS[0].classList.contains('is-active') || ALT_BTNS[1].classList.contains('is-active'));

  flag = (event.type === 'mousedown' || event.type === 'keydown') && true;

  if ((isAltPressedWithActiveCtrl || isCtrlPressedWithActiveAlt) && (event.keyCode === ALT || event.keyCode === CTRL) && flag) {
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
  
    KEYBOARD_KEYS.forEach(key => {
      const currentKey = key.dataset.key;
  
      fullKeyBoardKeys.forEach(keysRow => {
        if (keysRow.hasOwnProperty(currentKey)) {
          key.innerHTML = keysRow[currentKey][currentLanguage];
        }
      });
    });
  
    TEXT_SCREEN.placeholder = (currentLanguage === 'en') ?
      'To change language use Ctrl + Alt . . . \nKeyboard was created on Windows' :
      'Сменить язык клацай Ктрл + Алт . . . \nклава была сделана на Винде';
  }
}

function toggleCase(event) {
  const SHIFT = 16;
  const CAPSLOCK = 20;
  const keyBtns = Array.from(document.querySelectorAll('.keyboard__key'));
  let firstLett = document.querySelector('[data-key="81"]').textContent;
  let isLettLowerCase = (firstLett === firstLett.toLowerCase()) ? true : false;
  let capsLk = document.querySelector('[data-key="20"]');

  if ((event.keyCode === CAPSLOCK && !capsLk.classList.contains('caps')) ||
   (event.keyCode === SHIFT && event.type === 'mousedown' || event.keyCode === SHIFT && event.type === 'keydown')){ 
    if (isLettLowerCase) {
      keyBtns.forEach(key => {
        const text = key.textContent;
        if (text.length === 1) {
          key.textContent = text.toUpperCase();
        }
      });
      if(event.keyCode === CAPSLOCK){
        capsLk.classList.add('caps');
      }
    } 
  } else { 
    
    keyBtns.forEach(key => {
      const text = key.textContent;
      if (text.length === 1) {
        key.textContent = text.toLowerCase();
      }
    });
    if(event.keyCode === CAPSLOCK && capsLk.classList.contains('caps')){
      capsLk.classList.remove('caps');
    }
  }


  if (event.keyCode === SHIFT && event.type === 'mousedown' || event.keyCode === SHIFT && event.type === 'keydown') {
      
    for(let i = 0; i < keyBtns.length; i++) {
      const key = keyBtns[i];
      const dataKey = key.getAttribute('data-key');
      const obj = fullKeyBoardKeys.find(item => item.hasOwnProperty(dataKey));
      if (obj && `shift${currentLanguage}` in obj[dataKey]) {
        key.innerHTML = obj[dataKey][`shift${currentLanguage}`]
      }
    }
  } else if(event.keyCode === SHIFT && event.type === 'mouseup' || event.keyCode === SHIFT && event.type === 'keyup') {
    for(let i = 0; i < keyBtns.length; i++) {
      const key = keyBtns[i];
      const dataKey = key.getAttribute('data-key');
      const obj = fullKeyBoardKeys.find(item => item.hasOwnProperty(dataKey));
      if (obj && currentLanguage in obj[dataKey]) {
        key.innerHTML = obj[dataKey][currentLanguage];
      }
    }
  }

}

function moveCursor(key) {
  const textArea = document.querySelector('.keyboard__screen');

  switch (String(key)) {
  case '38':
    moveCursorUp();
    break;
  case '40':
    moveCursorDown();
    break;
  case '37':
    moveCursorLeft();
    break; 
  case '39':
    moveCursorRight();
    break;
  }

  function moveCursorUp() {
    const currentPosition = textArea.selectionStart;
    const newPosition = currentPosition - textArea.cols;
    if (newPosition >= 0) {
      textArea.setSelectionRange(newPosition, newPosition);
    }
  }

  function moveCursorDown() {
    const currentPosition = textArea.selectionStart;
    const newPosition = currentPosition + textArea.cols;
    if (newPosition <= textArea.value.length) {
      textArea.setSelectionRange(newPosition, newPosition);
    }
  }
  
  function moveCursorLeft() {
    const currentPosition = textArea.selectionStart;
    const newPosition = currentPosition - 1;
    if (newPosition >= 0) {
      textArea.setSelectionRange(newPosition, newPosition);
    }
  }
  
  function moveCursorRight() {
    const currentPosition = textArea.selectionStart;
    const newPosition = currentPosition + 1;
    if (newPosition <= textArea.value.length) {
      textArea.setSelectionRange(newPosition, newPosition);
    }
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
// })