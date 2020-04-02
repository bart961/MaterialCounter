var compsList = {
    "Third Age iron": {
        type: "rare",
        qty: 0
    },
    "Zarosian insignia": {
        type: "rare",
        qty: 0
    },
    "Samite silk": {
        type: "rare",
        qty: 0
    },
    "Imperial steel": {
        type: "rare",
        qty: 0
    },
    "White oak": {
        type: "rare",
        qty: 0
    },
    "Goldrune": {
        type: "rare",
        qty: 0
    },
    "Orthenglass": {
        type: "rare",
        qty: 0
    },
    "Vellum": {
        type: "rare",
        qty: 0
    },
    "Cadmium red": {
        type: "rare",
        qty: 0
    },
    "Ancient vis": {
        type: "rare",
        qty: 0
    },
    "Tyrian purple": {
        type: "rare",
        qty: 0
    },
    "Leather scraps": {
        type: "rare",
        qty: 0
    },
    "Chaotic brimstone": {
        type: "rare",
        qty: 0
    },
    "Demonhide": {
        type: "rare",
        qty: 0
    },
    "Eye of Dagon": {
        type: "rare",
        qty: 0
    },
    "Hellfire metal": {
        type: "rare",
        qty: 0
    },
    "Keramos": {
        type: "rare",
        qty: 0
    },
    "White marble": {
        type: "rare",
        qty: 0
    },
    "Cobalt blue": {
        type: "rare",
        qty: 0
    },
    "Everlight silvthril": {
        type: "rare",
        qty: 0
    },
    "Star of Saradomin": {
        type: "rare",
        qty: 0
    },
    "Blood of Orcus": {
        type: "rare",
        qty: 0
    },
    "Stormguard steel": {
        type: "rare",
        qty: 0
    },
    "Wings of War": {
        type: "rare",
        qty: 0
    },
    "Animal furs": {
        type: "rare",
        qty: 0
    },
    "Armadylean yellow": {
        type: "rare",
        qty: 0
    },
    "Malachite green": {
        type: "rare",
        qty: 0
    },
    "Mark of the Kyzaj": {
        type: "rare",
        qty: 0
    },
    "Vulcanised rubber": {
        type: "rare",
        qty: 0
    },
    "Warforged bronze": {
        type: "rare",
        qty: 0
    },
    "Fossilised bone": {
        type: "rare",
        qty: 0
    },
    "Yu'biusk clay": {
        type: "rare",
        qty: 0
    },
    "Aetherium alloy": {
        type: "rare",
        qty: 0
    },
    "Quintessence": {
        type: "rare",
        qty: 0
    },
    "Soapstone": {
        type: "rare",
        qty: 0
    },
  
if (localStorage.getItem("materials") != null) {
    tempList = JSON.parse(localStorage.materials);
    for (x in tempList) {
        if (!tempList[x] || !compsList[x]) {
            continue;
        } else {
            compsList[x].qty = tempList[x].qty;
        }
    }
}