"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import { Post } from "@/types/posts";

interface ProductsTableProps {
  limit?: number;
  title?: string;
}

const ProductsTable = ({ limit, title }: ProductsTableProps) => {
  const [products, setProducts] = useState<any[]>([]); // State to hold the products data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5044/api/Products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data); // Set fetched data to state
      } catch (error: any) {
        setError("Error fetching data: " + error.message); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchData();
  }, []);

  // If loading, show loading text
  if (loading) return <p>Loading products...</p>;

  // If error, show error message
  if (error) return <p>{error}</p>;

  // Sort products in descending order based on date
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Filter products based on limit
  const filteredProducts = limit ? sortedProducts.slice(0, limit) : sortedProducts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Products"}</h3>
      <Table>
        <TableCaption>A list of recent products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Price</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell className="hidden md:table-cell">{product.price}</TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {new Date(product.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Link href={`/products/edit/${product.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
