
import './router';

let App = {
    render :  () => {
        console.log("App render!");
    }, 
    after_render:  () => {
        console.log("App after render!");
    }, 
    init:  () => {
        console.log("App init!");

        //sideMenu.init("side_menu_container",menuOptions);
        //topMenu.init();

        // services.getUserData();
        // services.getFolders(()=>{
        //     // success
        // },()=>{
        //     // error
        // })

        window.sideMenu.init("sideMenu");

    }
}

export default App;