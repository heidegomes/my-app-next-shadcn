'use client'
import Header from '@/components/Header'
import ProductsList from '@/components/ProductsList'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { ProductType } from './type'

async function getProducts(): Promise<ProductType[]> {
  const res = await fetch(`http://localhost:3000/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};


export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setProducts(products);
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

  if (products.length === 0) {
    return <p>No products available</p>;
  }
  console.log(products)

  return (
    <>
      <Head>
        <title>Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <div>
            <h1 className="my-5">Produtos</h1>

            {<ProductsList products={products!} />}
          </div>
        </Container>
      </main>
    </>
  )
}