console.log("[library] File starts.");
import extraStuff from './library-extra-code'
import MoreCode from './more-code'

// let user = new MoreCode("Cindy");
// MoreCode.sayHi();

/*
const library = function() {

    console.log("[library] library function starts.");

    // let user = new MoreCode("Melanie");
    // MoreCode.sayHi();

    const arr = [1,2,3,4,5,6,7,8,9,10];

    const doStuff1 = () => {
        return arr.map(x => x * 2);
    }

    const doStuff2 = () => arr.map(x => x * 2);

    return {
        start: () => {
            console.log("[library] We start here. Have fun!");
            console.log("[library] extraStuff.cont:", extraStuff.cont );
            extraStuff.jump();
            console.log("[library] extraStuff.cont:", extraStuff.cont );    
        },
        do: () => {
            console.log("[library] We start here. Have fun!");
            console.log(doStuff1());
            console.log(doStuff2());
        },
        end: () => {
            console.log("[library] This is the end...");
        },
    }

}
*/

class Library {
    constructor(name) {
      this._name = name || 'Library';
    }
    get name() {
      return this._name;
    }

    /*
    start() {
        console.log("[library] We start here. Have fun!");
        console.log("[library] extraStuff.cont:", extraStuff.cont );
        extraStuff.jump();
        console.log("[library] extraStuff.cont:", extraStuff.cont );    
    }
    do() {
        console.log("[library] We start here. Have fun!");
        console.log(doStuff1());
        console.log(doStuff2());
    }
    end() {
        console.log("[library] This is the end...");
    }
    say(msg) {
        console.log(this.name + " says: " + msg);
    }
    */
  }

export default Library;