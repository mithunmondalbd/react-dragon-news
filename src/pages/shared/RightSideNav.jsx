import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '/src/assets/qZone1.png'
import Qzone2 from '/src/assets/qZone2.png'
import Qzone3 from '/src/assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 w-full'>
                <h2 className="text-2xl font-medium mb-2">Login with</h2>
                <div className='space-y-3'>
                    <button className="btn btn-outline w-full capitalize text-lg hover:bg-blue-700">
                        <FaGoogle></FaGoogle>
                        Sign in with Google
                    </button>
                    <button className="btn btn-outline w-full capitalize text-lg hover:bg-blue-700">
                        <FaGithub></FaGithub>
                        Sign in with Github
                    </button>
                </div>
            </div>
            <div className='p-4 w-full'>
                <h2 className="text-2xl font-medium mb-2">Find Us</h2>
                <button className=" w-full capitalize text-lg border rounded-t-lg  ">
                    <a href="" className='flex items-center space-x-3 px-4 py-2'>
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>

                </button>
                <button className=" w-full capitalize text-lg border-x ">
                    <a href="" className='flex items-center space-x-3 px-4 py-2'>
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>

                </button>
                <button className=" w-full capitalize text-lg border rounded-t-lg  ">
                    <a href="" className='flex items-center space-x-3 px-4 py-2'>
                        <FaInstagram></FaInstagram>
                        <span>Instagram</span>
                    </a>
                </button>
            </div>
            {/* Q-Zone */}
            <div className='p-4 space-y-2 w-full'>
                <h2 className="text-2xl font-medium">Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;

