const songs = [
    {
        title:"Samajavaragamana",
        artist:"Sid Sriram",
        src:"songs/samajavaragamana.mp3",
        cover:"https://upload.wikimedia.org/wikipedia/en/9/90/Samajavaragamana.jpg"
    },
    {
        title:"Inkem Inkem",
        artist:"Sid Sriram",
        src:"songs/Inkem-Inkem-Inkem-Kavale.mp3",
        cover:"https://i.ytimg.com/vi/VkmXX_jKmZw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUMK6xOpnoLApa6ON6g9WaD5I_RQ"
    },
    {
        title:"Butta Bomma",
        artist:"Armaan Malik",
        src:"songs/Butta-Bomma.mp3",
        cover:"https://sund-images.sunnxt.com/99327/1920x1080_ButtaBomma_99327_c3fe2525-8b00-4b3b-8da2-40b2654a8556.jpg"
    },
    {
        title:"Srivalli",
        artist:"Sid Sriram",
        src:"songs/Srivalli.mp3",
        cover:"https://i.ytimg.com/vi/_1BbDhiiV6A/maxresdefault.jpg"
    },
    {
        title:"Inka Edho",
        artist:"Suraj,Prashanthini",
        src:"songs/Inka-Edho.mp3",
        cover:"https://jiotvimages.cdn.jio.com/imagespublic/28/57/ee902a3d40e656939e85a1dff2b3b080_1702972241292_l_medium.jpg"
    },
    {
        title:"Nee Neeli Kanulloni",
        artist:"Gowtham Bharadwaj V",
        src:"songs/Nee-Neeli-Kannullona.mp3",
        cover:"https://i.ytimg.com/vi/kjgmC5ypL1c/mqdefault.jpg"
    },
    {
        title:"Golden Sparrow",
        artist:"Sublahshini, G V Prakash Kumar",
        src:"songs/Golden-Sparrow.mp3",
        cover:"https://i.ytimg.com/vi/1seR_ckLXz4/sddefault.jpg?v=67c96b8a"
    },
    {
        title:"Maate Vinadhuga",
        artist:"Sid Sriram",
        src:"songs/Maate-Vinadhuga (1).mp3",
        cover:"https://i.ytimg.com/vi/J-kfiXUTU1U/sddefault.jpg"
    },
    {
        title:"Naatu Naatu",
        artist:"Rahul Sipligunj",
        src:"songs/Naatu-Naatu.mp3",
        cover:"https://i.ytimg.com/vi/UIOsRQaRIEY/maxresdefault.jpg"
    },
    {
        title:"Kalaavathi",
        artist:"Sid Sriram",
        src:"songs/Kalaavathi.mp3",
        cover:"https://i.ytimg.com/vi/Vbu44JdN12s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMrTgz_aszIHSocoRDxnvf3mATlA"
    },
    {
        title:"Ramuloo Ramulaa",
        artist:"Anurag Kulkarni",
        src:"songs/Ramulo-Ramula.mp3",
        cover:"https://i.ytimg.com/vi/eDH_mMxRKFA/maxresdefault.jpg"
    },
    {
        title:"Param Sundari",
        artist:"Shreya Ghoshal",
        src:"songs/Dandiya-Mashup.mp3",
        cover:"https://i.ytimg.com/vi/UrBbZ2f2H6U/maxresdefault.jpg"
    },
    {
        title:"Neeli Neeli Aakasam",
        artist:"Sid Sriram",
        src:"songs/Neeli-Neeli-Aakasam.mp3",
        cover:"https://i.ytimg.com/vi/BVyd8fgdqQ8/maxresdefault.jpg"
    },
    {
        title:"Baitikochi Chuste",
        artist:"Anirudh",
        src:"songs/Baitikochi-Chuste.mp3",
        cover:"https://i.ytimg.com/vi/JXIiQFSj8Yg/maxresdefault.jpg"
    },
    {
        title:"Kadhile Kaalannadiga",
        artist:"Gowtham Bharadwaj & Shashaa Tirupati",
        src:"songs/Kadhile-Kaalannadiga.mp3",
        cover:"https://i.ytimg.com/vi/qhj-qG0Z_i4/maxresdefault.jpg"
    },
    {
        title:"Adiga Adiga",
        artist:"Sid Sriram",
        src:"songs/Adiga-Adiga-Nani.mp3",
        cover:"https://i.ytimg.com/vi/RmKl46sshJE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDblnfRdQkhGkFZluKjFTBd1m135g"
    },
    {
        title:"Saranga Dariya",
        artist:"Mangli",
        src:"songs/Saranga-Dariya.mp3",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN6Yw2qsjXeDwGKmz-vklqGB_FZGqt0z2MQ&s"
    },
    {
        title:"Heeriye ",
        artist:"Jasleen Royal, Sudharshan Ashok",
        src:"songs/Heeriye-Tamil-Version.mp3",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9XvJLIQHt4gjdTUggE0A9U0obguQa48Uaw&s"
    },
    {
        title:"Life Of Ram",
        artist:"Pradeep Kumar",
        src:"songs/Life-of-Ram.mp3",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41xaXAFeVpZvv5p6r6qc9nNtqs_tAhj58Ew&s"
    },
    {
        title:"Oh Sita Hey Rama",
        artist:"SPB Charan and Ramya Behara",
        src:"songs/Oh-Sita-Hey-Rama.mp3",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UWxVo1Gwmd_ZROcHbSOqIto6yPSeBtxUmA&s"
    },
    {
        title:"Materani Chinnadani",
        artist:"P. Susheela, S. P. Balasubrahmanyam",
        src:"songs/Materani-Chinnadani.mp3",
        cover:"https://i.scdn.co/image/ab67616d0000b273e3409c3ea876e9d4ef8e64bb"
    }
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");
const autoplay = document.getElementById("autoplay");

let songIndex = 0;
let isPlaying = false;


// Load Song
function loadSong(song){
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;

    updatePlaylistActive();
}

loadSong(songs[songIndex]);


// Play Song
function playSong(){
    isPlaying = true;
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}


// Pause Song
function pauseSong(){
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
}


playBtn.addEventListener("click",()=>{
    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
});


// Next Song
function nextSong(){
    songIndex++;

    if(songIndex > songs.length -1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}


// Previous Song
function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener("click",nextSong);
prevBtn.addEventListener("click",prevSong);


// Progress Update
audio.addEventListener("timeupdate",(e)=>{

    const {duration,currentTime} = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;


    // Duration
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if(durationSeconds < 10){
        durationSeconds = `0${durationSeconds}`;
    }

    if(durationSeconds){
        durationEl.innerText = `${durationMinutes}:${durationSeconds}`;
    }


    // Current Time
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);

    if(currentSeconds < 10){
        currentSeconds = `0${currentSeconds}`;
    }

    currentTimeEl.innerText = `${currentMinutes}:${currentSeconds}`;
});


// Set Progress
progressContainer.addEventListener("click",(e)=>{

    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});


// Volume
volume.addEventListener("input",()=>{
    audio.volume = volume.value;
});


// Auto Play
audio.addEventListener("ended",()=>{

    if(autoplay.checked){
        nextSong();
    }
    else{
        pauseSong();
    }
});


// Playlist
songs.forEach((song,index)=>{

    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${song.title}</strong><br>
        <small>${song.artist}</small>
    `;

    li.addEventListener("click",()=>{
        songIndex = index;
        loadSong(songs[songIndex]);
        playSong();
    });

    playlist.appendChild(li);
});


// Active Playlist Song
function updatePlaylistActive(){

    const items = document.querySelectorAll("#playlist li");

    items.forEach((item,index)=>{

        item.classList.remove("active");

        if(index === songIndex){
            item.classList.add("active");
        }
    });
}
