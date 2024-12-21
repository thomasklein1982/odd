import flameweave from "../abilities/flameweave";
import persistence from "../abilities/persistence";

export default {
  name: "Ratte",
  id: "rat",
  xp: 2,
  boxes: [
    {
      number: "X", type: "dex", shield: true, big: true
    },
    {
      number: 3, type: "dex", hearts: 1, time: 1
    },
    {
      number: 3, type: "str", time: 1
    },
    {
      number: 5, type: "str", hearts: 1, time: 1
    },
    {
      number: 5, type: "dex", time: 2
    },
  ],
  variants: [
    {
      item: "dex",
      ability: flameweave
    },
    {
      item: "dex",
      ability: persistence
    }
  ]
}