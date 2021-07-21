function userFocusOnInput()
{
    document.getElementById("item-search-inputID").style.fontSize = '35px';
}

var searchFound = [];
var searchFoundImage = [];
var searchFoundItemPageAddress = [];
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
                searchFoundItemPageAddress.push(pagesAddress[i])
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
        var itemPageButton = document.createElement("Button")
        var itemPageLink = document.createElement("a")
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
        p.setAttribute("style", "display: none;")
        p.appendChild(document.createTextNode(searchFound[i]))

        itemPageButton.setAttribute("id", searchFound[i] + "2")
        itemPageButton.setAttribute("class", "itemPageButton w3-button")
        itemPageButton.setAttribute("style", "display: none;")
        itemPageButton.appendChild(document.createTextNode("Open in a new tab"))

        itemPageLink.setAttribute("href", searchFoundItemPageAddress[i])
        itemPageLink.setAttribute("id", searchFound[i] + "1")
        itemPageLink.setAttribute("style", "display: block;")
        itemPageLink.setAttribute("style", "text-decoration: none;")
        itemPageLink.appendChild(itemPageButton)

        button.setAttribute("id" ,searchFound[i])
        button.setAttribute("onClick", "itemClicked(this.id)")
        button.setAttribute("class", "customItemStyle w3-button w3-hover-pale-red w3-margin w3-round-large w3-card-4")

        

        button.appendChild(img)
        button.appendChild(br)
        button.appendChild(label)
        button.appendChild(br)
        button.appendChild(p)
        button.appendChild(br)
        button.appendChild(itemPageLink)

        itemList.appendChild(button)
        
    }
    searchFound = []
    searchFoundImage = [];
    searchFoundItemPageAddress = []
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
        docD2.style.display = "block"
    }
    else 
    {
        docD.style.display = "none"
        docD2.style.display = "none"
    }
}


// Open and close navigation bar in mobile
function w3_open() 
{
    var windowWH = getWindowSize();

    if(windowWH['width'] < 460)
    {
        console.log(windowWH['width'])
        console.log(windowWH['height'])
        if(document.getElementById("mySidebar").style.display === "block")
        {
            
        }
        else if(document.getElementById("mySidebar").style.display === "none")
        {
            
        }
        else
        {
            document.getElementById("mySidebar").setAttribute("style", "display: none;")
        }
    }
    
    var helper = document.getElementById("mySidebar")

    if(helper.style.display === "none")
    {
        helper.style.display = "block"
    }
    else
    {
        helper.style.display = "none"
    }
}
  
  
// Get window size
function getWindowSize() {
     var win_size = new Array;
     if (self.innerHeight) {
       win_size['height'] = self.innerHeight;
       win_size['width'] = self.innerWidth;
     } else if (document.documentElement && document.documentElement.clientHeight) {
       win_size['height'] = document.documentElement.clientHeight;
       win_size['width'] = document.documentElement.Width;
     } else if (document.body) {
       win_size['height'] = document.body.clientHeight;
       win_size['width'] = document.body.clientWidth;
     }
     return win_size;
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