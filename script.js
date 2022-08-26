 // Selector seçimi 
let images=document.querySelectorAll(".image");
let timeArea=document.querySelector(".time-area");
// Değişkenler 
const imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BXoWfT_A10v895WuK1RrdoGjVf_xLGfUJg&usqp=CAU";
let counter=0;
let second=0;
let minute=0;

// Her seferinde fotoğrafların farklı yerlere gelmesini sağlayan fonksiyon.
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

// Oyun bittiğinde süreyi göstermek için yazdığım fonksiyon
function timer()
{
 setInterval(() => {
    second++;
    if(second==60)
    {
        minute++;
    }
    // timeArea.innerHTML="Time:"+minute<10?"0"+minute:minute +":"+second<10?"0"+second:second
}, 1000);
}


// Her bir fotoğrafa click eventi vermek için foreach kullandım.
images.forEach(element => {
element.addEventListener("click",(e)=>{
    
    // Tıklanan resimleri bir değişkende tuttum.
        let selectedCard=e.target;
    // Değişkene bir class ekledim kontrol edebilmek için.
        selectedCard.classList.add("flipped");
    // Class eklediğim öğeleri seçtim.
        let flippedCard=document.querySelectorAll(".flipped");

      // Seçilen resimlerin linkini alt bölümünde verdiğim resimle değiştirdim.         
          flippedCard[0].src=flippedCard[0].alt;
          flippedCard[1].src=flippedCard[1].alt;

         // Eğer iki tane kart seçilmişse
          if(flippedCard.length==2)
          {
            // Seçilen kartların alt urlleri eşit mi diye kontrol ettim.
              if(flippedCard[0].alt==flippedCard[1].alt)
                {
                    // Eşitse aynı resimdir ve "matched" adında bir class ekledim.
                    flippedCard[0].classList.add("matched");
                    flippedCard[1].classList.add("matched");
                    // Ve seçilen sınıfa eklediğim "flipped" sınıfını kaldırdım.
                    flippedCard[0].classList.remove("flipped");
                    flippedCard[1].classList.remove("flipped");
                    // Başlangıçta 0 olarak tanımladığım counter her eşleşmede bir artacak. Oyunun bitmesini kontrol etmek için tanımladım.
                    counter++;
                        //Eğer counter 5 olduysa oyun bitmiştir.
                        if(counter==5)
                        {
                            // Oyunu ne kadar sürede bitirdiğini ekrana getiren kod.
                            timeArea.innerHTML=`Your time was : ${second} second `
                           
                        }
                      
                }
                else
                {
                    // Eğer seçilen 2 resimin alt urlleri birbirine eşleşmiyorsa
                    setTimeout(() => {
                        // Başlangıç görsellerine geri döndürüyorum
                        flippedCard[0].src=imageURL;
                        flippedCard[1].src=imageURL;
                        // Seçilen kartlardan "flipped" sınıfını çıkarıyorum.
                        flippedCard[0].classList.remove("flipped");
                        flippedCard[1].classList.remove("flipped");
                    }, 750);
                }
          }

    })
});