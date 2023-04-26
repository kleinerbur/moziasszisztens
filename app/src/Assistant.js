import ArtMozi from "./cinema/ArtMozi"

class Assistant {
    constructor() {
        this.currentDate = new Date()
        this.artmozi = new ArtMozi()
        this.artmozi.pull(2023,17)
        this.showings = [] + this.artmozi.getShowings()
    }

    getWeek(date) {
        // theatre weeks start on Thursday and end on Wednesday

    }
}

export default Assistant