import React, { useState } from "react";
import Button from '../Button'
import { NavLink } from "react-router-dom";
import DropBox from "../DropBox";

const CurrentDrops: React.FC = () => {

  const getNavLinkClassName = "p-4 text-white mx-auto text-[18px] hover:text-sky-600 flex"

  return (
    <div className="gap-0 p-4 space-y-4">
        <div className="text-3xl text-center">Current Drops</div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <DropBox imgUrl="pixelcity" title="Pixel City" content="303 NFTs with royalty sharing, NFT Staking, and a DAO." />
        </div>
    </div>
  );
}

export default CurrentDrops;
