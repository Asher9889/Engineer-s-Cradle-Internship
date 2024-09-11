const Item = ({name, image})=>{
    return (
        <div className="w-[40%] md:w-[20%] border-white border-2 flex rounded-md flex-col ">
            <img className="hover:scale-[1.1] transition" src={image} alt="" />
            <p className="text-center text-xl font-bold font-mono mt-2 px-2" >{name}</p>
        </div>
    )
}

export default Item;