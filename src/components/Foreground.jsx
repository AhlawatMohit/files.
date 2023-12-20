
import { useRef } from "react";
import Card from "./card";

function Foreground() {

    const ref = useRef(null);

  const data = [
    {
        id: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        id: 2,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
        id: 3,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".2mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        id: 4,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".6mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "lime" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-6 flex-wrap p-6">
     
      {data.map((item, index)=>(
         <Card key={index.id} data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
