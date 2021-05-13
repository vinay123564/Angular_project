// var not start with number ex: var 2num
// discount formula : (A-S /A )*100
//  Math.round : help to figure out exactvalue
//  typeof : help to find out datatype  -> "0" should be small
// indexOf : help to find out index number -> "o" should be capital
// parseInt : it is used to convert string in to integer
// ${`...`} : it help to write console log like :console.log(`${name}`) 
// var ad=newArray("vinay","kumar"):we can declair array like these also much recomanded
// arrow functio: if you want to return use { } if you not use use ( ) like: var add= ()=>{retrun }
// every(e) : these method is help for with out looping elements Ex:22----important
// fill("hi",2,4) : the 1st index of fill is used to fill all the value in array 2nd index is used to                starting index and 3rd index is ending index ,it indicate print 2->3 hi ex:23 
// filter(element (e)arrow function => if return use flowerbracket are else use paranthesis{return e==50 } )  : ex:24
// splice(index,delete,add)   : 
// slice(1,3)  : it like cutting the cake and give cutting part (1,3)show that cutting part from 1 to 3 and show part

// object important ->
//  it can assign two ways bracket[""] and . notation
// var a={vina:"kumar"}  true : dont use vina = "kumar" it is false

//  loops are four types in java script : they are

// forloop: means normal loop
// forEach(s)=>(console.log(s)): it is like forloop easy way one line of code Ex:29
// for(var s of names)   : these loop is used for instilazation and decleration means Array[] Ex:30
// for(let s in varable_name): these loop is used for objects Ex:31
// set TimeInterval  set Timeout : EX:32 <div class="blue">
                  //     <h1>1000</h1>
                  //     <h2>followers</h2>
                  // </div>
//(window.getComputedStyle(varaible_name).backgroundColor): it helps to get background color in element 
//(addeventListener(click,)=>{}) : event listener help to click function etc.










// 22:
// var result=Array(20,40,60).every((e) =>
//     e %2==0
// )
// console.log(result)


// 23
// var a=Array(20,40,60,70,20,90);
// console.log(a.fill("hi",1,4))


// 24
//  var fill=[{vin:"kumar",age:"40",bio:"60"},{vin:"kumar",age:"40",bio:"60"},{age:"40",bio:"60"}]
// // var fill=Array (20,545,54,534,35);
// var a=fill.filter((e)=>{
//     return e.vin=="kumar";
//     // return s==20;
// });
// console.log(a)


// var add= (name,role)=>{
// switch(role){
//     case 'user':
//         return (`${name} this is a accessc only content`)
// case 'admin':
//     return (`${name} access all`)
// case 'subadmin':
//     return (`${name}access few `)
//     }
// }
// var rol=add(`vinay`,`user`);
// console.log(rol)

// var address=new Array("vinay","kumar","goud","age","26");
// address.shift("vinaykumar")
// console.log(Array.from("vinay"))
// console.log(address.indexOf("26"))
// console.log(typeof (4))

// console.log(`${address}`);


// var user={
//     first:"vinay",
//     last:"kumar",
//     role:"admin",
//     logincount:45,
//     courseList:[],
//     buyCourse: function(couse){
//         this.courseList.push(couse)
//     },
//     getcoursecount:function(){
//         return `${this.first}is entrolled in total of ${this.courseList.length} couser`;
//     },
//      info:function(){
//         // return `${this.first} ${this.last}  ${this.role}  ${this.logincount}  ${this.courseList}`
//    return this ;
       
//    }
//           }
    //    user.buyCourse(`angulra`);
    //    user.buyCourse(`react`);
    //    user.buyCourse(`angulra123`);
    //    user.buyCourse(`angulradfsdf`);
    //    console.log(user.info());
    //  console.log( user. getcoursecount())
     
       
    //    console.table(user.info(user))



// var a=new Array("vinay","kumar","goud",4,"from","telengana");
// for(i=0;i<a.length;i++){
//     if(typeof (a[i])== "number")continue;
//     console.log(a[i])
//     }
// var i=0;
// do{
//     console.log(a[i]);  
//     i++;
// }
// while(i>a.length)
    
// EX:29
// var a=new Array("vinay","kumar","goud",4,"from","telengana");
// a.forEach(s=>(console.log(s)));

// EX:30
// var a=new Array("vinay","kumar","goud",4,"from","telengana");
// for(var s of a ){
//     console.log(s)
// }


// EX:31
// var a={"vinay":'kumar',"last":"name","middle":"goud"}
// for(var s in a){
//     console.log(s +":"+a[s])
// }

// var title1=document.getElementsByTagName("h1")
// var title=document.getElementsByTagName("h2")

// var count=1;
// setInterval(()=>{
//     if(count<100)
// count++;
// title1[0].innerText=count;
// },1);

// setTimeout(()=>{
// title[0].innerText="google"
// },600);