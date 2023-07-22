import { useState } from 'react';



export default function Home() {
  const [inputData, setInputData] = useState({
    name:"",
    age:""
  });

  const handleSaveData = async () => {
    const response = await fetch('/api/savedata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Name: inputData.name, age: inputData.age }),
    });

    if (response.ok) {
      alert('Data saved successfully!');
      setInputData({
        name:'',
        age:""
      });
    } else {
      alert('Something went wrong!');
    }
  };

  const handleName = (event)=> {
    const value = event.target.value
    setInputData (values => ({...values,name:value}))
  }

  const handleAge = (event)=> {
    const value = event.target.value
    setInputData (values => ({...values,age:value}))
  }

  return (
    <div>
      <input
        type="text"
        value={inputData.name}
        onChange={handleName}
      />
      <input 
        type="text"
        value={inputData.age}
        onChange={handleAge}
      />
      <button onClick={handleSaveData}>Save Data</button>
    </div>
  );
}