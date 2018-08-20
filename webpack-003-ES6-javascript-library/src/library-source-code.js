console.log("[library] File starts.");
import extraStuff from './library-extra-code'
import MoreCode from './more-code'

export default class Library {

    constructor(name) {
        //super();
        this.name = name || 'Library';
        this.cont = 0;
    }
    start() {
        console.log("[library] We start here. Have fun!");
        console.log("[library] extraStuff.cont:", extraStuff.cont);
        extraStuff.jump();
        let hi = new MoreCode();
        hi.sayHi();
    }
    do() {
        console.log("[library] We start here. Have fun!");
        console.log(this.doMore());
        this.cont += 1;
        console.log("[library] this.cont:", this.cont);
    }
    doMore() {
        console.log("[library] do more!");
        this.cont += 5;
        return this.cont;
    }
    end() {
        console.log("[library] This is the end...");
    }
    say(msg) {
        console.log(this.name + " says: " + msg);
        var msg = new SpeechSynthesisUtterance(msg);
        window.speechSynthesis.speak(msg);
    }

}

// expose global
global.Library = new Library();