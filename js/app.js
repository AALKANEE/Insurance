

//variables
const form=document.querySelector('#request-quote')

const html=new HTMLUI()


//eventListeners
eventListeners()
function eventListeners(){
    
    //make option tag for select
    document.addEventListener('DOMContentLoaded',function(){
        //display the <option>
    
        html.displayYears()
    
    })
    
    //submit form when click
    form.addEventListener('click',function(e){
        e.preventDefault()

        //read value from the form
        const make=document.getElementById('make').value
        const year=document.getElementById('year').value
        const level=document.querySelector('input[name="level"]:checked').value

        //ceck the value of fields are correct
        if(make==='' || year==='' || level===''){
            html.displayError('لطفا همه مقادیر به درستی وارد شود')
        }else{
            const insurance=new Insurance(make,year,level)
            const price= insurance.calculatePrice(insurance)
        }
        
    })

}    


//objects

//every thing related to the insurance
function Insurance(make,year,level){
    this.make=make
    this.year=year
    this.level=level
}

//calculating the price
Insurance.prototype.calculatePrice=function(info){
    let price;
    let base=2000000
    // get the make value
    const make=info.make
    /*
    make1: ==> pride     1.15
    make2: ==> optima    1.30
    make3: ==> porches   1.80
    */
   switch (make) {
    case '1':
        price=base*1.15
        break;
    case '2':
        price=base*1.30
        break;
    case '3':
        price=base*1.80
        break;
    default:
        break;
   }
   console.log(price)
   return price;
}

//every thing related to the html
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

//display error on the form
HTMLUI.prototype.displayError=function(err){
    const div=document.createElement('div')
    div.classList='error'
    div.innerText=err
    // insert div to the form
    form.insertBefore(div,document.querySelector('.form-group'))

    //remove error after 3second
    setTimeout(()=>{
        document.querySelector('.error').remove()
    },3000)
}