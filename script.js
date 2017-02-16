function getElementsByText(text) {
    function rec(ele, arr)
    {
        if (ele.childNodes.length > 0) 
            for (var i = 0; i < ele.childNodes.length; i++) 
                rec(ele.childNodes[i], arr);
        else if (ele.nodeType == Node.TEXT_NODE && 
                 ele.nodeValue.indexOf(text) != -1) 
            arr.push(ele.parentNode);
        return arr;
    }
    return rec(document.body, []);
}

var my = getElementsByText('ADD TO CART')
if(my){
    var mod =my[0].className;
    document.getElementsByClassName(mod)[0].click();
}
else{
    location.reload();
}

