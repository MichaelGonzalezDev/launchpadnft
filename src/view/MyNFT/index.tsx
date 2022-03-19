import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { getCollectibleData } from '../../contract/contract';
import Header from '../../components/Header'

const MyNFT: React.FC = () => {
  const { account } = useWeb3React()
  const [countNFT, setCountNFT] = useState(0)
  const [show, setShow] = useState(false)
  const [urls, setUrls] = useState<Array<string>>([])
  const [url, setUrl] = useState([])

  const getAmount = (val: number) => {
    setCountNFT(val)
  }
  
  useEffect(() => {
    if(account) {
      const get =  async () => {
        const tempUrl = await getCollectibleData(getAmount, account.toString())
        setUrls(tempUrl)
      }  
      get()
    }
  }, [account])

  useEffect(() => {
    let newList:any = [];
    urls.map((url) => {
      if(url==="") return true
      const ipfsUrl = `https://ipfs.io/${url.replace('://', '/')}`;
      newList.push(ipfsUrl)
      return true;
    })
    setUrl(newList)
  }, [urls, show])
  
  return (
    <div className='h-full mx-auto mb-0 bg-gradient-to-b from-amber-100 to-slate-0'>
      <Header />
      <button onClick={() => setShow(true)} className="w-full px-2 my-10 text-5xl text-center text-emerald-600 hover:text-emerald-500 hover:cursor-pointer">See My NFTs</button>
      <div className='items-center justify-center w-2/3 gap-4 mx-auto mb-4 space-y-6 md:px-10'>
        {show && 
          (account ?
          (urls.length? 
            url.map((item, idx) => <div key={idx} className="w-full">
                <img src={item} alt="item" />
                {/* <a href={item} target="_blank" className="text-[12px] md:text-lg">{item}</a> */}
              </div>
            ) :
            <div className='text-3xl text-center'>No NFTs to show</div>
          )
          : <div className='text-3xl text-center'>No account</div>)
        }
      </div>
    </div>
  );
}

export default MyNFT;