'use client';
import React from "react";
import CarouselImages from "@/components/CarouselImages";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { Container } from "reactstrap";

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="text-center">
          <Container>
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <h1 className="mt-5 display-1">O melhor jeito de comprar o que você ama</h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequuntur optio recusandae possimus cumque ipsam maxime, voluptates mollitia iusto repudiandae beatae illum iste, rerum nulla? Corporis, harum. Obcaecati, ipsum minima.
              </p>
              <div>
                <CarouselImages />
              </div>
              <Link href="/products">
                <Button variant="secondary">Conheça nossos produtos</Button>
              </Link>
            </div>
          </Container>
      </main>
    </>
  );
}
