import React, { useEffect, useState } from 'react';
import { getPhones } from '../../../api/phonesGeneral';
import { ProductCard } from '../../../components/ProductCard';

export type PhoneInfo = {
  id: number;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export const CardSlider = () => {
  const [phones, setPhones] = useState<PhoneInfo[]>([]);

  useEffect(() => {
    getPhones().then(setPhones);
  }, []);

  // eslint-disable-next-line
  console.log(phones);

  return (
    <div>
      {phones.map(phone => (
        <ProductCard phone={phone} />
      ))}
    </div>
  );
};
