//variables



//eventListeners
document.addEventListener('DOMContentLoaded',function(){
    //display the <option>

    const html=new HTMLUI()
    html.displayYears()

})



//objects
function HTMLUI(){}

// display years
HTMLUI.prototype.displayYears=function(){
    let
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
    fixNumbers = function (str)
    {
     if(typeof str === 'string')
     {
        for(var i=0; i<10; i++)
        {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
     }
    return str;
    };

    //get max year
    const now = new Date().toLocaleDateString('fa-IR')
    let nowYear = now.slice(0,4)
    let max = fixNumbers(nowYear)
    

    //min year
    let min=max-20

    // access ti the select tag
    const selectYear=document.querySelector('#year')

    //create for loop for making option tag
    for(let i=max;i>=min;i--){
        //create option
        const option=document.createElement('option')
        option.value=i
        option.innerText=i

        //append option to the select year
        selectYear.appendChild(option)
    }

}