// Load all levels data
const loaddata = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(json => displaydata(json))
        .catch(error => console.error("Fetch error:", error)); // error handling যোগ করা
}

// Load words for a specific level
const loadlevelword = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
           removeBtn()
    const clickedbtn = document.getElementById(`lesson-btn-${id}`) // 💡 id clean করা হয়েছে
    displayLevelword(data.data)
    clickedbtn.classList.add("active") // 💡 active add করা
    console.log(clickedbtn)
  }
)
}

const removeBtn = ()=>{
  const lessonbtn = document.querySelectorAll(".lesson-btn")
  // console.log(lessonbtn)
  lessonbtn.forEach(btn=>btn.classList.remove('active'))
}



const Loadworddetail =async(id)=>{

    url = `https://openapi.programming-hero.com/api/word/${id}`
 const res = await fetch(url);
 const details = await res.json()
 displayworddetails(details.data)
}

// {
// "status": true,
// "message": "successfully fetched a word details",
// "data": {
// "word": "Vague",
// "meaning": "অস্পষ্ট",
// "pronunciation": "ভেইগ",
// "level": 2,
// "sentence": "His explanation was too vague to understand.",
// "points": 2,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "unclear",
// "indistinct",
// "ambiguous"
// ],
// "id": 22
// }
// }
const displayworddetails =(word)=>{
    console.log(word)
    const detailsbox =document.getElementById('detailscontainer')
    
    detailsbox.innerHTML= `

<div class="">
  <h2 class="text-2xl font-bold">${word.word} <i class="fa-solid fa-microphone"></i> ${word.pronunciation}</h2>
</div>
<div class="div">
  <h2 class=" font-bold">Meaning </h2>
  <p class="font-bangla">${word.meaning}</p>
</div> 
<div class="div">
  <h2 class=" font-bold">${word.sentence} </h2>
  <p class="font-bangla">Lorem ipsum dolor sit.</p>
</div>
<div class="div">
  <h2 class=" font-bold">Synonyms </h2>
  <span class="btn">${word.synonyms}</span>
  <span class="btn">syn1</span> 
  <span class="btn">syn1</span> 
  
</div>

    `
    document.getElementById('my_modal_1').showModal()


    
}


// Display words of a level
const displayLevelword = (words) => {
 
    const wordlevelcontainer = document.getElementById('word-container')
    wordlevelcontainer.innerHTML = "";

    if (words.length == 0) {
        wordlevelcontainer.innerHTML = `
        <div class=" font-bangla text-center col-span-full py-10 rounded-xl space-y-6">
            <img class="mx-auto" src="./assets/alert-error.png"/>
            <p class=" text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class=" font-bold text-4xl">নেক্সট Lesson এ যান।</h1>
        </div>
        `
        return; // কোনো word না থাকলে return
    }

    words.forEach(word => {
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">
                ${word.word ? word.word : "কোনো word পাওয়া যায়নি"}
            </h2>
            <p class="font-semibold">
                ${word.meaning ? word.meaning : "কোনো meaning পাওয়া যায়নি"}
            </p>
            <div class="font-bangla text-medium">
                ${word.pronunciation ? word.pronunciation : "পাওয়া যায়নি"}
            </div>
            <div class="flex justify-between items-center">
                <button onclick = "Loadworddetail(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button class="btn">
                    <i class="fa-solid fa-volume-low bg-[#1A91FF10] hover:bg-[#1A91FF80]"></i>
                </button>
            </div>
        </div>
        `;
        wordlevelcontainer.appendChild(card)
    })
};

// Display levels as buttons
const displaydata = lesson => {
    const container = document.getElementById("container")
    container.innerHTML = "";

    for (const lessons of lesson.data) {
        const divContainer = document.createElement('div')
        // 💡 ঠিক করা: id এর extra space remove করা
        divContainer.innerHTML = `
        <button id="lesson-btn-${lessons.level_no}" onclick="loadlevelword(${lessons.level_no})" class="btn btn-outline btn-primary m-2 lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lessons- ${lessons.level_no}
        </button>
        `
        container.appendChild(divContainer)
    }
}

// Initial load
loaddata();
