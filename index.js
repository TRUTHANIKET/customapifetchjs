// const url="https://reverseapi-aniket.herokuapp.com/reverse/"
// var a=23
// const request=new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
// // console.log(request,request.readyState)
// console.log(request.responseText)

// });

// request.open('GET',url +a);
// request.send();


const url="https://reverseapi-aniket.herokuapp.com/reverse/"
async function ledata(){
    a=prompt("Enter the number to get the reverse");
    const response=await fetch(url+a);
    const data=await response.json();
    console.log(data.reverse)
    alert(data.reverse)
}

ledata();