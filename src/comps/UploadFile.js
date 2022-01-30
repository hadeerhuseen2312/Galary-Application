import React,{useState} from 'react'
import ProgressBar from './ProgressBar'

//import title from './Title'

const UploadFile = () => {
    const[file,setFile]=useState(null);
    const[error,setError]=useState(null);
    const types=['image/png','image/jpeg'];

    const handelChange =(e)=>{
        let selected=e.target.files[0];
        //console.log(selected.name);
        if(selected &&types.includes(selected.type))
        {
            setFile(selected);
            setError(null);
        }else{
            setError('please choose correct file png/jpeg');
            setFile(null);
        }
    }
    return ( 
        
            <form>
                <label>
                    <input type='file' onChange={handelChange} />
                    <span>+</span>
                </label>
                
                <div className="output">
                {error && <div className="error">{error} </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
                
                </div>
            </form>
            
            
        

     );
}
 
export default UploadFile;