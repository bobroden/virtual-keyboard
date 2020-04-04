const keys = [
  {
    ru: 'ё', en: '`', keyCode: 'Backquote', ru_shift: 'ё', en_shift: '~',
  },
  {
    ru: '1', en: '1', keyCode: 'Digit1', ru_shift: '!', en_shift: '!',
  },
  {
    ru: '2', en: '2', keyCode: 'Digit2', ru_shift: '"', en_shift: '@',
  },
  {
    ru: '3', en: '3', keyCode: 'Digit3', ru_shift: '№', en_shift: '#',
  },
  {
    ru: '4', en: '4', keyCode: 'Digit4', ru_shift: ';', en_shift: '$',
  },
  {
    ru: '5', en: '5', keyCode: 'Digit5', ru_shift: '%', en_shift: '%',
  },
  {
    ru: '6', en: '6', keyCode: 'Digit6', ru_shift: ':', en_shift: '^',
  },
  {
    ru: '7', en: '7', keyCode: 'Digit7', ru_shift: '?', en_shift: '*',
  },
  {
    ru: '8', en: '8', keyCode: 'Digit8', ru_shift: '*', en_shift: '*',
  },
  {
    ru: '9', en: '9', keyCode: 'Digit9', ru_shift: '(', en_shift: '(',
  },
  {
    ru: '0', en: '0', keyCode: 'Digit0', ru_shift: ')', en_shift: ')',
  },
  {
    ru: '-', en: '-', keyCode: 'Minus', ru_shift: '_', en_shift: '_',
  },
  {
    ru: '=', en: '=', keyCode: 'Equal', ru_shift: '+', en_shift: '+',
  },
  {
    ru: 'Backspace', en: 'Backspace', keyCode: 'Backspace', ru_shift: 'Backspace', en_shift: 'Backspace',
  },
  {
    ru: 'Tab', en: 'Tab', keyCode: 'Tab', ru_shift: 'Tab', en_shift: 'Tab',
  },
  {
    ru: 'й', en: 'q', keyCode: 'KeyQ', ru_shift: 'й', en_shift: 'q',
  },
  {
    ru: 'ц', en: 'w', keyCode: 'KeyW', ru_shift: 'ц', en_shift: 'w',
  },
  {
    ru: 'у', en: 'e', keyCode: 'KeyE', ru_shift: 'у', en_shift: 'e',
  },
  {
    ru: 'к', en: 'r', keyCode: 'KeyR', ru_shift: 'к', en_shift: 'r',
  },
  {
    ru: 'е', en: 't', keyCode: 'KeyT', ru_shift: 'е', en_shift: 't',
  },
  {
    ru: 'н', en: 'y', keyCode: 'KeyY', ru_shift: 'н', en_shift: 'y',
  },
  {
    ru: 'г', en: 'u', keyCode: 'KeyU', ru_shift: 'г', en_shift: 'u',
  },
  {
    ru: 'ш', en: 'i', keyCode: 'KeyI', ru_shift: 'ш', en_shift: 'i',
  },
  {
    ru: 'щ', en: 'o', keyCode: 'KeyO', ru_shift: 'щ', en_shift: 'o',
  },
  {
    ru: 'з', en: 'p', keyCode: 'KeyP', ru_shift: 'з', en_shift: 'p',
  },
  {
    ru: 'х', en: '[', keyCode: 'BracketLeft', ru_shift: 'х', en_shift: '{',
  },
  {
    ru: 'ъ', en: ']', keyCode: 'BracketRight', ru_shift: 'ъ', en_shift: '}',
  },
  {
    ru: '\\', en: '\\', keyCode: 'Backslash', ru_shift: '/', en_shift: '|',
  },
  {
    ru: 'Del', en: 'Del', keyCode: 'Delete', ru_shift: 'Del', en_shift: 'Del',
  },
  {
    ru: 'CapsLock', en: 'CapsLock', keyCode: 'CapsLock', ru_shift: 'CapsLock', en_shift: 'CapsLock',
  },
  {
    ru: 'ф', en: 'a', keyCode: 'KeyA', ru_shift: 'ф', en_shift: 'a',
  },
  {
    ru: 'ы', en: 's', keyCode: 'KeyS', ru_shift: 'ы', en_shift: 's',
  },
  {
    ru: 'в', en: 'd', keyCode: 'KeyD', ru_shift: 'в', en_shift: 'd',
  },
  {
    ru: 'а', en: 'f', keyCode: 'KeyF', ru_shift: 'а', en_shift: 'f',
  },
  {
    ru: 'п', en: 'g', keyCode: 'KeyG', ru_shift: 'п', en_shift: 'g',
  },
  {
    ru: 'р', en: 'h', keyCode: 'KeyH', ru_shift: 'р', en_shift: 'h',
  },
  {
    ru: 'о', en: 'j', keyCode: 'KeyJ', ru_shift: 'о', en_shift: 'j',
  },
  {
    ru: 'л', en: 'k', keyCode: 'KeyK', ru_shift: 'л', en_shift: 'k',
  },
  {
    ru: 'д', en: 'l', keyCode: 'KeyL', ru_shift: 'д', en_shift: 'l',
  },
  {
    ru: 'ж', en: ';', keyCode: 'Semicolon', ru_shift: 'ж', en_shift: ':',
  },
  {
    ru: 'э', en: '\'', keyCode: 'Quote', ru_shift: 'э', en_shift: '"',
  },
  {
    ru: 'Enter', en: 'Enter', keyCode: 'Enter', ru_shift: 'Enter', en_shift: 'Enter',
  },
  {
    ru: 'Shift', en: 'Shift', keyCode: 'ShiftLeft', ru_shift: 'Shift', en_shift: 'Shift',
  },
  {
    ru: 'я', en: 'z', keyCode: 'KeyZ', ru_shift: 'я', en_shift: 'z',
  },
  {
    ru: 'ч', en: 'x', keyCode: 'KeyX', ru_shift: 'ч', en_shift: 'x',
  },
  {
    ru: 'с', en: 'c', keyCode: 'KeyC', ru_shift: 'с', en_shift: 'c',
  },
  {
    ru: 'м', en: 'v', keyCode: 'KeyV', ru_shift: 'м', en_shift: 'v',
  },
  {
    ru: 'и', en: 'b', keyCode: 'KeyB', ru_shift: 'и', en_shift: 'b',
  },
  {
    ru: 'т', en: 'n', keyCode: 'KeyN', ru_shift: 'т', en_shift: 'n',
  },
  {
    ru: 'ь', en: 'm', keyCode: 'KeyM', ru_shift: 'ь', en_shift: 'm',
  },
  {
    ru: 'б', en: ',', keyCode: 'Comma', ru_shift: 'б', en_shift: '<',
  },
  {
    ru: 'ю', en: '.', keyCode: 'Period', ru_shift: 'ю', en_shift: '>',
  },
  {
    ru: '.', en: '/', keyCode: 'Slash', ru_shift: ',', en_shift: '?',
  },
  {
    ru: '▲', en: '▲', keyCode: 'ArrowUp', ru_shift: '▲', en_shift: '▲',
  },
  {
    ru: 'Shift', en: 'Shift', keyCode: 'ShiftRight', ru_shift: 'Shift', en_shift: 'Shift',
  },
  {
    ru: 'Ctrl', en: 'Ctrl', keyCode: 'ControlLeft', ru_shift: 'Ctrl', en_shift: 'Ctrl',
  },
  {
    ru: 'Win', en: 'Win', keyCode: 'MetaLeft', ru_shift: 'Win', en_shift: 'Win',
  },
  {
    ru: 'Alt', en: 'Alt', keyCode: 'AltLeft', ru_shift: 'Alt', en_shift: 'Alt',
  },
  {
    ru: '', en: '', keyCode: 'Space', ru_shift: '', en_shift: '',
  },
  {
    ru: 'Alt', en: 'Alt', keyCode: 'AltRight', ru_shift: 'Alt', en_shift: 'Alt',
  },
  {
    ru: '◄', en: '◄', keyCode: 'ArrowLeft', ru_shift: '◄', en_shift: '◄',
  },
  {
    ru: '▼', en: '▼', keyCode: 'ArrowDown', ru_shift: '▼', en_shift: '▼',
  },
  {
    ru: '►', en: '►', keyCode: 'ArrowRight', ru_shift: '►', en_shift: '►',
  },
  {
    ru: 'Ctrl', en: 'Ctrl', keyCode: 'ControlRight', ru_shift: 'Ctrl', en_shift: 'Ctrl',
  },
];

