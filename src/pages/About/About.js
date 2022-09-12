import { motion } from "framer-motion";


export default function About() {
  return (
    
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%"}}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
     
    </motion.div>
    
  );
}
