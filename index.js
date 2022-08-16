const songList = document.getElementById('song_list')
const singleSongs = document.getElementsByClassName('song_item_details')
const playBtn = document.getElementById('play-btn')
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')

playBtn.addEventListener("click",()=>{
    const songChoise = s
})

const songs =[
    {
        name:'Under the influence',
        artist:'Chris Brown',
        isLike:false,
        length: '2:08',
        url:6
    },
    {
        name:'Life is Good',
        artist:'Future',
        isLike:false,
        length: '2:08',
        url:5
    },
    {
        name:'Alright',
        artist:'Kendrick Lamar',
        isLike:false,
        length: '2:08',
        url:7
    },
    {
        name:'Kwaku The traveller',
        artist:'Black Sheriff',
        isLike:false,
        length: '2:08',
        url:5
    }
]

const song_list = songs.map(item => {
    return `
    <div class="song_item_details">
    <a href="">
    <i class="ri-play-circle-line"></i>
    </a>
    
    <div class="song-name">
    <p class="song_title">${item.name}</p>
    <p class="song_creator">${item.artist}</p>
    </div>
    
    <div class="song-info">
    <span>
    <i class="ri-heart-line"></i>
    </span>
    
    <p class="song-time">${item.length}</p>
    
    <span>
    <i class="ri-more-fill"></i>
    </span>
    </div>
    </div>
    `
}).join('')

for (let i = 0; i < singleSongs.length; i++){
    singleSongs[i].addEventListener("click",playSongs)
}

songList.innerHTML = song_list

const place = 0

function playSongs(e){
    place = Array.from(singleSongs).indexOf(e.target)
}

function play(){
    songs[place].play
}