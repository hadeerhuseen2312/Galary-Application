import React from 'react'
import {motion } from 'framer-motion'

const Modal = ({selectedImg,setSelectedImg}) => {
    const handelClick=(e)=>{
        if(e.target.classList.contains("backdrop"))
        setSelectedImg(null);

    }
    return ( 
        <motion.div className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        onClick={handelClick}>
            {selectedImg&&<motion.img src={selectedImg} alt="image loading.."
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            />}
        </motion.div>
     );
}
 
export default Modal;