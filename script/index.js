// https://openapi.programming-hero.com/api/levels/all
const loaddata =()=>{

    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=> res.json())
    .then(json => displaydata(json))

}
const displaydata = lesson =>{
   
    
    const container = document.getElementById("container")
    container.innerHTML = "";

  for(const lessons of lesson.data)
  {
console.log(lessons)
    const divContainer = document.createElement('div')
    divContainer.innerHTML = `
    
          <button class="btn btn-outline btn-primary">
           <i class="fa-solid fa-book-open"></i>Lessons- ${lessons.level_no}
           </button>
 
    
    
    
    
    `
container.appendChild(divContainer)

  }


    
//   const div = document.createElement('div')
//   div.innerHTML = 

}

loaddata();