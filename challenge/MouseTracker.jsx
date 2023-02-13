import {useState, useEffect} from "react";



// THIS doesn't pass test because of body element created but DOES work

function MouseTracker() {
  // useState hook creates state variable and func to update value of state variable
  // initialise state w/ array that has 0 values for x, y
  const [coordinatesValue, setCoordinatesValue] = useState({x:0, y:0});

  // useEffect hook to add the mousemove event listener to window, and remove when component unmounted
  useEffect(() => {
    const mouseTrackHandler = (e) => {
      // updates coordinates state with current mouse coordinates when mouse moves
      setCoordinatesValue({x: e.clientX, y: e.clientY});
    };
    window.addEventListener('mousemove', mouseTrackHandler);
    return () => {
      window.removeEventListener('mousemove', mouseTrackHandler);
    // empty array to clean up Effect so is unmounted
  };
  }, []);
  // component renders <output> element displaying clientX and clientY values
  return (
    <output>{coordinatesValue.x}, {coordinatesValue.y}</output>
  );
}

/*


function MouseTracker() {
  // useState hook creates state variable and func to update value of state variable
   // initialise state with array of 0s for x, y
  const [coordinates, setCoordinates] = useState([0, 0]);

  // useEffect hook to add mousemove event listener to window
  useEffect(() => {
    // show coordinates by grabbing x, y and passing through setValue func
    function showCoordinates({clientX, clientY}) {
      setCoordinates([clientX, clientY]);
    }
    // listens for mouse move and passes func to show coordinates 
    window.addEventListener("mousemove", showCoordinates);
    // clean up Effect to unmount it
    return () => window.removeEventListener("mousemove", showCoordinates);
  }, []);
  // match x, y to state value of coordinates
  const [xCoordinate, yCoordinate] = coordinates;
  // render <output> component to display values as they update
  return (
    <output>{xCoordinate}, {yCoordinate}</output>
  );
}
*/

export default MouseTracker;