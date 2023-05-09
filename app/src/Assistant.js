import ArtMozi from "./cinema/ArtMozi";
import Corvin from "./cinema/Corvin";
import CinemaCity from "./cinema/CinemaCity";

class Assistant {
    constructor() {
        this.currentDate = new Date();
        this.artmozi = new ArtMozi();
        this.corvin  = new Corvin();
        this.cinemacity = new CinemaCity();
        this.pull(this.currentDate);
    }

    async pull(date) {
        this.showings = [].concat(...await Promise.all([
            this.artmozi.pull(date),
            this.corvin.pull(date),
            this.cinemacity.pull(date)
        ])).sort((a,b) =>
               a.title.localeCompare(b.title)
            || new Date(a.startTime) - new Date(b.startTime)
            || a.cinema.localeCompare(b.cinema));
        console.log(this.showings);
    }
}

export default Assistant