import React from 'react'
import Header from '../../components/Header'
import CurrentDrops from '../../components/CurrentDrops'
import PastDrops from '../../components/PastDrops'
import Button from '../../components/Button'
import Logo from "../../assets/logo.png"

const Dashboard: React.FC = () => {
  return (
    <div className='m-auto'>
      <Header />
      <div className='w-7/12 p-16 mx-auto'>
        <div className='flex items-center gap-10 mb-4'>
          <img src={Logo} alt="logo" className='w-56 h-56' />
          <div className=''>
            <div className='text-[36px] mb-6'>Your Access to NFT 2.0</div>
            <div>Pixel City is an NFT Launchpad aiming to be the premier venue for getting access to the hottest #CronosNFT drops that offer their holders more than just art.</div>
            <div><br></br>Built by Pixel Network.</div>
            <Button title='Apply' />
          </div>
        </div>
        <CurrentDrops />
        <PastDrops />
      </div>
    </div>
  );
}

export default Dashboard;