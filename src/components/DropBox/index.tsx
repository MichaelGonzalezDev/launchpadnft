import React, { useState } from "react";
import Button from '../Button'

interface DropBoxProps {
    imgUrl: string,
    title: string,
    content: string
}

const DropBox: React.FC<DropBoxProps> = ({imgUrl, title, content}) => {
  const newImg = require(`../../assets/${imgUrl}.png`);

  return (
    <div className="p-4 space-y-2 border-2 border-black w-80">
        <img src={newImg} />
        <div className="text-2xl">{title}</div>
        <div className="text-base">{content}</div>
        <Button title="Mint" className="items-center" />
    </div>
  );
}

export default DropBox;
