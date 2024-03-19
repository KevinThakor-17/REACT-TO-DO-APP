import { useState } from "react";

function Todo() {
  const [activity,setActivity] = useState("");
  const [listData,  setListData] = useState([]);
  function addActivity(){
        // setListData([...listData, activity]);
        // alert(listData);
        // setActivity('');
       setListData((listData)=>{
        const updatedData = [...listData, activity];
        setActivity('');
        return updatedData;
       })
  }

  function removeActivity(i){
    const updatedListData = listData.filter((elem, id)=>{
        return i!=id;
    })
    setListData(updatedListData);
  }
  function removeAll(){
    setListData([]);
  }
  
    return (
      <>
      <h2 ><span className="bg-warning px-4 rounded">To-Do List</span></h2>
      <div className="row d-flex justify-content-center flex-row mt-4">
      <div className="form-group col-sm-6 d-flex flex-row ">
      <input type="text" className="form-control" placeholder="Add Activity" value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
      <button onClick={addActivity} className="btn btn-success mx-2">Add</button>
      </div>
      </div>
      {
        listData != [] && listData.map((data,id)=>{
            return(
                <div className="row d-flex justify-content-center flex-row mt-4">
                    <div className="col-sm-6 d-flex flex-row justify-content-between" key={id}>
                    <div className="col-10 bg-info rounded text-uppercase text-dark text-start px-2">{data}</div>
                    <button className="btn btn-danger" onClick={()=>removeActivity(id)}>Remove</button>
                </div>
                </div>
                
            )
        })
      }
      {
                    listData.length>=1 && <button  className="btn btn-danger mt-4"  onClick={removeAll}>Remove All</button>
                }
      </>
    );
  }
  
  export default Todo;