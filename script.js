let images=document.querySelectorAll(".image");
let timeArea=document.querySelector(".time-area")
const imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BXoWfT_A10v895WuK1RrdoGjVf_xLGfUJg&usqp=CAU";
let counter=0;
let second=0;
let minute=0;

function shuffleCards()
{
    let randomNumberArray=[];
    let a=1;
        for(let i=0;i<10;i++)
        {
            let randomNumber=Math.floor(Math.random()*10);
              if(!randomNumberArray.includes(randomNumber))
                {
                    randomNumberArray.push(randomNumber);
                     images[randomNumber].alt=`${a}.jpg`;
                        if(a<5)
                            {
                                a++;
                            }
                        else
                            {
                                a=1;
                            }   
                }
                else
                {
                    i--;
                }
        }
}


function timer()
{
setInterval(() => {
    second++;
    if(second==60)
    {
        minute++;
    }
    timeArea.innerHTML="Time:"+minute<10?"0"+minute:minute +":"+second<10?"0"+second:second
}, 1000);
}



images.forEach(element => {
    element.addEventListener("click",(e)=>{
    

        let selectedCard=e.target;
        selectedCard.classList.add("flipped");
        let flippedCard=document.querySelectorAll(".flipped");

               
          flippedCard[0].src=flippedCard[0].alt;
          flippedCard[1].src=flippedCard[1].alt;

          if(flippedCard.length==2)
          {
              if(flippedCard[0].alt==flippedCard[1].alt)
                {
                    flippedCard[0].classList.add("matched");
                    flippedCard[1].classList.add("matched");

                    flippedCard[0].classList.remove("flipped");
                    flippedCard[1].classList.remove("flipped");
                    counter++;
                        if(counter==5)
                        {
                            timeArea.innerHTML=minute+":"+ second;
                        }
                      
                }
                else
                {
                    setTimeout(() => {
                        flippedCard[0].src=imageURL;
                        flippedCard[1].src=imageURL;
                        flippedCard[0].classList.remove("flipped");
                        flippedCard[1].classList.remove("flipped");
                    }, 750);
                }
          }

    })
});