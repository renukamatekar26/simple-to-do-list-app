import React, {useState} from 'react'

function Todo() {
    const [activity, setActivity] = useState('');
    const [list , setList] = useState([]);

    const handleChange = (e) => {
        // console.log(e.target.value);
        setActivity(e.target.value); 
    };

    const addActivity = () => {
        if(activity === ''){
            alert('Please add an activity');
        }
        else{
            setList((listData) => {
                const updatedList = [...listData, activity];
                console.log(updatedList, "updatedList");
                setActivity('');
                return updatedList;
            });
            
        }
    };

    const removeActivity =(item) => {
        const updatedList =list.filter((elem, index) =>{
            return item !== index;
        })
        setList(updatedList);
        
    };

    const removeAllActivities =(item) => {
        setList([]);
        
    };

  return (
    <>
    <div className='container'>
    <div className='header'>TODO LIST</div>
    
    <input 
    type='text' 
    placeholder='add Item' 
    value={activity}
    onChange={handleChange} />
    <button onClick={addActivity}>ADD</button>

    <h1 className='list-heading'>Following is the List</h1>
    {list.length> 0 && list.map((item,index) =>{
        console.log(item, index, "item");
        return (
            <>
                <ul key={index} className='list-data'>
                    <li className='list-item'>{item}</li>
                    <button 
                    onClick={() => removeActivity(index)}
                    className='btn-position'
                    > Remove(-)</button>
                </ul>
            </>
        )
    })}
    {list.length > 0 && <button onClick={()=>removeAllActivities()} className='remove-all'>Remove all</button>}
    
    </div>
        
    </>
  )
}

export default Todo;
