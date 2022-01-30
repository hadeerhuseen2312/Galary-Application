import React from 'react'
import {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion' 

import {projectStorage}   from '../firebase/config';

const ProgressBar = ({file, setFile}) => {
    console.log('from progress '+projectStorage)
    const {progress ,url}=useStorage(file);
    useEffect(() => {
        if(url)
        setFile(null);

    }, [url,setFile])
    return ( 
        <motion.div className="progress-bar" style={{width:progress +'%'}}
        initial={{ width: 0 }}
      animate={{ width: progress + '%' }}>
        </motion.div>
     );
}
 
export default ProgressBar ;