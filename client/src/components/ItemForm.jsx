import axios from "axios";
import { useState } from "react";

import React from "react";

function ItemForm() {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item,
            price,
            description
        }
        axios
            .post('http://localhost:5001/api/items', newItem)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
        <div className="card mb-3">
        <div className="card-body">
            <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="item" className="form-label">Item:</label>
                <input
                type="text"
                name="item"
                id="itemn"
                className="form-control"
                onChange={(e) => setItem(e.target.value)}
                />
                <label htmlFor="description" className="form-label">Price:</label>
                <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="description" className="form-label">Description:</label>
                <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">CREATE</button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default ItemForm;
