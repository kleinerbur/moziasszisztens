class Assistant {
    constructor() {
        this.currentDate = new Date()
        new ArtMozi(this.currentDate).getSchedule(17)
        this.schedule = {}
    }
}

class CinemaCity {
    // cc mozik:
    // https://www.cinemacity.hu/hu/data-api-service/v1/quickbook/10102/cinemas/with-event/until/2024-04-24?attr=&lang=hu_HU

    // cc dátumok:
    // https://www.cinemacity.hu/hu/data-api-service/v1/quickbook/10102/dates/in-cinema/1133/until/2024-04-24?attr=&lang=hu_HU

    // cc vetítések:
    // https://www.cinemacity.hu/hu/data-api-service/v1/quickbook/10102/film-events/in-cinema/1133/at-date/2023-04-26?attr=&lang=hu_HU
}

class Lurdy {}
class MoM {}
class Sugar {}

class ArtMozi {
    constructor(date) {
        this.currentDate = date
        this.URL = 'https://artmozi.hu/api/schedule/week/'
        this.theatres = {
            '1448': 'Puskin',
            '1449': 'Toldi',
            '1450': 'Művész',
            '1451': 'Tabán',
            '1452': 'Kino Café'
        }
        this.schedule = []
    }

    async getSchedule(week) {
        let base_url = this.URL + this.currentDate.getFullYear() + week;
        const response = await fetch(base_url);
        const data = await response.json();
        console.log(data);
    }
}

class Record {
    constructor(title, startTime, ageLimit, ticketURL, cinema, cinemaRoom, dubSubCode, visualEffect) {
        this.title = title
        this.startTime = startTime
        this.ageLimit = ageLimit
        this.ticketURL = ticketURL
        this.cinema = cinema
        this.cinemaRoom = cinemaRoom
        this.dubSubCode = dubSubCode
        this.visualEffect = visualEffect
    }
}

export default Assistant