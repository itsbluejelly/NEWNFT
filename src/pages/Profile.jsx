import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAddress } from '@meshsdk/react';

const Profile = () => {
  const address = useAddress();
  const [truncatedAddress, setTruncatedAddress] = useState('');


  useEffect(() => {
    
    
    if (address) {
    const startLength = 7;
    const endLength = 6;

    const startPortion = address.substring(0, startLength);
    const endPortion = address.substring(address.length - endLength);

    const truncatedAddress = `${startPortion}...${endPortion}`;
    setTruncatedAddress(truncatedAddress);
    
    }
}, [ address]);

  return (
    <div>
      <div className='background-image'>
        <AccountCircleIcon style={{ fontSize: '8rem', color: '#2a2929', background: 'black' }} className='rounded-full ml-10 translate-y-[80%]' />
      </div>
     <div> <p className='break-all font-bold'>{truncatedAddress}</p></div>
    </div>
  );
};

export default Profile;
