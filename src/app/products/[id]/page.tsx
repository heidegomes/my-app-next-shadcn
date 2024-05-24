'use client'
import { Container } from "reactstrap";
import { ProductType } from "../type";
import Head from "next/head";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function getProduct(id: string | number): Promise<ProductType> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};

export default function Product() {
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if(id) {
      const fetchData = async () => {
        try {
          const product = await getProduct(id as string);
          setProduct(product);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    };
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(product)
  return (
    <div>
      <Head>
        <title>{product?.name}</title>
        <meta name="description" content={product?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        <ProductDetails product={product} />
        <h1>Product Details</h1>
      </Container>
    </div>
  )
}
