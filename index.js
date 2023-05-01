const fullKeyBoardKeys = [
  {192: {'en': '`', 'ru': 'ё', 'shiften': '~', 'shiftru': 'Ё'}, 49: {'en': '1', 'ru': '1', 'shiften': '!', 'shiftru': '!'}, 50: {'en': '2', 'ru': '2','shiften': '@', 'shiftru': '"'}, 51: {'en': '3', 'ru': '3','shiften': '#', 'shiftru': '№'}, 52: {'en': '4', 'ru': '4','shiften': '$', 'shiftru': ';'}, 53:{'en': '5', 'ru': '5','shiften': '%', 'shiftru': '%'}, 54: {'en': '6', 'ru': '6','shiften': '^', 'shiftru': ':'}, 55: {'en': '7', 'ru': '7','shiften': '&', 'shiftru': '?'}, 56: {'en': '8', 'ru': '8','shiften': '*', 'shiftru': '*'}, 57: {'en': '9', 'ru': '9','shiften': '(', 'shiftru': '('}, 48:{'en': '0', 'ru': '0','shiften': ')', 'shiftru': ')'}, 189:{'en': '-', 'ru': '-','shiften': '_', 'shiftru': '_'}, 187: {'en': '=', 'ru': '=','shiften': '+', 'shiftru': '+'}, 8:{'en': 'Backspace', 'ru': 'Бэкспейс'}},
  {9: {'en': 'Tab', 'ru': 'Таб'}, 81: {'en': 'q', 'ru': 'й'}, 87: {'en': 'w', 'ru': 'ц'}, 69: {'en': 'e', 'ru': 'у'}, 82: {'en': 'r', 'ru': 'к'}, 84:{'en': 't', 'ru': 'е'}, 89: {'en': 'y', 'ru': 'н'}, 85: {'en': 'u', 'ru': 'г'}, 73:{'en': 'i', 'ru': 'ш'}, 79: {'en': 'o', 'ru': 'щ'}, 80: {'en': 'p', 'ru': 'з'}, 219:{'en': '[','ru': 'х'}, 221:{'en': ']','ru': 'ъ'}, 220:{'en': '\\','ru': '\\','shiften': '|', 'shiftru': '/'}, 46:{'en': 'Delete','ru': 'Дэлит'}},
  // eslint-disable-next-line
  {20:{'en': 'CapsLk', 'ru': 'КапсЛк'}, 65: {'en': 'a', 'ru': 'ф'}, 83: {'en': 's', 'ru': 'ы'}, 68: {'en': 'd', 'ru': 'в'}, 70:{'en': 'f', 'ru': 'а'}, 71: {'en': 'g', 'ru': 'п'}, 72: {'en':'h', 'ru': 'р'}, 74: {'en': 'j', 'ru': 'о'}, 75: {'en': 'k', 'ru': 'л'}, 76: {'en': 'l', 'ru': 'д'}, 186: {'en': ';', 'ru': 'ж','shiften': ':', 'shiftru': 'Ж'}, 222:{'en': "'",'ru': 'э','shiften': '"', 'shiftru': 'Э'}, 13: {'en': 'Enter', 'ru': 'Энтер'}},
  // eslint-disable-next-line
  {16:{'en': 'Shift', 'ru': 'Шифт'},220: {'en': '\\','ru': '\\'}, 88:{'en': 'z', 'ru': 'я'}, 90: {'en': 'x', 'ru': 'ч'}, 67: {'en': 'c', 'ru': 'с'}, 86: {'en': 'v', 'ru': 'м'}, 66: {'en': 'b', 'ru': 'и'}, 78:{'en': 'n', 'ru': 'т'}, 77: {'en': 'm','ru': 'ь'}, 188: {'en': ',', 'ru': 'б','shiften': '<', 'shiftru': 'Ю'}, 190: {'en': '.', 'ru': 'ю','shiften': '>', 'shiftru': 'Ю'}, 191:{'en': '/', 'ru': '.','shiften': '?', 'shiftru': ','}, 38:{'en': '&uarr;', 'ru': '&uarr;'}, 16: {'en': 'Shift', 'ru': 'Шифт'}},
  // eslint-disable-next-line
  {17: {'en':'Ctrl', 'ru': 'Ктрл'}, 91: {'en': 'Win', 'ru': 'Вин'}, 18:{'en': 'Alt', 'ru': 'Алт'}, 32:{'en': ' ', 'ru': ' '}, 18: {'en': 'Alt','ru': 'Алт'}, 17: {'en': 'Ctrl', 'ru': 'Ктрл'}, 37: {'en': '&larr;','ru': '&larr;'}, 40:{'en': '&darr;', 'ru': '&darr;'}, 39: {'en':'&rarr;', 'ru': '&rarr;'}}
];
const keyboardKeysCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 220, 88, 90, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
  [17, 91, 18, 32, 18, 17, 37, 40, 39]
];
const userEvents = ['keydown', 'keyup', 'mousedown', 'mouseup',];

