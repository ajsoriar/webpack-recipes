console.log("pictures.js");

// --------------------------------
//  Define Data Sources
// --------------------------------

// import listData1 from './../../components/lists/hList/list.data.1.json';
// import listData2 from './../../components/lists/hList/list.data.2.json';

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
    render: () => {

        console.log("Render Pictures!");

        let content1 = /*html*/ `
            <section class="section">
                <h1> Pictures </h1>
            </section>
        `

        let view = /*html*/ `
            <div class="section section-home">
                <div id="main-container" class="main-container">
                ${ content1 }     
                </div>
            </div>
            `
        return view
    },
    after_render: () => {
        console.log("After render Pictures!");
        window.topMenu.init("home-top-menu");
    }

}

export default Home;