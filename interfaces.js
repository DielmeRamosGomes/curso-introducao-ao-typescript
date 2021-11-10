"use strict";
var tlou = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similars games to " + title + ": uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new character"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
