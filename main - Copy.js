/*console.log ("Hello")
let theBigest=["ww","eeee","ewewrw","virmvir","ujfuf"];
let check=theBigest.reduce(function(acc,current)
{
    return acc.length > current.length?acc :current;
});
console.log (check);

let name=[ "@" ,"M", "o","@","h" ,"a" ,"@","m" ,"e" ,"d","@" ];
let message=name.filter(function(ele){
    return!ele.startsWith("@");
}).reduce(function(acc,current){
    return `${acc}${current}`;
})
console.log (message);*/
 



///////////////////////////////////////////////
//foreach 
/*<ul>
        <li class="active">one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <div class="content">
        <div> div one</div>
        <div>div two</div>
        <div>div three</div>
        

    </div>
 let all=document.querySelectorAll("ul li");
all.forEach(function(ele)
{
ele.onclick=function()
{
  all.forEach(function(ele){
    ele.classList.remove("active")//;هيحذف  الكلاس القديم و يضيف واحد جديد
  })
  //  console.log(this)//العنصر ال ه اضغط عليه هيظهر فى console
this.classList.add("active");//اول ما اضغط هيضيف كلاس اسمه اكتف
}
})*/
//////////////////////////////////////////////
/*confirm

ده باستخمه لما اكون عايز ااااكد للمستخدم على اكشن هو هيعمله 
يعنى رساله هتظر هل انت متأكد من اغلاق الصفحه

let con =confirm("Do you sure? ");
console.log(con);
if(con===true)
    {console.log("Done");}
else 
{console.log("fail");}
*/
////////////////////////////////////////////////////////////
 /*
 //////
 prompt
بتظهر رساله ليوذر ان هو يدخل حاجه معينه
 
 
 
 
let pro=prompt("Enter Day ?",ممكن احط هنا رسال تظهر  تعرفه شكل الانبوت ال يدخله)
console.log(pro);
*/
///////////////////////////////////////////////////////////////////////////////////
/*
 ////////////////
 setTimeout 
 تنفيذ فونكشن بعد وقت محدد
setTimeout(الفونكش او الكود ال هينفذ,عدد الثوانى)

setTimeout(function(){
console.log("massage");
},3000)


function func(user){
    console.log(`massage , hello ${user}`);
    }
setTimeout(func,3000,"osama")//massage , hell
 */
//////////////////////////////////////////////////
/*
///////////////////////
setinterval

بتنفذ الفونكشن كل مثلا ثانيه
setInterval(function(){
    console.log("hello")
},3000)//هتنفذ كل تلات ثوانى



*/
/* ///////////////////////////////////////////////////////////
location.href= " اسم موقع"
console.log(location.href)
loction.replace(" عنوان الموقع الجديد")

انا بكون موجود على موقع معين اول ما انفذ الفونكشن دى هيروح للوقع التانى
*/

  /*
  html
  <ul>
    <li class="active" data-color="red"></li>
    <li data-color="green"></li>
    <li data-color="blue"></li>
    <li data-color="black"></li>
</ul>
<div class="experiment"></div>
//////////////////////////////////////////////////
css

  
body{
background-color:#eee;


}

ul{
    padding: 0;
    margin: 20px auto;
    background-color: #ddd;
    padding: 20px;
    width: 400px;
    list-style: none;
    display: flex;
    justify-content: space-between;
}




ul li {
    border: 2px solid transparent;
    width: 60px;
    height: 60px;
    opacity: 0.4;
    cursor: pointer;
    transition: 0.3s
}


ul li.active,ul li:hover{
    opacity: 1;
}

ul li:first-child
{background-color: red;}
ul li:nth-child(2)
{background-color: green;}
ul li:nth-child(3)
{background-color: blue;}
ul li:nth-child(4)
{background-color: black;}
.experiment{
    background-color: red;
    width: 600px;
    height: 300px;
    margin: 20px auto;
}


///////////////////////////////////////////////////
let lis =document.querySelectorAll("ul li");
lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        console.log(e.currentTarget.dataset.color);//كل ما اضغط على لون هيطبع اسمه
    });
})black
 blue
 green
 red 
  
//////////////////////////////////////////////////////////////////////////////
let lis =document.querySelectorAll("ul li");
let exp=document.querySelector(".experiment");
lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
       // console.log(e.currentTarget.dataset.color);
       lis.forEach((li)=>{
        li.classList.remove("active");
       });
       e.currentTarget.classList.add("active");
       window.localStorage.setItem("color",e.currentTarget.dataset.color);
       exp.style.backgroundColor = e.currentTarget.dataset.color;


    });
})*/
const user ={
    theAge :33,
    name :"mohamed",
    skills:[           "html,","css","php"],
   address:{
        egypt:"cairo",
        ksa:"riy"
   },
}