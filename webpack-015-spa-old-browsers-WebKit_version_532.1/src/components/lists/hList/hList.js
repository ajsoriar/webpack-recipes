
import './hList.css';

let HorizontalList = (listData) => {

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

    let arr = listData || [];

    let view = `
                <ul class="hList">
                ${ arr.map(item => 
                    `<li class="key"><a href="#/p/${item.url}">
                        ${renderItem(item.itemType)}
                    </a></li>`
                    ).join('\n ')
                }
                </ul>
            `
    return view
}

HorizontalList.clear = () => {
    //HorizontalList();
}

export default HorizontalList;