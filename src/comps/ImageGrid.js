import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {
    const {docs}=useFirestore('images');
    const handelClickOnImg=(imgUrl)=>{

    }
    return ( 
        <div className="img-grid">
        {docs && docs.map((doc)=>(
            <motion.div className="img-wrap" key={doc.id}
            layout
            whileHover={{ opacity: 1 }}s
            onClick={()=>{setSelectedImg(doc.url)}}
            >
                <motion.img src={doc.url} alt="upload image.."
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }} />
            </motion.div>
        ))}
        </div>
     );
}
 
export default ImageGrid ;