import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/items/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>Details: </h2>
      {item && (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{item.item}</h4>
            <h4 className="card-title">{item.price}</h4>
            <h4 className="card-title">{item.description}</h4>
            <div className="card-footer d-flex justify-content-end">
              <Link to={`/items/${item._id}/edit`} className="btn btn-info">
                Edit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
