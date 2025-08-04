let extraDiv = null;
let extraImg = null;
let isShareActive = false;
const shareBtn = document.getElementById("share");
const wrapper = document.getElementById("wrapper");
const buttonWrapper = shareBtn.parentElement;
const userDiv = document.getElementById("user");

shareBtn.addEventListener("mousedown", function(){
    // update the button style while pressing
    if(!isShareActive){
        this.style.backgroundColor = "var(--DDblue)";
        this.style.color = "var(--LGblue)";
    }else{
        this.style.backgroundColor = "var(--LGblue)";
        this.style.color = "var(--DDblue)";
    }
});

if(window.innerWidth >= 768){
    shareBtn.addEventListener("mousedown", function(){
        if(!extraDiv){
            // create and insert new extra div
            extraDiv = document.createElement("div");
            extraDiv.className = "tooltip-box";
            extraDiv.innerHTML = 
                `<div style="display: flex; flex-direction: row; align-items: center;">
                    <span style="color: var(--Gblue); padding-right: 10px">S H A R E</span>
                    <svg style="padding-right: 10px" t="1754103535628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5428" width="40" height="40">
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" fill="var(--LGblue)" p-id="5429"></path>
                    </svg>
                    <svg style="padding-right: 10px" t="1754104091382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13202" width="35" height="35">
                        <path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z" fill="var(--LGblue)" p-id="13203"></path>
                    </svg>
                    <img src="./images/icon-pinterest.svg" alt="pinterest" width="30" height="30">
                </div>`
            ;
            buttonWrapper.appendChild(extraDiv);
            isShareActive = true;
        }else{
            buttonWrapper.removeChild(extraDiv);
            extraDiv = null;
            isShareActive= false;
        }
        //update the color of the button
        if(isShareActive){
            this.style.backgroundColor = "var(--DDblue)";
            this.style.color = "var(--LGblue)";
        }else{
            this.style.backgroundColor = "var(--LGblue)";
            this.style.color = "var(--DDblue)";
        }
    });
} else {
    shareBtn.addEventListener("mousedown", function(){
        // It's a little more complicated than desktop version
        // Since I have to remove the existing html tags
        if(!isShareActive){
            userDiv.style.backgroundColor = "var(--VDGblue)";
            // remove the existing tags which are unnecessary
            const childrenToRemove = userDiv.querySelectorAll("img, #user-info");
            childrenToRemove.forEach(child => child.remove());
            // create new tags with text and icons
            extraIcon = document.createElement("div");
            extraIcon.id = "Icon";
            extraIcon.style.display = "flex";
            extraIcon.style.flexDirection = "row";
            extraIcon.style.alignItems = "center";
            extraIcon.innerHTML = 
                `<span style="color: var(--Gblue); padding-right: 20px; padding-left: 20px">S H A R E</span>
                <svg style="padding-right: 20px" t="1754103535628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5428" width="40" height="40">
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" fill="var(--LGblue)" p-id="5429"></path>
                </svg>
                <svg style="padding-right: 20px" t="1754104091382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13202" width="35" height="35">
                    <path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z" fill="var(--LGblue)" p-id="13203"></path>
                </svg>
                <img src="./images/icon-pinterest.svg" alt="pinterest" width="30" height="30">`
            ;
            // make sure the location of the button
            wrapper.style.marginLeft = "auto";
            // insert tags
            userDiv.insertBefore(extraIcon, wrapper);
            isShareActive = true;
        }else{
            // do as if
            userDiv.style.backgroundColor = "transparent";
            const childrenToRemove = userDiv.querySelectorAll("#Icon");
            childrenToRemove.forEach(child => child.remove());
            extraImg = document.createElement("img");
            extraImg.src = "./images/avatar-michelle.jpg";
            extraImg.alt = "avatar";
            extraImg.id = "avatar";
            extraDiv = document.createElement("div");
            extraDiv.id = "user-info";
            extraDiv.innerHTML = 
                `<span id="user-name">Michelle Appleton</span>
                <br>
                <span id="date">28 Jun 2020</span>`
            ;
            userDiv.insertBefore(extraImg, wrapper);
            userDiv.insertBefore(extraDiv, wrapper);
            isShareActive = false;
        }
    });
}