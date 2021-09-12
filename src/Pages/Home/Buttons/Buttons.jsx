import "./Buttons.css";
import { useNavigate } from "react-router-dom";

export function Buttons() {
  const navigate = useNavigate();
  return (
    <div className="Buttons-home">
      <button
        className="btn-home"
        type="submit"
        onClick={() => {
          navigate("/viewDocument");
        }}
      >
        {" "}
        View Document
      </button>
      <button
        className="btn-home"
        type="submit"
        onClick={() => {
          navigate("/uploadDocument");
        }}
      >
        Upload Document
      </button>
      <button
        className="btn-home"
        type="submit"
        onClick={() => {
          navigate("/askQuery");
        }}
      >
        Ask Query
      </button>
    </div>
  );
}
