import listData from './list.data.json';
import './hList.css';

let HorizontalList = () => {

    console.log("HorizontalList render!");

    let renderItem = (itemType) => {
        switch (itemType) {

            case "FOLDER":
                return `<div class="hItem foder">${itemType}</div>`
                break;
            case "PICTURE":
                return `<div class="hItem picture">${itemType}</div>`
                break;
            case "USER":
                return `<div class="hItem user">${itemType}</div>`
                break;
        }
    };

    let view = `
                <ul class="hList">
                ${ listData.items.map(item => 
                    `<li class="key"><a href="#/p/${item.url}">
                        ${renderItem(item.itemType)}
                    </a></li>`
                    ).join('\n ')
                }
                </ul>
            `
    return view
}

export default HorizontalList;