let lang = localStorage.getItem('lang') || 'en';

const text = document.createElement('textarea');
text.classList.add('text');
document.body.append(text);

const keyboard = document.createElement('div');
keyboard.classList.add('container');
document.body.append(keyboard);

keys.forEach((item) => {
  const key = document.createElement('div');
  key.setAttribute('id', item.keyCode);
  key.innerHTML = lang === 'ru' ? item.ru : item.en;
  key.classList.add('key');
  if (item.ru === 'Backspace' || item.ru === 'Tab' || item.ru === 'Del' || item.ru === 'CapsLock' || item.ru === 'Enter' || item.ru === 'Shift' || item.ru === '▲' || item.ru === 'Ctrl' || item.ru === 'Win' || item.ru === 'Alt' || item.ru === '◄' || item.ru === '▼' || item.ru === '►') key.classList.add('main');
  if (item.ru === 'Backspace' || item.ru === 'CapsLock' || item.ru === 'Enter' || item.ru === 'Shift') key.classList.add('wide');
  if (item.ru === '') key.classList.add('very-wide');
  if (item.ru === 'Tab') key.classList.add('tab');
  if (item.ru === 'Backspace') key.classList.add('backspace');
  keyboard.append(key);
});

const keyes = Array.from(keyboard.children);
let isCaps = false;
let CaretPos = 0;
let y = true;

