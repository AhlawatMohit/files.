
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
  return (
     <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-44 h-60 rounded-[35px] bg-zinc-900/90 text-slate-300 px-6 py-6 overflow-hidden'>
     <FaFileLines/>
     <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
     <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex item-center justify-between px-5 py-3 mb-1'>
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center '>
            {data.close ? <IoMdClose/> : <MdOutlineFileDownload size=".7em" color="#fff"/>}
            </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full py-2 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
        )}
     </div>
     </motion.div>

  )
}

export default Card
