import React from "react"
import ProductCard from "../components/ProductCard"
import { Col, Row } from "reactstrap"
import { ProductType } from "@/app/products/type"

export default function ProductsList({ products }: { products: ProductType[] }) {

  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
