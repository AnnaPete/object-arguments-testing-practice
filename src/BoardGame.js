class BoardGame {
    constructor(game) {
        this.name = game.name;
        this.rating = game.rating;
        this.minimumPlayers = game.minPlayers;
        this.maximumPlayers = game.maxPlayers;
        this.played = game.played;
    }
    play() {
        if (this.rating === 10) {
            this.played = true;
        } else {
            this.played = false;
        }
    }
}

module.exports = BoardGame;
