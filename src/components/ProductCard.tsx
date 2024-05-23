// src/components/ProductCard.tsx

import Image from "next/image"
import Link from "next/link"
import React, { use, useState } from "react"
import { ProductType } from "../app/products/type"
import { Card, CardContent, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { useCart } from "@/hooks/useCart"


export default function ProductCard({ product }: { product: ProductType }) {
  const { id, name, imageUrl, price } = product
  // const { addProduct } = useCart()
  return (
    <>
    <Card>
      <Link href={`/products/${id}`}>
        <Image className="card-img-top" src={imageUrl} alt={product.name} height={500} width={600} />
      </Link>

      <CardContent>
        <Link href={`/products/${id}`}>
          <h5 className="card-title" style={{ cursor: 'pointer' }}>
            {name}
          </h5>
        </Link>

        <CardTitle>
          R$ {price}
        </CardTitle>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="pb-2"
            // onClick={() => addProduct(product)}
            >
            Adicionar ao Carrinho
          </Button>
        </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                Produto adicionado ao carrinho
              </DialogHeader>
            </DialogContent>
      </Dialog>
      </CardContent>
    </Card>
    </>
  )
}