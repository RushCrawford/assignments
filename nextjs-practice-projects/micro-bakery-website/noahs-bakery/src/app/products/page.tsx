import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { StaticImageData } from 'next/image';
import breadImg from '/public/bread.jpeg'
import bagelsImg from '/public/bagels.jpeg'
import focaccia from '/public/focaccia.jpeg'
import honey from '/public/honey.jpeg'
import jam from '/public/jam.jpeg'
import pita from '/public/pita.jpeg'
import pretzels from '/public/pretzels.jpeg'
import rolls from '/public/rolls.jpeg'

export default function Products() {
  // const breadImg: StaticImageData = {
  //   src: '/public/bread.jpeg',
  //   height: '100px',
  //   // ... other StaticImageData properties if needed
  // };
  const list = [
    {
      title: "Artisan Loaf",
      img: breadImg.src,
      price: "$5.50",
    },
    {
      title: "Bagels",
      img: bagelsImg.src,
      price: "$3.00",
    },
    {
      title: "Pretzels",
      img: pretzels.src,
      price: "$10.00",
    },
    {
      title: "Focaccia",
      img: focaccia.src,
      price: "$5.30",
    },
    {
      title: "Pita",
      img: pita.src,
      price: "$15.70",
    },
    {
      title: "Rolls",
      img: rolls.src,
      price: "$8.00",
    },
    {
      title: "Honey",
      img: honey.src,
      price: "$7.50",
    },
    {
      title: "Jam",
      img: jam.src,
      price: "$12.20",
    },
  ];


  const productCard = list.map((item, index) => (
    <div key={index} className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Card shadow="sm" >
          <CardBody className="overflow-visible p-1">
            <Image
              shadow="sm"
              radius="sm"
              width="50%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
    </div>
  ))
    return (
      <div className="container flex flex-col ">
        <h1 className='font-bold text-3xl'>
          Products
        </h1>
         {productCard}
      </div>
    );
  }
  