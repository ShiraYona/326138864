import { useState } from "react";
import ViewData from "./viewData";
import { Calendar } from 'primereact/calendar';

const Dates = () => {

    const [firstDate, setFirstDate] = useState("");
    const [lastDate, setLastDate] = useState("");
    const [checked, setChecked] = useState(false);
    const [dates, setDates] = useState([]);



    const handleChange = () => {
        setChecked(!checked);
    };



    const fetchDates = () => {
        fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${firstDate}&end=${lastDate}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setDates(data)
            }).catch((error) => {
            });
    };


    return (
        <div >
            <input
                type="date"
                placeholder="firstDate"
                onBlur={(e) => setFirstDate(e.target.value)}
            />
            <input type="date" placeholder="lastDate" onBlur={(e) => setLastDate(e.target.value)} />
            {/* <Calendar value={lastDate} onChange={(e) => setLastDate(e.value)}></Calendar> */}
            {/* <Calendar dateFormat="yy-mm-dd" value={lastDate} onChange={(e) => setLastDate(e.value)}></Calendar> */}
            {console.log(lastDate)}
            <button onClick={() => fetchDates()}>checked</button>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                הצג פרשות שבוע בלבד
            </label>

            <div>
                {dates?.map((item, i) => {
                    if (checked) {
                        if (item.className === "parashat")
                            return (
                                <ViewData
                                    key={i}
                                    item={item}
                                ></ViewData>)
                    }
                    else {
                        return (
                            <ViewData
                                key={i}
                                item={item}
                            ></ViewData>)
                    }
                })}
            </div>

        </div>
    );
};

export default Dates;