console.log('%cHello my friend. Stroke 178 in index.js - Here is destructuring example: const {key: currentKey} = key.dataset;', 'color: aqua');

let currentLanguage = localStorage.getItem('currLang') || 'en';

function initFirstScreen() {
  const BODY = document.body;
  const KEYBOARD_SECTION = document.createElement('section');
  const KEYBOARD_CONTAINER = document.createElement('div');
  const TEXT_AREA = document.createElement('textarea');
  const TEXT_SCREEN_PLACE_HOLDER = (currentLanguage === 'en') ?
    'Change language use: Ctrl + Alt . . . \nKeyboard was created on Windows':
    'Сменить язык клацай Ктрл + Алт . . . \nКлава была сделана на Винде';

  KEYBOARD_SECTION.classList = 'keyboard';
  BODY.prepend(KEYBOARD_SECTION);

  KEYBOARD_CONTAINER.classList = 'keyboard__container';
  KEYBOARD_SECTION.prepend(KEYBOARD_CONTAINER);

  TEXT_AREA.classList = 'keyboard__screen';
  TEXT_AREA.placeholder = TEXT_SCREEN_PLACE_HOLDER;
  KEYBOARD_SECTION.prepend(TEXT_AREA);
  initKeyboardsBtns(KEYBOARD_CONTAINER);
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
      keyboardKey.dataset.location = 0;
      keyboardRow.appendChild(keyboardKey);
    }

    keyboardContainer.appendChild(keyboardRow);
  }

  const SHIFTS = document.querySelectorAll('[data-key="16"]');
  SHIFTS[0].dataset.location = 1;
  SHIFTS[1].dataset.location = 2;
  const CTRLS = document.querySelectorAll('[data-key="17"]');
  CTRLS[0].dataset.location = 1;
  CTRLS[1].dataset.location = 2;
  const ALTS = document.querySelectorAll('[data-key="18"]');
  ALTS[0].dataset.location = 1;
  ALTS[1].dataset.location = 2;
  const BACK_SLAH_KEYS = document.querySelectorAll('[data-key="220"]');
  BACK_SLAH_KEYS[0].dataset.location = 0;
  BACK_SLAH_KEYS[1].dataset.location = 0;
  const WINDOWS_KEY = document.querySelector('[data-key="91"]');
  WINDOWS_KEY.dataset.location = 1;
}

