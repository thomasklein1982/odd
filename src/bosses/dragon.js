export default {
  name: "Drache",
  id: "dragon",
  floors: [
    {
      name: "Halle der Statuen",
      effect: "Verliere 5 Zeit beim ersten Zug in jedem Stockwerk.",
      peril: {
        number: 2, shield: true
      },
      combat: {
        number: 3, hearts: 1, type: "str"
      }
    },
    {
      name: "Flammenaura",
      peril: {
        number: 6, hearts: 1
      },
      combat: {
        number: 5, hearts: 2, type: "int"
      }
    },
    {
      name: "Drachenhaut",
      peril: {
        number: 5, shield: true
      },
      combat: {
        number: 10, hearts: 1, type: "str", big: true
      }
    }
  ],
  boss: {
    name: "Drache",
    boxes: [
      {
        number: 5, type: "dex", shield: true
      },
      {
        number: 5, type: "dex", shield: true
      },
      {
        number: 6, type: "dex", hearts: 1, damage: 1
      },
      {
        number: 16, type: "int", big: true, hearts: 4, damage: 1
      },
      {
        number: 6, type: "int", hearts: 1, damage: 1
      },
      {
        number: 17, type: "str", hearts: 4, damage: 1, big: true
      },
      {
        number: 6, type: "str", hearts: 1, damage: 1
      },
    ]
  }
};