import React, {useState, useEffect} from "react";
import "./LeftFields.component.css";

export function LeftFields () {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let data = fetch('../../cv.json')
      .then(response => response.json())
      .then((result) => { setData(result) });
      }, []);

      console.log({data});
      
  return (
    <div className="cvJsonData">
      {data}
    </div>
    )
}

export default LeftFields;