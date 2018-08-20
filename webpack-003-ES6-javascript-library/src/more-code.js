console.log("MoreCode!");

class MoreCode {

  constructor(name) {
    this.name = name || "Andres";
    console.log("[MoreCode] constructor()");
  }

  sayHi() {
    //alert(this.name);
    console.log("[MoreCode] name: " + this.name);
  }

}

export default MoreCode;