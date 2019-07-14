console.log("Home.js");

import './response.home.js';

import preact from 'preact';
import { render } from 'preact';
import Clock from './../../components/clock/clock.js';

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
        let users = window.users;
        let view =  /*html*/`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ users.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }, after_render:  () => {


            const reactRootNode = document.getElementById("root");
            render(<Clock />, reactRootNode);
    
    }

}

export default Home;