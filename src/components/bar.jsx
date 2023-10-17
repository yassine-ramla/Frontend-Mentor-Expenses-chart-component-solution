import '../custom.css'

export default function Bar({ height, current, afterContent, beforeContent }) {
  return (
    <div
      className={`w-[14.3%] 
      ${current ? "bg-myCyan" : "bg-mySoftRed"} 
      ${current ? "hover:bg-myHoveredCyan" : "hover:bg-myHoveredSoftRed"} 
      rounded-[4px]
      grid
      place-items-center
      relative
      bar
      `}
      style={{
        height: height,
      }}
    >
      <div
        className="
      opacity-0
      duration-[200ms]
      absolute
      z-10
      bottom-[calc(100%+6px)]
      p-2
      rounded-md
      text-myVeryPaleOrange
      text-center
      text-sm
      font-bold
      bg-myDarkBrown"
      >
        {afterContent}
      </div>
      <div
        className="
      absolute
      top-[calc(100%+8px)]
      text-myMediumBrown
      lg:text-lg
      font-normal"
      >
        {beforeContent}
      </div>
    </div>
  );
}
