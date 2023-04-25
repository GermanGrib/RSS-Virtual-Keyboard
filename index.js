const fullKeyBoardKeys = [
  {192: {'en': '`', 'ru': 'ё'}, 49: {'en': '1', 'ru': '1'}, 50: {'en': '2', 'ru': '2'}, 51: {'en': '3', 'ru': '3'}, 52: {'en': '4', 'ru': '4'}, 53:{'en': '5', 'ru': '5'}, 54: {'en': '6', 'ru': '6'}, 55: {'en': '7', 'ru': '7'}, 56: {'en': '8', 'ru': '8'}, 57: {'en': '9', 'ru': '9'}, 48:{'en': '0', 'ru': '0'}, 189:{'en': '-', 'ru': '-'}, 187: {'en': '=', 'ru': '='}, 8:{'en': 'Backspace', 'ru': 'Бэкспейс'}},
  {9: {'en': 'Tab', 'ru': 'Таб'}, 81: {'en': 'q', 'ru': 'й'}, 87: {'en': 'w', 'ru': 'ц'}, 69: {'en': 'e', 'ru': 'у'}, 82: {'en': 'r', 'ru': 'к'}, 84:{'en': 't', 'ru': 'е'}, 89: {'en': 'y', 'ru': 'н'}, 85: {'en': 'u', 'ru': 'г'}, 73:{'en': 'i', 'ru': 'ш'}, 79: {'en': 'o', 'ru': 'щ'}, 80: {'en': 'p', 'ru': 'з'}, 219:{'en': '[','ru': 'х'}, 221:{'en': ']','ru': 'ъ'}, 220:{'en': '\\','ru': '\\'}, 46:{'en': 'Delete','ru': 'Дэлит'}},
  {20:{'en': 'CapsLk', 'ru': 'КапсЛк'}, 65: {'en': 'a', 'ru': 'ф'}, 83: {'en': 's', 'ru': 'ы'}, 68: {'en': 'd', 'ru': 'в'}, 70:{'en': 'f', 'ru': 'а'}, 71: {'en': 'g', 'ru': 'п'}, 72: {'en':'h', 'ru': 'р'}, 74: {'en': 'j', 'ru': 'о'}, 75: {'en': 'k', 'ru': 'л'}, 76: {'en': 'l', 'ru': 'д'}, 186: {'en': ';', 'ru': 'ж'}, 222:{'en': "'",'ru': 'э'}, 13: {'en': 'Enter', 'ru': 'Энтер'}},
  {16:{'en': 'Shift', 'ru': 'Шифт'},220: {'en': '\\','ru': '\\'}, 88:{'en': 'z', 'ru': 'я'}, 90: {'en': 'x', 'ru': 'ч'}, 67: {'en': 'c', 'ru': 'с'}, 86: {'en': 'v', 'ru': 'м'}, 66: {'en': 'b', 'ru': 'и'}, 78:{'en': 'n', 'ru': 'т'}, 77: {'en': 'm','ru': 'ь'}, 188: {'en': ',', 'ru': 'б'}, 190: {'en': '.', 'ru': 'ю'}, 191:{'en': '/', 'ru': '.'}, 38:{'en': '&uarr;', 'ru': '&uarr;'}, 16: {'en': 'Shift', 'ru': 'Шифт'}},
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
  const textScreenPlaceholder = 'To change language use Ctrl + d(D) . . . \nKeyboard was created on Windows';

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

//! Need to handle Ctrl, Alt and another(double Btns) 2) Handle Ctrl + R (and another combinations)
function handleUserEvents(event) {
  const keyBtns = Array.from(document.querySelectorAll('.keyboard__key'));
  const textArea = document.querySelector('.keyboard__screen');
  let currentKeyBtn;
  textArea.focus();

  switch (event.type) {
  case 'mousedown':
  case 'mouseup': {
    currentKeyBtn = event.target;
    let currentDatasetKey = Number(currentKeyBtn.dataset.key);
    if(event.type === 'mouseup' && currentKeyBtn.classList.contains('keyboard__key')){
      if(Number(currentKeyBtn.dataset.key) === 8) { //Backspace
        textArea.value = textArea.value.slice(0, -1);
      }else if (currentDatasetKey === 37 || currentDatasetKey === 38 || currentDatasetKey === 39 || currentDatasetKey === 40 ) { //Arrows
        moveCursor(currentDatasetKey);
      } else{
        textArea.value = textArea.value + currentKeyBtn.innerHTML;
        textArea.selectionEnd = textArea.value.length;
        textArea.blur();
      }
    }
    
    if (currentDatasetKey === 17){  //Ctrl
      changeKeyboardLanguage(event);
    }
    break;
  }
  case 'keydown':
  case 'keyup': {
    currentKeyBtn = keyBtns.find((btn) =>(Number(btn.dataset.key) === event.keyCode && Number(btn.dataset.location) === event.location));
    let currentDatasetKey = Number(currentKeyBtn.dataset.key);

    if (currentDatasetKey === 20 && event.type === 'keyup') { //CapsLock
      toggleCase(event);
      break;
    } else if (currentDatasetKey === 16) { //Shift
      toggleCase(event);
    } else if (currentDatasetKey === 17 || currentDatasetKey === 68) { //Ctrl || D(В)
      changeKeyboardLanguage(event);
    } 
    // else if(event.type === 'keydown'){
    //   event.preventDefault();
    //   console.log(currentKeyBtn.innerHTML);
    //   textArea.value = textArea.value + currentKeyBtn.innerHTML;
    // } 
  }
  }

  if(currentKeyBtn.classList.contains('keyboard__key') && (event.type === 'mousedown' || event.type === 'keydown')) {
    currentKeyBtn.classList.add('is-active');
  } else if(currentKeyBtn.classList.contains('keyboard__key') && (event.type === 'mouseup' || event.type === 'keyup')) {
    currentKeyBtn.classList.remove('is-active');
  } else if(currentKeyBtn.classList.contains('keyboard__row')) {
    return;
  } 

  keyBtns.forEach(btn => btn.addEventListener('mouseleave', () => keyBtns.forEach(
    el => el.classList.remove('is-active'))
  ));
}

function changeKeyboardLanguage(event){
  const keyboardKeys = document.querySelectorAll('.keyboard__key')
  const textScreen = document.querySelector('.keyboard__screen');
  let ctrl = document.querySelectorAll('[data-key="17"]');

  if (event.type === 'mousedown' || event.type === 'keydown') {
    event.preventDefault();
    flag = true;
  } else if (event.type === 'mouseup' || event.type === 'keyup') {
    event.preventDefault();
    flag = false;
  }


  if(event.keyCode === 68 && (ctrl[0].classList.contains('is-active') || ctrl[1].classList.contains('is-active'))) {
    if(event.keyCode === 68 && flag) {
      event.preventDefault();
      currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';

      keyboardKeys.forEach(key => {
        const currentKey = key.dataset.key;

        fullKeyBoardKeys.forEach(keysRow => {
          if (keysRow.hasOwnProperty(currentKey)) {
            key.innerHTML = keysRow[currentKey][currentLanguage];
          }
        });
      });

      textScreen.placeholder = (currentLanguage === 'en') ?
        'To change language use Ctrl + d(D) . . . \nKeyboard was created on Windows' :
        'Сменить язык клацай Ктрл + в(В) . . . \nклава была сделана на Винде';
    }
    // ! Need to handle if i use just d - that it will be written on screen. 
  } 
}

function toggleCase(event) {
  const keyBtns = Array.from(document.querySelectorAll('.keyboard__key'));
  let firstLett = document.querySelector('[data-key="81"]').textContent;
  let isLettLowerCase = (firstLett === firstLett.toLowerCase()) ? true : false;
  let capsLk = document.querySelector('[data-key="20"]');

  if ((event.keyCode === 20 && !capsLk.classList.contains('caps')) ||
   (event.keyCode === 16 && event.type === 'mousedown' || event.keyCode === 16 && event.type === 'keydown')){ //CapsLock
    if (isLettLowerCase) {
      keyBtns.forEach(key => {
        const text = key.textContent;
        if (text.length === 1) {
          key.textContent = text.toUpperCase();
        }
      });
      if(event.keyCode === 20){
        capsLk.classList.add('caps');
      }
    } 
  } else { //CapsLock {
    
    keyBtns.forEach(key => {
      const text = key.textContent;
      if (text.length === 1) {
        key.textContent = text.toLowerCase();
      }
    });
    if(event.keyCode === 20 && capsLk.classList.contains('caps')){
      capsLk.classList.remove('caps');
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