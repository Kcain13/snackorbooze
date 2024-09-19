import React, { useState } from "react";
import SnackOrBoozeApi from "../utils/Api";

function AddItemPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [recipe, setRecipe] = useState("");
    const [serve, setServe] = useState("");
    const [category, setCategory] = useState("snacks"); // Default category

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, description, recipe, serve };
        try {
            await SnackOrBoozeApi.addItem(category, newItem);
            alert("Item added successfully!");
            setName("");
            setDescription("");
            setRecipe("");
            setServe("");
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add item.");
        }
    };

    return (
        <div>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Recipe:
                        <input
                            type="text"
                            value={recipe}
                            onChange={(e) => setRecipe(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Serve:
                        <input
                            type="text"
                            value={serve}
                            onChange={(e) => setServe(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="snacks">Snacks</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default AddItemPage;
