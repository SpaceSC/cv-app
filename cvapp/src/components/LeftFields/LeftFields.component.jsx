import React, {useState, useEffect} from "react";
import "./LeftFields.component.css";

export function LeftFields () {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let data = fetch('./cv.json')
      .then(response => response.json())
      //.catch((error) => console.error(error))
      .then((result) => { setData(result) });
      }, [setData]);

      console.log({data});
      
  return (
    <div className="cvJsonData">
      {data}
    </div>
    )
}

export default LeftFields;