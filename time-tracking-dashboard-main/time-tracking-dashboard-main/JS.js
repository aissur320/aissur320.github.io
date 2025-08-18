const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
// initualize the data
let workData, playData, studyData, exerciseData, socialData, selfcareData;

fetch("./data.json")
.then(response => response.json())
.then(data =>{
    // get data from json
    workData = data.find(item => item.title === "Work").timeframes;
    playData  = data.find(item => item.title === "Play").timeframes;
    studyData = data.find(item => item.title === "Study").timeframes;
    exerciseData = data.find(item => item.title === "Exercise").timeframes;
    socialData = data.find(item => item.title === "Social").timeframes;
    selfcareData = data.find(item => item.title === "Self Care").timeframes;
})
.catch(error => console.error('Reading error:', error));

btn1.addEventListener("click", function(){
    document.getElementById("work-time").textContent = workData.daily.current + "hrs";
    document.getElementById("work-previous").textContent = "Yesterday - " + workData.daily.previous + "hrs";
    document.getElementById("play-time").textContent = playData.daily.current + "hrs";
    document.getElementById("play-previous").textContent = "Yesterday - " + playData.daily.previous + "hrs";
    document.getElementById("study-time").textContent = studyData.daily.current + "hrs";
    document.getElementById("study-previous").textContent = "Yesterday - " + studyData.daily.previous + "hrs";
    document.getElementById("exercise-time").textContent = exerciseData.daily.current + "hrs";
    document.getElementById("exercise-previous").textContent = "Yesterday - " + exerciseData.daily.previous + "hrs";
    document.getElementById("social-time").textContent = socialData.daily.current + "hrs";
    document.getElementById("social-previous").textContent = "Yesterday - " + socialData.daily.previous + "hrs";
    document.getElementById("selfcare-time").textContent = selfcareData.daily.current + "hrs";
    document.getElementById("selfcare-previous").textContent = "Yesterday - " + selfcareData.daily.previous + "hrs";
})

btn2.addEventListener("click", function(){
    document.getElementById("work-time").textContent = workData.weekly.current + "hrs";
    document.getElementById("work-previous").textContent = "Last week - " + workData.weekly.previous + "hrs";
    document.getElementById("play-time").textContent = playData.weekly.current + "hrs";
    document.getElementById("play-previous").textContent = "Last week - " + playData.weekly.previous + "hrs";
    document.getElementById("study-time").textContent = studyData.weekly.current + "hrs";
    document.getElementById("study-previous").textContent = "Last week - " + studyData.weekly.previous + "hrs";
    document.getElementById("exercise-time").textContent = exerciseData.weekly.current + "hrs";
    document.getElementById("exercise-previous").textContent = "Last week - " + exerciseData.weekly.previous + "hrs";
    document.getElementById("social-time").textContent = socialData.weekly.current + "hrs";
    document.getElementById("social-previous").textContent = "Last week - " + socialData.weekly.previous + "hrs";
    document.getElementById("selfcare-time").textContent = selfcareData.weekly.current + "hrs";
    document.getElementById("selfcare-previous").textContent = "Last week - " + selfcareData.weekly.previous + "hrs";
})

btn3.addEventListener("click", function(){
    document.getElementById("work-time").textContent = workData.monthly.current + "hrs";
    document.getElementById("work-previous").textContent = "Last month - " + workData.monthly.previous + "hrs";
    document.getElementById("play-time").textContent = playData.monthly.current + "hrs";
    document.getElementById("play-previous").textContent = "Last month - " + playData.monthly.previous + "hrs";
    document.getElementById("study-time").textContent = studyData.monthly.current + "hrs";
    document.getElementById("study-previous").textContent = "Last month - " + studyData.monthly.previous + "hrs";
    document.getElementById("exercise-time").textContent = exerciseData.monthly.current + "hrs";
    document.getElementById("exercise-previous").textContent = "Last month - " + exerciseData.monthly.previous + "hrs";
    document.getElementById("social-time").textContent = socialData.monthly.current + "hrs";
    document.getElementById("social-previous").textContent = "Last month - " + socialData.monthly.previous + "hrs";
    document.getElementById("selfcare-time").textContent = selfcareData.monthly.current + "hrs";
    document.getElementById("selfcare-previous").textContent = "Last month - " + selfcareData.monthly.previous + "hrs";
})

