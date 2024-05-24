
import Image from "next/image";
import React from "react";
import { Col, Row } from "reactstrap";
import { ProductType } from "../app/products/type";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "./ui/button";
// import { useCart } from "@/hooks/useCart";todas


export default function ProductDetails({ product }: {product?: ProductType}) {
  const { toast } = useToast()
  // const { addProduct } = useCart()

  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product?.imageUrl ?? ""}
          alt={product?.name ?? ""}
          height={500}
          width={600}
        />
      </Col>

      <Col lg={6}>
        <h1>{product?.name}</h1>

        <h2 className="text-muted">R$ {product?.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product?.description}
        </p>

        <p className="text-muted">Em estoque: {product?.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            // addProduct(product)
            toast({
              description: "Produto adicionado ao carrinho",
              className: "bg-green-500 text-red-100",
            })
          }}
        >
          Compre agora
        </Button>

      </Col>
    </Row>
  )
}
