import satData from "./satData";
import "./styling.css";

const Buttons = (props) => {
  const { filterByType, setSat, displaySats} = props;

  return (
    <div className="flex-container">
      {displaySats.map((data,id) => {
        return (
          <button onClick={() => filterByType(data)} key={id}>{data} Orbit</button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;