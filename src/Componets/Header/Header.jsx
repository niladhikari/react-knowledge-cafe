
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 mb-10'>
            <h1 className='text-3xl font-bold'>Knowlage Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;