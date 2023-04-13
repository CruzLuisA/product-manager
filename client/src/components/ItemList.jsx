import axios from "axios";
import { Link } from "react-router-dom";
import ItemDetail from "../pages/ItemDetail";

const handleDelete = (id) => {
  axios
    .delete(`http://localhost:5001/api/items/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

function ItemList({ items }) {
  return (
    items &&
    items.map((item) => {
      return (
        <div key={item._id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <Link to={`/items/${item._id}`}>{item.item}</Link>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default ItemList;
