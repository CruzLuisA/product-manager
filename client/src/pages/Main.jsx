import axios from 'axios';
import { useEffect, useState } from 'react'
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

function Main() {
    const [items, setItems] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("http://localhost:5001/api/items", {signal: controller.signal})
            .then((res) => {
                setItems(res.data);
                setLoaded(true)
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    }

    )

    return (
    <div>
        <h1>Product Manager</h1>
        <ItemForm />
        {loaded && <ItemList items= {items}/>}
    </div>
    )
}

export default Main