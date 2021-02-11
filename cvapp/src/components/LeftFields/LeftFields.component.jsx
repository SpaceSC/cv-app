import React, {useState, useEffect} from "react";
import "./TextArea.component.css";

export function LeftFields () {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let data = fetch('../../cv.json')
      .then(response => response.json())
      .then((result) => { setData(result) });
      }, [setData]);

      console.log(data);
      
  return (
    <div className="cvData">
      {data}
    </div>

    )
}

export default LeftFields;