console.log("Home.js");
import users from './data.users.json';
import Keyboard from './../../components/keyboard/keyboard';
import hList from './../../components/lists/hList/hList.js';

// --------------------------------
//  Define Data Sources
// --------------------------------

/*
let getPostsList =  () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        //const response = await fetch(`https://url`, options)
        //const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}
*/

let Home = {
    render :  () => {

        console.log("Render Home!");

        //let users = window.users;
	let usersArr = users.users;
	
        let content1 =  /*html*/`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ usersArr.map(user => 
                        /*html*/`<li><div class="ico"></div><a href="#/p/${user.id}">${user.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>

                ${ hList() }

                ${ Keyboard() }

                ${ Keyboard() }


            </section>
        `

        let view =  /*html*/`
            <div class="section section-home">
                <div id="home-top-menu" class="topMenu"></div>
                <div id="main-container" class="main-container">
                ${ content1 }     
                </div>
            </div>
            `
        return view
    }, after_render:  () => {

        console.log("After render Home!");
    
        window.topMenu.init("home-top-menu");
        //home-top-menu
    }

}

export default Home;