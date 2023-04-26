import Showing from './common/Showing';

class ArtMozi {
    constructor() {
        this.baseURL  = 'https://artmozi.hu/api/schedule/week/';
        this.theatres = {
            '1448': 'Puskin',
            '1449': 'Toldi',
            '1450': 'Művész',
            '1451': 'Tabán',
            '1452': 'Kino Café'
        };
        this.showings = [];
    }

    async pull(year, week) {
        const url = this.baseURL + year + week;
        const response = await fetch(url);
        const data = await response.json();
        for (const [rawDate, films] of Object.entries(data['schedule'])) {
            const formattedDate = rawDate.substring(0,4) + "/" + rawDate.substring(4,6) + "/" + rawDate.substring(6);
            const date = Date.parse(formattedDate);
            for (const [filmId, schedule] of Object.entries(films)) {
                for (const [startTime, showingId] of Object.entries(schedule)) {
                    const showing = Object.values(showingId)[0];
                    let parsedShowing = new Showing(
                        data['movies'][filmId]['title'],
                        date,
                        startTime,
                        showing['link'],
                        this.theatres[showing['cinema']],
                        showing['cinema_room'],
                        showing['dubSubCode'],
                        showing['visualEffect']
                    );
                    console.log(parsedShowing);
                    this.showings.push(parsedShowing);
                }
            }
        }
        return this;
    }

    getShowings() {
        return this.showings;
    }
}

export default ArtMozi;