import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

async function getData(): Promise<Product[]> {
  const res = await fetch(`http://localhost:3000/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};


export default function CarouselImages()  {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data.length === 0) {
    return <p>No products available</p>;
  }
  console.log(data)
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm"
      orientation="horizontal"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {data.map((product) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    className="card-img-top"
                    src={product.imageUrl}
                    alt={product.name}
                    height={700}
                    width={900}
                    layout="responsive"
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};


