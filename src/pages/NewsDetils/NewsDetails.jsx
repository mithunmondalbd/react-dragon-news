import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import RightSideNav from "../shared/RightSideNav";


const NewsDetails = () => {
    
    const {id, title} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h3 className="text-3xl font-bold">News details</h3>
                    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                                alt="ui/ux review check"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {title}
                            </h4>
                            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                                {id}
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;