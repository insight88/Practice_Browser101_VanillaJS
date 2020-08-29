class Counter {
    constructor(print) {
        this.counter = 0;
        this.callback = print
    }
    // class의 인자로 callback 함수를 지정

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter)
        }
    }
}

const coolCounter = new Counter(printThing);

function printThing(num) {
    console.log(`Print ${num}`)
}
// class 외부에서 class로 전달되는 callback 함수의 기능을 마음대로 설정 가능
// class의 인자로 callback 함수를 전달하는 방법의 장점!

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();