function handleUserEvents(event) {
  const ENTER = 13;
  const DELETE = 46;
  const TAB = 9;
  const KEY_BTNS = Array.from(document.querySelectorAll('.keyboard__key'));
  const TEXT_AREA = document.querySelector('.keyboard__screen');
  const CAPSLOCK = 20;
  const CTRL = 17;
  const ALT = 18;
  const BACKSPACE = 8;
  const SHIFT = 16;
  const SYMBOL_KEYS = ['55', '188', '190'];
  let currentKeyBtn;
  let isMouseDownOrKeyDown = event.type === 'mousedown' || event.type === 'keydown';
  let isMouseUpOrKeyUp = event.type === 'mouseup' || event.type === 'keyup';

  currentKeyBtn = (event.type === 'mousedown' || event.type === 'mouseup') ? event.target :
    KEY_BTNS.find((btn) =>(Number(btn.dataset.key) === event.keyCode && Number(btn.dataset.location) === event.location)); 

  if (event.type === 'keyup' || event.type === 'keydown') {
    event.preventDefault();
  }
  TEXT_AREA.focus();

  let currentDatasetKey = Number(currentKeyBtn.dataset.key);

  if(isMouseDownOrKeyDown && currentKeyBtn.classList.contains('keyboard__key')){
    TEXT_AREA.value = (currentKeyBtn.textContent.length < 2 || SYMBOL_KEYS.includes(currentDatasetKey) ) ?
      TEXT_AREA.value + currentKeyBtn.textContent : TEXT_AREA.value;
    TEXT_AREA.selectionEnd = TEXT_AREA.value.length;
    TEXT_AREA.blur();
  }

  if (currentDatasetKey === CTRL ||currentDatasetKey === ALT){  
    changeKeyboardLanguage(event, currentDatasetKey);
  }

  if((currentDatasetKey === BACKSPACE && event.type === 'keydown') || (currentDatasetKey === BACKSPACE && event.type === 'mousedown')) {
    const cursorPos = TEXT_AREA.selectionStart;
    let newValue = TEXT_AREA.value.substring(0, cursorPos - 1) + TEXT_AREA.value.substring(cursorPos);
    TEXT_AREA.value = newValue;
    TEXT_AREA.selectionStart = cursorPos - 1;
    TEXT_AREA.selectionEnd = cursorPos - 1;   
  }

  if (currentDatasetKey === CAPSLOCK && isMouseUpOrKeyUp) { 
    toggleCase(event,currentDatasetKey);
  } else if (currentDatasetKey === SHIFT) { 
    toggleCase(event,currentDatasetKey);
  }

  if (currentDatasetKey === TAB && isMouseUpOrKeyUp) {
    TEXT_AREA.value = TEXT_AREA.value + '  ';
  }

  if (currentDatasetKey === DELETE && isMouseUpOrKeyUp) {
    const index = TEXT_AREA.selectionStart;
    const newValue = TEXT_AREA.value.substring(0, index) + TEXT_AREA.value.substring(index + 1);
    TEXT_AREA.value = newValue;
    TEXT_AREA.selectionStart = index;
    TEXT_AREA.selectionEnd = index;
  }

  if (currentDatasetKey === ENTER && isMouseUpOrKeyUp) {
    const newLine = '\n'; 
    const cursorPos = TEXT_AREA.selectionStart; 
    const textBeforeCursor = TEXT_AREA.value.substring(0, cursorPos); 
    const textAfterCursor = TEXT_AREA.value.substring(cursorPos); 
    TEXT_AREA.value = textBeforeCursor + newLine + textAfterCursor; 
    TEXT_AREA.selectionStart = cursorPos + 1; 
    TEXT_AREA.selectionEnd = cursorPos + 1; 
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

function changeKeyboardLanguage(event, currentDatasetKey){
  const KEYBOARD_KEYS = document.querySelectorAll('.keyboard__key');
  const TEXT_SCREEN = document.querySelector('.keyboard__screen');
  const CTRL_BTNS = document.querySelectorAll('[data-key="17"]');
  const ALT_BTNS = document.querySelectorAll('[data-key="18"]');
  const ALT = 18;
  const CTRL = 17;
  const flag = ['mousedown', 'keydown'].includes(event.type);
  const isAltPressedWithActiveCtrl = currentDatasetKey === ALT && (CTRL_BTNS[0].classList.contains('is-active') || CTRL_BTNS[1].classList.contains('is-active'));
  const isCtrlPressedWithActiveAlt = currentDatasetKey === CTRL && (ALT_BTNS[0].classList.contains('is-active') || ALT_BTNS[1].classList.contains('is-active'));
  
  
  if ((isAltPressedWithActiveCtrl || isCtrlPressedWithActiveAlt) && (currentDatasetKey === ALT || currentDatasetKey === CTRL) && flag) {
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
  
    KEYBOARD_KEYS.forEach(key => {
      const {key: currentKey} = key.dataset;
  
      fullKeyBoardKeys.forEach(keysRow => {
        // eslint-disable-next-line
        if (keysRow.hasOwnProperty(currentKey)) {
          key.innerHTML = keysRow[currentKey][currentLanguage];
        }
      });
    });
  
    TEXT_SCREEN.placeholder = (currentLanguage === 'en') ?
      'Change language use: Ctrl + Alt . . . \nKeyboard was created on Windows' :
      'Сменить язык клацай Ктрл + Алт . . . \nКлава была сделана на Винде';
  }

  localStorage.setItem('currLang', currentLanguage);
}

function toggleCase(event, currentDatasetKey) {
  const SHIFT = 16;
  const CAPSLOCK = 20;
  const CAPSLK_BTN = document.querySelector('[data-key="20"]');
  const KEY_BTNS = Array.from(document.querySelectorAll('.keyboard__key'));
  let firstLett = document.querySelector('[data-key="81"]').textContent;
  let isLettLowerCase = (firstLett === firstLett.toLowerCase()) ? true : false;

  if ((currentDatasetKey === CAPSLOCK && !CAPSLK_BTN.classList.contains('caps')) ||
  (currentDatasetKey === SHIFT && event.type === 'mousedown' || currentDatasetKey === SHIFT && event.type === 'keydown')){ 
    if (isLettLowerCase) {
      KEY_BTNS.forEach(key => {
        const text = key.textContent;
        if (text.length === 1) {
          key.textContent = text.toUpperCase();
        }
      });
      if(currentDatasetKey === CAPSLOCK){
        CAPSLK_BTN.classList.add('caps');
      }
    } 
  } else { 
    
    KEY_BTNS.forEach(key => {
      const text = key.textContent;
      if (text.length === 1) {
        key.textContent = text.toLowerCase();
      }
    });
    if(currentDatasetKey === CAPSLOCK && CAPSLK_BTN.classList.contains('caps')){
      CAPSLK_BTN.classList.remove('caps');
    }
  }


  if (currentDatasetKey === SHIFT && event.type === 'mousedown' || currentDatasetKey === SHIFT && event.type === 'keydown') {
      
    for(let i = 0; i < KEY_BTNS.length; i++) {
      const key = KEY_BTNS[i];
      const dataKey = key.getAttribute('data-key');
      // eslint-disable-next-line
      const obj = fullKeyBoardKeys.find(item => item.hasOwnProperty(dataKey));
      if (obj && `shift${currentLanguage}` in obj[dataKey]) {
        key.innerHTML = obj[dataKey][`shift${currentLanguage}`];
      }
      CAPSLK_BTN.classList.remove('caps');
    }
  } else if(currentDatasetKey === SHIFT && event.type === 'mouseup' || currentDatasetKey === SHIFT && event.type === 'keyup') {
    for(let i = 0; i < KEY_BTNS.length; i++) {
      const key = KEY_BTNS[i];
      const dataKey = key.getAttribute('data-key');
      // eslint-disable-next-line
      const obj = fullKeyBoardKeys.find(item => item.hasOwnProperty(dataKey));
      if (obj && currentLanguage in obj[dataKey]) {
        key.innerHTML = obj[dataKey][currentLanguage];
      }
    }
    CAPSLK_BTN.classList.remove('caps');
  }

}

initFirstScreen();
userEvents.forEach((event) => {
  document.addEventListener(event, handleUserEvents);
});
