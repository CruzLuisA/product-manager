import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/items/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/items/${id}`, {
      ...item,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/items");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Item:</h3>
      <div className="card mb-3">
        <label htmlFor="task" className="form-label">
          Task:
        </label>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            id="item"
            className="form-control"
            value={item.item}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            value={item.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            value={item.description}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              EDIT ITEM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItem;
