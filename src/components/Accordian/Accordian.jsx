import { useState } from "react";
import data from "./data";
import "./Style.css"

// There are two types of accordian:  Single selection and multiple selection

// Single selection accordian
const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  console.log(selected);

  return (
    <div className="wrapper">
      <h1 className="heading">Accordian</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div key={dataItems.id} className="item">
              <div
                onClick={() => handleSingleSelection(dataItems.id)}
                className="title"
              >
                <h3>{dataItems.questions}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ? (
                <div className="content">{dataItems.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>NO DATA PRESENT</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
