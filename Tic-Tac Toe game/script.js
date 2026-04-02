let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner(){ // runs after every move


    if(
        (arr[0]!==null && arr[0] ==arr[1]&& arr[1]==arr[2]) ||
        (arr[3]!==null && arr[3] ==arr[4]&& arr[4]==arr[5]) ||
        (arr[6]!==null && arr[6] ==arr[7]&& arr[7]==arr[8]) ||
        (arr[0]!==null && arr[0] ==arr[3]&& arr[3]==arr[6]) ||
        (arr[1]!==null && arr[1] ==arr[4]&& arr[4]==arr[7]) ||
        (arr[2]!==null && arr[2] ==arr[5]&& arr[5]==arr[8]) ||
        (arr[0]!==null && arr[0] ==arr[4]&& arr[4]==arr[8]) ||
        (arr[2]!==null && arr[2] ==arr[4]&& arr[4]==arr[6])
    ){
       document.getElementById("result").innerText = `Winner is ${currentPlayer}`; // return the winner
       return;
    }
    if(!arr.some((e)=> e===null)){
        document.getElementById("result").innerText = "Draw!!"; // return draw
    }
    

   

           



    

}

  

function handleClick(el){ // runs whenever box is clicked

    const id = Number(el.id); //Converts string "0" → number 0 , used to access array index
    if (arr[id]!== null) return ; // preventing overwriting
    arr[id] = currentPlayer; // save move in array
    el.innerText = currentPlayer; // Displays X or O inside clicked box
    checkWinner();  //After every move → check game result
    currentPlayer = currentPlayer === "X"? "O":"X"; // toggle the turn


    
}