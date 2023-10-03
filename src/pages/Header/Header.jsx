import logo from '/src/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto' src={logo} alt="logo name" />
            <p>Journalism without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;