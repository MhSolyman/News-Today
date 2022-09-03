const AllNewsCategory = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)

        .then(res => res.json())
        .then(data => AllNewsCategoryOne(data.data.news_category))
        .catch(error=>console.log(error));
        
}
AllNewsCategory()

const AllNewsCategoryOne =(dataAll)=>{
    
    let ul=document.getElementById("navbar-nav")

    dataAll.forEach((data)=>{let li=document.createElement('li');
    li.classList.add('nav-item')
    li.innerHTML=`
    
    <a onclick="newsCategory('${data.category_id}')" class="nav-link mx-4" href="#">${data.category_name}</a>
  `
 ul.appendChild(li)})
 
}

const newsCategory=(category_id)=>{

    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)

        .then(res => res.json())
        .then(data => news(data.data))
        .catch(error=>console.log(error));
        document.getElementById('none').classList.remove('d-none')

}
let news=(data)=>{
  
  data.sort((a, b)=>{return b.total_view - a.total_view});
  
    if(data==''){
       
        document.getElementById('data-find').innerText='No data found';
        document.getElementById('none').classList.add('d-none');
    }else{count=0
      let card=document.getElementById("card");
      card.innerText='';
      data.forEach((c)=>{
        let details= c.details.slice(0,400);
          
        let div=document.createElement('div');
        div.classList.add('col-12')
    div.innerHTML=`<div class=" my-2 row border bg-light d-flex align-items-center "><img class="col-lg-6 col-md-6  col-sm-12 "
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
 card.appendChild(div);
 let countOne =count++ ;
 countOne= countOne+1; 
 document.getElementById('data-find').innerText=`${count}  items found for category Entertainmen`
;

document.getElementById('none').classList.add('d-none')
      
      });
      
    
    }
   

}

const newsAllSee=(news_id)=>{
    fetch(` https://openapi.programming-hero.com/api/news/${news_id}`)

        .then(res => res.json())
        .then(data => showData(data.data))
        .catch(error=>console.log(error));

};
const showData=(data)=>{
  
  data.forEach((c)=>{document.getElementById("img").src =`${c.image_url}` ;
  document.getElementById('card-title').innerText=c.title;
  document.getElementById('p').innerText=c.details;
  document.getElementById('date').innerText=`${c.author.published_date?c.author.published_date:'No data available '}`;
  let imgTwo=document.getElementById('imgTwo');
  imgTwo.src=`${c.author.img}`;
  let authorName=document.getElementById('authorName')
  authorName.innerText=`${c.author.name ?c.author.name:'No data available '}`
document.getElementById('i').innerText=`${c.total_view ?c.total_view:'No data available'}`
})

}