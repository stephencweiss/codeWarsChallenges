
const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`

function catalog(s, article) {
    // your code
    // create an array of objects for the products in s, eliminate empty space
    function checkElementLength(el) {
        return el.length > 0;
    }
    let productsArray = s.split("\n").filter(checkElementLength);
    /* 
    --- QUESTION ----
    1. How do I turn this filter into an anonymous function so that I don't need to predefine it?
    */




    // building the objects

    // 1. create the object for each element
    function createObject(arrayEl){
        let obj = new Object();
        let nameStr = arrayEl.substring(arrayEl.indexOf("<name>")+"<name>".length,arrayEl.indexOf("</name>"));
        let prxStr = arrayEl.substring(arrayEl.indexOf("<prx>")+"<prx>".length,arrayEl.indexOf("</prx>"));
        let qtyStr = arrayEl.substring(arrayEl.indexOf("<qty>")+"<qty>".length,arrayEl.indexOf("</qty>"));
        obj.name = nameStr;
        obj.prx = prxStr;
        obj.qty = qtyStr;
        return obj;
    }
    // 2. push the object into a new array

    function createProductObjectArray(array){
        // debugger;
        let resultArray = new Array();
        for (let i = 0; i<array.length; i++){
            let el = createObject(array[i]);
            resultArray.push(el);
        }
        return resultArray;
    }
    let productsObjectArray = createProductObjectArray(productsArray);

    /*
    --- QUESTION ----
    1. How do I turn createObject into an anonymous function so that I don't need to predefine it? 
    */

    // Review for the article and return the string if it exists -- need to look at each element
    function reviewProductsForArticle(arrayOfObjects, targetArticle){
        debugger;
        let resultString = "";
        for (let i = 0; i < arrayOfObjects.length; i++){
            currentObject = arrayOfObjects[i];
            currentName = currentObject.name
            if (currentName.includes(targetArticle)){
                if(resultString.length > 0){
                    resultString = resultString + String('\r\n'+ currentObject.name + ' > prx: $' + currentObject.prx + ' qty: '+currentObject.qty)
                }
                else { resultString = String(currentObject.name + ' > prx: $' + currentObject.prx + ' qty: '+currentObject.qty)}
            }
        }
        if (resultString === ""){
            return "Nothing";
        }
        return resultString;
    }

    return reviewProductsForArticle(productsObjectArray,article);


    /*
    --- QUESTION ----
    1. META: Is it worth using anonymous functions here, or is my separation of concerns eas(ier) to follow?
    */

}





catalog(s,"ladder")


Expected: 
'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32', instead got: 
'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.8 qty: 32'