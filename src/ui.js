import dragon from "./bosses/dragon";
import { Game } from "./classes/game";

let game;

console.log("test")
function startGame(){
  let pc=document.getElementById("player_count_select").value*1;
  let boss=document.getElementById("boss_select").value;
  console.log(pc,boss);
  game=new Game(pc,dragon);
}