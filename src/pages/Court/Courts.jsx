import { useContext } from "react";
import { CourtsContext } from "../../providers/CourtsProvider";
import Court from "./Court";
import CourtModal from "./CourtModal";


const Courts = () => {
    
    const {courts} = useContext(CourtsContext)
    
    return (
        <div className="pt-40 max-w-350 mx-auto pb-28 px-6">
            <h1 className="font-madimi md:text-6xl text-4xl text-center text-[#4A5565]">Availbae courts : {courts.length}</h1>
            <div className="grid xl:grid-cols-3 lg:gap-9 md:grid-cols-2 gap-7 md:mt-14 mt-9">
                {
                    courts.map(court => <Court court={court}></Court>)
                }
            </div>
            <CourtModal></CourtModal>
        </div>
    );
};

export default Courts;