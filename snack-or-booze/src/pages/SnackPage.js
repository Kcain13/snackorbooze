import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { getItems } from "../utils/Api";

function SnackPage() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const snackItems = await getItems("snacks");
            setSnacks(snackItems);
        }
        fetchData();
    }, []);

    return <Menu items={snacks} title="Food" itemType="snacks" />;
}

export default SnackPage;
