class Showing {
    constructor(title, date, startTime,  ticketURL, cinema, room, dubSubCode, visualEffect) {
        this.title        = title;
        this.date         = date;
        this.startTime    = startTime;
        this.ticketURL    = ticketURL;
        this.cinema       = cinema;
        this.room         = room;
        this.dubSubCode   = dubSubCode;
        this.visualEffect = visualEffect;
    }

    inspect = function(depth, opts) {
        return JSON.stringify(this);
    };
}

export default Showing;