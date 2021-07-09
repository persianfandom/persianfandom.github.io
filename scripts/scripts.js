function userFocusOnInput()
{
    document.getElementById("item-search-inputID").style.fontSize = '35px';
}

var searchFound = [];
var searchFoundImage = [];
function userFocusOnInputF()
{
    let menu = document.getElementById('itemList');
    while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
    }
    
    
    if(document.getElementById("item-search-inputID").value == "")
    {
        document.getElementById("item-search-inputID").style.fontSize = 'x-large';
    }
    else
    {
        document.getElementById("item-search-inputID").style.fontSize = '35px';
    }

    
    var userSearch = document.getElementById("item-search-inputID").value.toLowerCase();
    var itemUp;
    if (userSearch.length != 0)
    {

        for(var i = 0; i < items.length; i++)
        {
            itemUp = items[i].substr(0,userSearch.length).toLowerCase();
        
            if(userSearch == itemUp)
            {
                searchFound.push(items[i]);
                searchFoundImage.push(itemsI[i])
                console.log(items[i]);
                continue;
            }
            // for(var j = 0; i < (itemsDetails[i].length - userSearch.length); j++)
            // {
            //     if(userSearch == itemsDetails[i].substr(j, userSearch.length - 1))
            //     {
            //         searchFound.push(items[i]);                        
            //     }
            // }
        }
    }

    if(userSearch == "mahanisinthehouse")
    {
        searchFound.push("mahanisinthehouse");
    }

    for (var i = 0; i < searchFound.length; i++)
    {
        var button = document.createElement("button")
        var closeButton = document.createElement("button")
        var img = document.createElement("img")
        var label = document.createElement("p")
        var p = document.createElement("p")
        var br = document.createElement("br")

        img.setAttribute("id" ,searchFound[i])
        if(searchFound[i] == "mahanisinthehouse")
        {
            img.setAttribute("src", "https://th.bing.com/th/id/R.5f168fc389e4278bbf66ecc279c26436?rik=Mzlk31KpKqFKWg&pid=ImgRaw")
        }
        else
        {
            img.setAttribute("src", searchFoundImage[i])
        }
        img.setAttribute("class", "customItemImageStyle")

        label.setAttribute("id", searchFound[i])
        label.setAttribute("class", "w3-margin w3-xxlarge")
        label.appendChild(document.createTextNode(searchFound[i]))

        p.setAttribute("id", searchFound[i] + "1")
        p.setAttribute("class", "w3-xlarge customItemDetailStyle")
        p.appendChild(document.createTextNode(searchFound[i]))

        button.setAttribute("id" ,searchFound[i])
        button.setAttribute("onClick", "itemClicked(this.id)")
        button.setAttribute("class", "customItemStyle w3-button w3-hover-pale-red w3-margin w3-round-large w3-card-4")

        closeButton.setAttribute("id", searchFound[i] + 2)
        closeButton.setAttribute("onClick", "itemClicked2(this.id)")
        closeButton.setAttribute("class", "w3-button customItemButtonStyle")
        closeButton.appendChild(document.createTextNode("Close panel"))

        button.appendChild(img)
        button.appendChild(br)
        button.appendChild(label)
        button.appendChild(br)
        button.appendChild(p)
        button.appendChild(br)
        button.appendChild(closeButton)

        itemList.appendChild(button)
        
    }
    searchFound = []
    searchFoundImage = [];
}      
        
function itemClicked(clickedId)
{
    var need = clickedId + "1"
    var need2 = clickedId + "2"
    var docD = document.getElementById(need)
    var docD2 = document.getElementById(need2)
    if(docD.style.display === "none")
    {
        docD.style.display = "block"
        // docD2.style.display = "block"
        
    }
    else
    {
        docD.style.display = "none"
        // docD2.style.display = "none"
    }

    // document.getElementById(clickedId).style.pointerEvents = "none"
}

function itemClicked2(clickedId)
{
    var need = clickedId.substr(0, clickedId.length - 1) + "1"
    var need2 = clickedId
    console.log(need)
    console.log(need2)
    var docD = document.getElementById(need)
    var docD2 = document.getElementById(need2)
    
    document.getElementById(need).style.display = "none"
    document.getElementById(need2).style.display = "none"
        // docD.style.display =  "none"
        // docD2.style.display = "none"
        
    
    // document.getElementById(need3).style.pointerEvents = "visible"
}

// function addItem()
// {
//     var li = document.createElement("li");
//     var a = document.createElement("a");
//     a.setAttribute("href", "http://shadowsjerker.github.io");
//     li.setAttribute('id',"listItem");
//     li.setAttribute('class',"w3-hover-white");
//     li.setAttribute('onClick',"itemClicked()");
//     li.appendChild(document.createTextNode("hello"));
//     a.appendChild(li);
//     itemList.appendChild(a)
// }