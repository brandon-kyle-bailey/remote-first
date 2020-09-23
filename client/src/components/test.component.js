import React, {useState} from 'react';


function Test() {
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        fetch("/api/development/alive")
        .then(response => response.json())
        .then((output) => {
            setData(output);
            setCount(count+1);
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Test Button:</h1>
            <button onClick={handleClick}>Click me!</button>
            <div>
                <a>{data["message"]} Called {count} times!</a>
            </div>
        </div>
    );

}


export default Test;