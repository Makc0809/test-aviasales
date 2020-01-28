import './Services.css';

import React, {useState} from "react";
import Partners from "../Partners";


const Services = ({data = []}) => {

    const [filterValue, setFilterValue] = useState('');
    const [filteredData, setFiltredData] = useState(data);

    if (filteredData.length === 0 && data.length > 0 && filterValue === "") {
        // время 00:00, чет сходу не пришло в голову как решить это, по этому пока костыль)))
        setFiltredData(data);
    }

    const handleChange = (event) => {
        setFilterValue(event.target.value);


        if (event.target.value === "") {
            setFiltredData(data);
        } else {
            setFiltredData(filterData(event.target.value));
        }

    };

    const filterData = (query) => data.filter((el) => {
        return el.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });

    const clearFilter = () => {
        setFilterValue("");
        setFiltredData(data);
    };

    return (
        <div className="container">
            <h1 className="mt-5 mb-4 header-page">Сервисы</h1>


            <div className="row filterTop">

                <div className="form-group input-group-lg col-xl-4 col-md-6">
                    <label htmlFor="filter">Промокод</label>
                    <input type="text" className="form-control" id="filter" onChange={handleChange} value={filterValue}
                           placeholder="Фильтр по названию"/>
                </div>

                <div className="col col-btn">
                    <a href="#" className="btn btn-light btn-lg" onClick={clearFilter}>Сбросить</a>
                </div>
            </div>


            {filteredData.length === 0 &&
                <div className="alert alert-warning" role="alert">
                    Элементы не найдены
                </div>}
            {filteredData.length > 0 && <Partners data={filteredData}/>}
        </div>
    );
};

export default Services;