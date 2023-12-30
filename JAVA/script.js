
// var data=[]

// var myHttp=new XMLHttpRequest();
// myHttp.open('GET','https://jsonplaceholder.typicode.com/posts');
// myHttp.send();



// myHttp.addEventListener('loadend', function(){



//     if(myHttp.status ==200 )
//     {
//          data=JSON.parse(myHttp.responseText)


//          display()
//     }
    

// })

// function display(){
//     var cal =``;
//     for(var i=0; i<data.length;i++){
//         cal +=`
//         <div class="col-md-4">

//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body text-center">
//                       <h5 class="card-title">${data[i].id}</h5>
//                       <p class="card-text">${data[i].title}</p>
//                     </div>
//                   </div>

//             </div>

//         `
//     }
//     document.getElementById('colsData').innerHTML=cal
// }

// var data=[]
// var htt= new XMLHttpRequest;
//  htt.open('GET','https://jsonplaceholder.typicode.com/posts');
//  htt.send()

//  htt.addEventListener('loadend',function(){
//     if(htt.status==200){

//         data=JSON.parse(htt.responseText)

//         display()

//     }
//  })


//  function display(){
//     var car=``
//     for( var i=0;i<data.length;i++){
//         car +=`
        
//         <div class="col-md-4">

//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body text-center">
//                       <h5 class="card-title">${data[i].title}</h5>
//                       <p class="card-text">${data[i].id}</p>
//                     </div>
//                   </div>

//             </div>

//         `
//     }

//     document.getElementById('colsData').innerHTML=car
//  }

// var http=new XMLHttpRequest
// var data=[]

// http.open('GET','https://jsonplaceholder.typicode.com/posts')

// http.send()

// http.addEventListener('loadend',function(){
//     if(http.status==200){
//         data=JSON.parse(http.response)

//         display()
//     }
// })

// function display(){
//     var car=``
//     for(var i=0;i<data.length;i++){
        
//         car+=`
//            <div class="col-md-4">

//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body text-center">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">content</p>
//                     </div>
//                   </div>

//             </div>

//         `
//     }

//     document.getElementById('colsData').innerHTML=car
// }




var link= document.querySelectorAll('.home .nav-link')

for(var i=0; i<link.length;i++){
    link[i].addEventListener('click',function(e){
        var apidata=e.target.text;
        getapi(apidata)

    })
}


getapi('carrot')

var data=[]


function getapi(meal){

    var http=new XMLHttpRequest();

    http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${meal}`)

     http.send()

    http.addEventListener('readystatechange',function(){
    if(http.readyState ==4){
       data= JSON.parse(http.response).recipes
       display()
    }
})

}


function display(){
    var cal=``
    for(var i=0;i<data.length;i++){
        cal +=`
        
               <div class="card m-auto" style="width: 18rem;">
                    <img src="${data[i].image_url}" class="card-img-top imgs" alt="..." >
                    <div class="card-body">
                      <h5 class="card-title">${data[i].title}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a  target="_blank"  href="${data[i].source_url}" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  `
    }

    document.getElementById("colsData").innerHTML=cal
}










// var link=document.querySelectorAll('.home .nav-link')

// for(var i=0; i<link.length;i++)
// {
//     link[i].addEventListener('click',function(e){

//         var send=e.target.text

//         api(send)

//     })

// }


// var data=[]

// api('pizza')
// function api(send){
// var htt=new XMLHttpRequest();
//  htt.open('GET','https://forkify-api.herokuapp.com/api/search?q=${meal}')

//  htt.send()
//  htt.addEventListener('readystatechange',function(){
//     if(htt.readyState==4){
//         data=JSON.parse(htt.response).recipes;
//         display()
//     }
//  })

// }

//  function display(){
//     var cal=``
//     for(var i=0;i<data.length;i++){
//         cal+=`
        
//         <div class="card m-auto" style="width: 18rem;">
//                     <img src="${data[i].image_url}" class="card-img-top imgs" alt="..." >
//                      <div class="card-body">
//                        <h5 class="card-title">${data[i].title}</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a  target="_blank"  href="${data[i].source_url}" class="btn btn-primary">Go somewhere</a>
//                   </div>
//                  </div>
        
        
//         `
//     }
//     document.getElementById('colsData').innerHTML=cal
//  }