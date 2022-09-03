const AllNewsCategory = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)

        .then(res => res.json())
        .then(data => a(data.data.news_category));
}
AllNewsCategory()

const a =(b)=>{
    let count=0;  
    let ul=document.getElementById("navbar-nav")
for(const c of b)
{
    let li=document.createElement('li');
    li.classList.add('nav-item')
    li.innerHTML=`
    
    <a onclick="newsCategory('${c.category_id}')" class="nav-link" href="#">${c.category_name}</a>
  `
 ul.appendChild(li)
    
    
  count++;   
   
}
let num=document.getElementById('num').innerHTML=`<h3></h3>`;
}

const newsCategory=(category_id)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)

        .then(res => res.json())
        .then(data => news(data.data));

}
let news=(data)=>{
    let card=document.getElementById("card");
    card.innerText='';
    for(const c of data){
        console.log(c)
        let dli=document.createElement('div');
        dli.classList.add('col-12')
    dli.innerHTML=`<div class="row border bg-light d-flex align-items-center "><img class="col-lg-6 col-md-6  col-sm-12 "
    src="${c.image_url}" alt="">
  <div class="col-lg-6 col-md-6  col-sm-12" >
    <h1><b>'${c.title}'</b></h1>
    <p>${c.details}</p>


  </div>
</div>`;
 card.appendChild(dli)

        
       
    }


}




