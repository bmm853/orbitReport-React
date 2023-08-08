import satData from "./satData";

const Buttons = (props) => {
  const { filterByType, setSat, displaySats} = props;

  return (
    <div>
      {displaySats.map((data,id) => {
        return (
          <button onClick={() => filterByType(data)} key={id}>{data} Orbit</button>
        );
      })};
      <button onClick={setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;