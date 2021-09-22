let score=0;


//btn submit
const submit=document.querySelector(".btnSubmit");
//question number 1
const q1a=document.querySelector(".q1a");
//question number 2
const q2b=document.querySelector(".q2b");
//question number 3
const q3b=document.querySelector(".q3b");
//question number 4
const q4c=document.querySelector(".q4c");
//question number 5
const q5a=document.querySelector(".q5a");
//question number 6
const q6d=document.querySelector(".q6d");
//question number 7
const q7b=document.querySelector(".q7b");
//question number 8
const q8c=document.querySelector(".q8c");
//question number 9
const q9a=document.querySelector(".q9a");
//question number 10
const q10b=document.querySelector(".q10b");
//window-modal
const window_modal=document.querySelector(".window_modal");
//hidden class
const hidden=document.querySelector(".hidden");
//overlay modal
const overlay=document.querySelector(".overlay");
//clsoe window-modal
const close=document.querySelector(".window_close");
//get your score
const yourscore=document.querySelector(".yourscore");
//button start quiz
const btnStart=document.querySelector(".btnStart");
//Middle quiz
const middle=document.querySelector(".middle");
//start quiz modal
const quizModal=document.querySelector(".startQuiz");
//overlay start quiz
const overlayQuiz=document.querySelector(".overlayStart");
//open openReward
const lookReward=document.querySelector(".lookReward​");
//image reward
const imgReward=document.querySelector(".imgReward");
//name reward
const nameReward=document.querySelector(".name_reward");
btnStart.addEventListener("click", function(){
    document.querySelector("#playAudio").play();
    quizModal.classList.add('hidden');
    overlayQuiz.classList.add('hidden');
    // middle.classList.remove('hidden');
      $('.middle').slideDown("slow");
})
submit.addEventListener("click",function(){
    document.querySelector("#playAudio").play();
    $('.middle').slideUp("slow");
 if(q1a.checked){
  score+=10;
 }
 if(q2b.checked){
     score+=10;
 }
 if(q3b.checked){
     score+=10;
 }
 if(q4c.checked){
     score+=10;
 }
 if(q5a.checked){
     score+=10;
 }
 if(q6d.checked){
     score+=10;
 }
 if(q7b.checked){
     score+=10;
 }
 if(q8c.checked){
     score+=10;
 }
 if(q9a.checked){
     score+=10;
 }
 if(q10b.checked){
     score+=10;
 }
 window_modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
 yourscore.textContent=`${score} points`;
})
close.addEventListener("click",function(){
    window_modal.classList.add('hidden');
    overlay.classList.add('hidden');
    $(".middle").slideDown("slow");

    score=0;
})

lookReward.addEventListener("click",function(){
    $(".reward_modal").slideDown("slow");
    if(score===0||score===10){
        imgReward.src="candy.png";
        nameReward.textContent="Candy";
    }
     else if(score===20||score===30){
         imgReward.src="coca.png";
         nameReward.textContent="Caca Cola";
         
     }
    else if(score===40||score===50){
        imgReward.src="nokia.png";
        nameReward.textContent="Nokia 1280";
    }
    else if(score===60|| score===70){
        imgReward.src="airpod.png";
        nameReward.textContent="Airpods";
    }
    else if(score===80){
        imgReward.src="iphone13.png";
        nameReward.textContent="I phone 13 pro max";
    }
    else if(score===90){
        imgReward.src="mac.png";
        nameReward.textContent="Macbook Pro";
    }
    else if(score===100){
        imgReward.src="roll.jpg";
        nameReward.textContent="Rolls Royce Cullinan";
    }
    else{
       alert("Try again...");
    }
    score=0;
})