function getCursorPosition() {
  if (document.selection) {
    text.focus();
    const Sel = document.selection.createRange();
    Sel.moveStart('character', -text.value.length);
    CaretPos = Sel.text.length;
  } else if (text.selectionStart || text.selectionStart === '0') {
    CaretPos = text.selectionStart;
  }
}

document.addEventListener('keydown', (e) => {
  if (y) {
    getCursorPosition();
    y = false;
  }
  if (e.key.length <= 1) CaretPos += 1;
  if (!text.focus()) {
    text.focus();
    text.setSelectionRange(CaretPos - 1, CaretPos - 1);
  }
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && (e.ctrlKey || e.metaKey)) {
    if (lang === 'en') {
      lang = 'ru';
      for (let i = 0; i < keyes.length; i += 1) keyes[i].innerHTML = keys[i].ru;
    } else {
      lang = 'en';
      for (let i = 0; i < keyes.length; i += 1) keyes[i].innerHTML = keys[i].en;
    }
    localStorage.setItem('lang', lang);
  }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    text.setSelectionRange(CaretPos, CaretPos);
    for (let i = 0; i < keyes.length; i += 1) {
      if (lang === 'ru') keyes[i].innerHTML = keys[i].ru_shift;
      else keyes[i].innerHTML = keys[i].en_shift;
      if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toUpperCase();
    }
  }
  keyes.forEach((item) => {
    if (item.id === e.code) item.classList.add('active');
  });
  if (e.code === 'CapsLock') {
    text.setSelectionRange(CaretPos, CaretPos);
    if (isCaps === false) {
      isCaps = true;
      for (let i = 0; i < keyes.length; i += 1) if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toUpperCase();
    } else {
      isCaps = false;
      for (let i = 0; i < keyes.length; i += 1) if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toLowerCase();
    }
  }
  const arr = text.value.split('');
  if (e.code === 'Tab') {
    arr.splice(CaretPos, 0, '    ');
    text.value = arr.join('');
    CaretPos += 4;
  }
  if (e.code === 'ArrowUp') {
    arr.splice(CaretPos, 0, '▲');
    text.value = arr.join('');
    CaretPos += 1;
  }
  if (e.code === 'ArrowLeft') {
    arr.splice(CaretPos, 0, '◄');
    text.value = arr.join('');
    CaretPos += 1;
  }
  if (e.code === 'ArrowDown') {
    arr.splice(CaretPos, 0, '▼');
    text.value = arr.join('');
    CaretPos += 1;
  }
  if (e.code === 'ArrowRight') {
    arr.splice(CaretPos, 0, '►');
    text.value = arr.join('');
    CaretPos += 1;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    for (let i = 0; i < keyes.length; i += 1) {
      if (lang === 'ru') keyes[i].innerHTML = keys[i].ru;
      else keyes[i].innerHTML = keys[i].en;
      if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toLowerCase();
    }
  }
  keyes.forEach((item) => {
    if (item.id === e.code) item.classList.remove('active');
  });
});

