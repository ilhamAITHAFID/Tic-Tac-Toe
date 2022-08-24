var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload= function (){
    setgame();
}
function setgame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    for (r = 0; r < 3;r++){
        for(c = 0; c< 3;c++){
            //create  div tag pour tile <div id="0.0"></div>
            let tile= document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            tile.classList.add("tile");
            if(r == 0 || r ==  1){
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1){
                tile.classList.add("vertical-line");
            }

            tile.innerText = "";
            tile.addEventListener("click", setTile)
            document.getElementById("board").append(tile);

            
        }

    }

}
function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");    //ex) "1-2" -> ["1", "2'"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    }

