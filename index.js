let images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sign_language_A.svg/91px-Sign_language_A.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sign_language_B.svg/53px-Sign_language_B.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sign_language_C.svg/111px-Sign_language_C.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sign_language_D.svg/59px-Sign_language_D.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sign_language_E.svg/78px-Sign_language_E.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sign_language_F.svg/59px-Sign_language_F.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sign_language_G.svg/120px-Sign_language_G.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_H.svg/120px-Sign_language_H.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sign_language_I.svg/68px-Sign_language_I.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sign_language_J.svg/120px-Sign_language_J.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_K.svg/66px-Sign_language_K.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sign_language_L.svg/88px-Sign_language_L.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sign_language_M.svg/79px-Sign_language_M.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sign_language_N.svg/78px-Sign_language_N.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sign_language_O.svg/92px-Sign_language_O.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sign_language_P.svg/120px-Sign_language_P.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sign_language_Q.svg/95px-Sign_language_Q.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sign_language_R.svg/58px-Sign_language_R.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sign_language_S.svg/92px-Sign_language_S.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sign_language_T.svg/91px-Sign_language_T.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sign_language_U.svg/55px-Sign_language_U.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sign_language_V.svg/58px-Sign_language_V.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sign_language_W.svg/61px-Sign_language_W.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sign_language_X.svg/83px-Sign_language_X.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sign_language_Y.svg/120px-Sign_language_Y.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Sign_language_Z.svg/78px-Sign_language_Z.svg.png"
];
let letters = "abcdefghijklmnopqrstuvwxyz"
let correctLetter;
let choices = ["", "", "", ""];
let streak = 0;

const title = document.getElementById("title");
const titleLetter = document.getElementById("titleLetter");
const response = document.getElementById("response");
const streakText = document.getElementById("streakText");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

startGame();

function startGame(){
    letters = "abcdefghijklmnopqrstuvwxyz";

    let randomNum = Math.floor(Math.random() * 26)
    choices[0] = letters.charAt(randomNum);
    removeLetter(randomNum);

    randomNum = Math.floor(Math.random() * 25)
    choices[1] = letters.charAt(randomNum);
    removeLetter(randomNum);

    randomNum = Math.floor(Math.random() * 24)
    choices[2] = letters.charAt(randomNum);
    removeLetter(randomNum);

    randomNum = Math.floor(Math.random() * 23)
    choices[3] = letters.charAt(randomNum);
    removeLetter(randomNum);
    
    correctLetter = choices[Math.floor(Math.random()*4)];

    console.log(choices);
    console.log(correctLetter);
    
    letters = "abcdefghijklmnopqrstuvwxyz";

    img1.src = images[letters.indexOf(choices[0])];
    img2.src = images[letters.indexOf(choices[1])];
    img3.src = images[letters.indexOf(choices[2])];
    img4.src = images[letters.indexOf(choices[3])];

    titleLetter.textContent = correctLetter.toUpperCase();
}

function onClick(event)
{
    let letter = letters[images.indexOf(event.target.src)];

    if (letter == correctLetter)
    {
        startGame();
        response.textContent = "Correct";
        response.style.color = "green";
        streak++;
        updateStreak();
    }
    else {
        event.target.src = "Images/x.png";
        response.textContent = "Incorrect";
        response.style.color = "red";
        streak = 0;
        updateStreak();
    }
}

img1.addEventListener("click", onClick)
img2.addEventListener("click", onClick)
img3.addEventListener("click", onClick)
img4.addEventListener("click", onClick)

function updateStreak() {
    if (streak == 0)
    {
        streakText.style.display = "none";
    }
    else {
        streakText.style.display = "block";
        streakText.textContent = `${streak}🔥`;
    }
}
function removeLetter(index) {
    letters = letters.slice(0, index) + letters.slice(index + 1);
}