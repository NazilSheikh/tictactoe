// let access button of box :
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

// which players turn would be first :

let turnO =true;  // playerX , player0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
// new FUNCTION WHICH CAN RESET AALL GAME passeD ABOVE ||| %^^^^ : 

const resetgame = () =>
{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

// hr ek button ke click per kuch harkat ho tho click on event buttons :
// eventlistners ka use liyaa
// he ek individual box per eventlistner add kiyaa
// ye for loop jitne box hai utnaa chalegaa i.e -> 9 times :
boxes.forEach((box)=>{
 box.addEventListener("click", () => {
    // console.log("box was clicked ");
    // jaise hi click karenge hm unko kuch value de sakte hai :
    if(turnO)   // playerO
    {
           box.innerText = "O";
        // again true nhi honi agli baar ke liye
        // player x ki turn aaye
        turnO = false;
    }
    else
    {
      box.innerText = "X";  // playerx
        // turn palyer 0 ki gaye
        turnO=true;
    }
//   ab hmne button ko ek baar click kara tho X  fir  click THO O esa nhi ho
// button ko x hi rhne do
// we use it 
box.disabled=true;


// winner ke liye check iske pass call gaye fir necche and isne saare pattern ko nikaalaa
checkwinner();
checkdraw();

});
});

   // ek BAAR WINNER MILNE KE BAAD AGAIN NHI BANNE WINNER disable box  :
   const disableboxes =()=> {
    for (let box of boxes)
    {
        box.disabled=true;
    }
   };

   // JAB NEW GAME START HO THO BOXES VISIBLE HO :
   const enableboxes = ()=>{
    for (let box of boxes)
    {
        box.disabled=false;
        
        // mtlb jab reset ho gi value tho text empty kuch bhi nhi hogaa
        box.innerText="";
    }
   };

    const showWinner =(winner) =>{
        msg.innerText =`Congratulation , Winner is ${winner}`;
        // tho ab classlist se remove kiya hide taaki dekh sakhe vo :
        msgcontainer.classList.remove("hide");
           // ek BAAR WINNER MILNE KE BAAD AGAIN NHI BANNE WINNER disable box CALL UPPER ^^^ :
       disableboxes();
    }

const checkwinner = () =>
{
    // copy see 
//   loop lagaya 
for(let pattern of winPatterns)
{
    // individual posn index jin per check karna hai 
    // jaise 1 4 7 hai tho we have to check index(posn) 1 per konsaa ele hai ;
    
    // console.log([pattern[0]],[pattern[1]],[pattern[2]]);

    // HM 0TH b0x 4th box : yaani boxes waale array ke ander is index  per jaao
    // AT LASST SARE BOXESS AA GAYE POSN OR NO KE HISAB SE HOVER KARP
// INNERTEXT SE ELE  BATAAYEGA : 
    // console.log(
    //     boxes[pattern[0]].innerText,  // posn 1 per kyaa hai O YA X;
    //     boxes[pattern[1]].innerText,  // POSN 2 " "
    //     boxes[pattern[2]].innerText   // POSN 3 " "
    //    );


       let posn1Val= boxes[pattern[0]].innerText;  // posn 1 ki value  per kyaa hai O YA X;
       let posn2Val=boxes[pattern[1]].innerText;  // POSN 2 " "
       let posn3Val=boxes[pattern[2]].innerText;

    //    agr koe posn empty ho jaye tho vo WINNER HO HI NHI SAAKTAA
    if(posn1Val !== "" && posn2Val !== "" && posn3Val !== "")
    {
        // KUULL MILAKE PATTERN MATCH KR JAYEGAA KOE SA BHI EK : 
        if(posn1Val===posn2Val && posn2Val==posn3Val)
        {
            // posn1 can give O and X
            // console.log("Winner" ,posn1Val);
            // msg ko dikhane ke liye ek nya function bnaya and PASS ABOVE
            showWinner(posn1Val);
            return ;
        }
    }
}
};


// now we are checking that my game is draw if nobody wins 
const checkdraw=() =>{
    let draw = true ;
    for(let box of boxes)
    {
        if(box.innerText==="")
        {
           draw=false;
           break ;
        }
    }
        if(draw)
        {
            msg.innerText=`The  Game is Draw Nobody Wins it !`;
            msgcontainer.classList.remove("hide");
           disableboxes();
        }
    }




// new FUNCTION WHICH CAN RESET AALL GAME passeD ABOVE ||| %^^^^ : 
// jaise hi new button click tho reset button se game reset ho jayegaa

newgamebtn.addEventListener("click" ,resetgame);
// same for reset us per click tho game reset ho jyaega a : 
resetbtn.addEventListener("click",resetgame);
