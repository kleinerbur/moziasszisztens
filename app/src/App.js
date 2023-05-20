import './App.css';

import * as React from 'react';

import Assistant from './Assistant';
import FilmsTable from './FilmsTable';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

function App() {
    const today = new Date();
    const [date, setDate] = React.useState(new Date());
    const [films, setFilms] = React.useState([])
    const [showings, setShowings] = React.useState([]);

    const fetchData = async function () {
        let assistant = new Assistant();
        await assistant.pull(date);
        setFilms(assistant.films);
        setShowings(assistant.showings);
    };

    function handleDateChange(date) {
        setDate(date);
        setFilms([]);
        setShowings([]);
    };

    React.useEffect(() => {
        fetchData();
    }, [date]);

    return (
    <div className="App">
        <div className="App-header">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='datePicker'
                    value={dayjs(date)}
                    minDate={dayjs(today)}
                    format="YYYY-MM-DD"
                    formatDensity="spacious"
                    onChange={(newValue) => handleDateChange(newValue)}/>
            </LocalizationProvider>
        </div>
        <div className="App-body">
            <FilmsTable films={films} showings={showings}/>
        </div>
    </div>
    );
}

export default App;