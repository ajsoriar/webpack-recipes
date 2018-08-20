console.log("extra stuff here!");

/*
const extraStuff = function() {

    return {
        cont: 0,
        jump: () => {
            this.cont +=1;
        },
    }

}
*/

const extraStuff = {
    cont: 0,
    jump: () => {
        console.log("jump!");
    },
    add: () => {
        console.log("add!");
        //this.cont +=1;
    }
}

export default extraStuff;