keyboard.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'CapsLock') {
    if (isCaps === false) {
      isCaps = true;
      for (let i = 0; i < keyes.length; i += 1) if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toUpperCase();
    } else {
      isCaps = false;
      for (let i = 0; i < keyes.length; i += 1) if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toLowerCase();
    }
  }
  const arr = text.value.split('');
  if (!e.target.classList.contains('main') && e.target.classList.contains('key')) {
    arr.splice(CaretPos, 0, e.target.innerHTML);
    text.value = arr.join('');
    CaretPos += 1;
  }
  switch (e.target.innerHTML) {
    case 'Tab':
      arr.splice(CaretPos, 0, '    ');
      text.value = arr.join('');
      CaretPos += 4;
      break;
    case 'Enter':
      arr.splice(CaretPos, 0, '\n');
      text.value = arr.join('');
      CaretPos += 1;
      break;
    case 'Backspace':
      arr.splice(CaretPos - 1, 1);
      text.value = arr.join('');
      CaretPos -= 1;
      break;
    case 'Del':
      arr.splice(CaretPos, 1);
      text.value = arr.join('');
      break;
    case '':
      arr.splice(CaretPos - 1, 0, ' ');
      text.value = arr.join('');
      break;
    case '▲':
      arr.splice(CaretPos, 0, '▲');
      text.value = arr.join('');
      CaretPos += 1;
      break;
    case '◄':
      arr.splice(CaretPos, 0, '◄');
      text.value = arr.join('');
      CaretPos += 1;
      break;
    case '▼':
      arr.splice(CaretPos, 0, '▼');
      text.value = arr.join('');
      CaretPos += 1;
      break;
    case '►':
      arr.splice(CaretPos, 0, '►');
      text.value = arr.join('');
      CaretPos += 1;
      break;
    default:
      break;
  }
});

keyboard.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('key')) e.target.classList.add('active');
  if (e.target.innerHTML === 'Shift') {
    for (let i = 0; i < keyes.length; i += 1) {
      if (lang === 'ru') keyes[i].innerHTML = keys[i].ru_shift;
      else keyes[i].innerHTML = keys[i].en_shift;
      if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toUpperCase();
    }
  }
});

keyboard.addEventListener('mouseup', (e) => {
  if (e.target.innerHTML === 'Shift') {
    for (let i = 0; i < keyes.length; i += 1) {
      if (lang === 'ru') keyes[i].innerHTML = keys[i].ru;
      else keyes[i].innerHTML = keys[i].en;
      if (!keyes[i].classList.contains('main')) keyes[i].innerHTML = keyes[i].innerHTML.toLowerCase();
    }
  }
  if (e.target.classList.contains('key')) e.target.classList.remove('active');
});

text.addEventListener('click', getCursorPosition);

const desc = document.createElement('div');
desc.innerHTML = 'Клавиатура была создана на ОС Windows <br> Переключение языка: Ctrl + Shift';
desc.classList.add('desc');
document.body.append(desc);
