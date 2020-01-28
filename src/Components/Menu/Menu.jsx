import './Menu.css';

import MenuIcon from "./ICON.svg"
import React, {Fragment} from "react";

const menuList = [
    { name: "Дашборд", url: "/dashbord",},
    { name: "Отчеты", url: "/report",},
    { name: "Статистика", url: "/stat",},
    { name: "Офферы", url: "/offers",},
    { name: "Инструменты", url: "/tools",},
    { name: "Рарзработчикам", url: "/developers",},
    { name: "Сервисы", url: "/services",},
    { name: "Финансы", url: "/finances",},
    ];


const NewItem = ({ name = "", url = "", idx }) => {
    return (
        <a href={url} title={name} key={idx} className="myMenu--item"><MenuIcon/></a>
    );
};


const Menu = () => {

    return (
        <div className="myMenu">
            {menuList.map((item, idx) => NewItem({ ...item, idx }))}
        </div>
    );
};

export default Menu;