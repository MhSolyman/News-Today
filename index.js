const AllNewsCategory = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)

        .then(res => res.json())
        .then(data => AllNewsCategoryOne(data.data.news_category))
        .catch('error');
        
}
AllNewsCategory()

const AllNewsCategoryOne =(dataAll)=>{
    
    let ul=document.getElementById("navbar-nav")
for(const data of dataAll)
{
    let li=document.createElement('li');
    li.classList.add('nav-item')
    li.innerHTML=`
    
    <a onclick="newsCategory('${data.category_id}')" class="nav-link mx-4" href="#">${data.category_name}</a>
  `
 ul.appendChild(li)
    
    
    
   
}

}

const newsCategory=(category_id)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)

        .then(res => res.json())
        .then(data => news(data.data))
        .catch('error');
        document.getElementById('none').classList.remove('d-none')

}
let news=(data)=>{
    
    if(data==''){
        console.log('no data')
        document.getElementById('data-find').innerText='No data found';
        document.getElementById('none').classList.add('d-none')
    }
    count=0
    let card=document.getElementById("card");
    card.innerText='';
    for(const c of data){
        let details= c.details.slice(0,400);
        console.log(c)
        let dli=document.createElement('div');
        dli.classList.add('col-12')
    dli.innerHTML=`<div class="row border bg-light d-flex align-items-center "><img class="col-lg-6 col-md-6  col-sm-12 "
    src="${c.image_url}" alt="">
  <div class="col-lg-6 col-md-6  col-sm-12" >
    <h3><b>'${c.title}'</b></h3>
    <p>${details}...</p>
<div>
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >
      <img src="${c.author.img}" alt="" width="30" height="24" class="d-inline-block align-text-top">
       ${c.author.name ?c.author.name:'No data available '}
    </a> <span><i class="fa-regular fa-eye"></i> ${c.total_view?c.total_view:'No data available'}</span>
    <div>
    <button type="button" onclick="newsAllSee('${c._id}')" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
    </div>
  </div>
</nav>
</div>

  </div>
</div>`;
 card.appendChild(dli);
 let countOne =count++ ;
 countOne= countOne+1; 
 document.getElementById('data-find').innerText=`${count}  items found for category Entertainmen`
;
console.log(countOne);
document.getElementById('none').classList.add('d-none')
    }
   

}

const newsAllSee=(news_id)=>{
    fetch(` https://openapi.programming-hero.com/api/news/${news_id}`)

        .then(res => res.json())
        .then(data => showData(data.data))
        .catch('error');

};
const showData=(data)=>{
  
for(const c of data){
    document.getElementById("img").src =`${c.image_url}` ;
    document.getElementById('card-title').innerText=c.title;
    document.getElementById('p').innerText=c.details;
    let imgTwo=document.getElementById('imgTwo');
    imgTwo.src=`${c.author.img}`;
    let authorName=document.getElementById('authorName')
    authorName.innerText=`${c.author.name ?c.author.name:'No data available '}`
document.getElementById('i').innerText=`${c.total_view ?c.total_view:'No data available'}`
  
   
  
console.log(c)
}
}


