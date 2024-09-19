import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { getItems } from "../utils/Api";

function DrinkPage() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const drinkItems = await getItems("drinks");
            setDrinks(drinkItems);
        }
        fetchData();
    }, []);

    return <Menu items={drinks} title="Drink" itemType="drinks" />;
}

export default DrinkPage;
