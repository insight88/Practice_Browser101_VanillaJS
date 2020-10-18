'use strict';

import * as sound from './sound.js';

const CARROT_SIZE = 80;
const FIELD_TOP_PADDING = 50;

export const ItemType = Object.freeze({
  carrot: 'carrot',
  bug: 'bug',
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.onFieldClickListener = this.onFieldClickListener.bind(this);
    // bind 방법 1
    // 클래스 안에서 정의된 함수에 함수를 인자로 전달할 때,
    // this에는 그 클래스의 정보가 포함되지 않아서 bind가 필요함
    // 함수는 기본적으로 클래스와 바인딩 되어 있지 않음
    this.field.addEventListener('click', this.onFieldClickListener);
    // this.field.addEventListener('click', (event) => 
    // this.onFieldClickListener);
    // bind 방법 2
  }

  init() {
    this.field.innerHTML = '';
    this.addItem(this.carrotCount, 'img/carrot.png', 'carrot');
    this.addItem(this.bugCount, 'img/bug.png', 'bug');
  }

  setItemClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  addItem(count, imgPath, className) {
    const x1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y1 = this.field.offsetTop + FIELD_TOP_PADDING;
    const y2 = this.field.offsetTop + this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      item.style.userDrag = 'none';
      this.field.appendChild(item);
    }
  }

  onFieldClickListener(event) {
    // onFieldClickListener = event => {
    // bind 방법 3
    // const onFieldClickListener = (event) = > { 선언과 같음
    const target = event.target;
    if (target.matches('.carrot')) {
      sound.playCarrot();
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}