import { NextResponse } from 'next/server';
import products from '../../../../../database.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
