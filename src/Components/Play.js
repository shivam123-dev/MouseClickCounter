import React, {useState} from "react";

export default function Play(props) {
  const handleClick = () => {
      setCount(count+1);
  };
  const handleReset = () => {
    setCount(0);
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container my-3 py-3">
        <h1>Click Below</h1>
        <div className="form-floating">
          <div
            className="form-control py-3 px-3 "
            id="mybox"
            onClick={handleClick}
            style={{
              height: "50vh",
              width: "80vw",
              border: "2px solid",
              backgroundColor: `${props.color}`,
            }}
          ></div>
        </div>
        <div className="py-3">Total Clicks: {count}</div>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
