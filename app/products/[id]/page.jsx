"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../Productslist.module.css'; // パスを修正

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/products/${id}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data: {error}</div>;
  }

  if (!product) {
    return <div>Error loading product data.</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id}のページです</h1>
        <img src={product.image} width="300" height="400" alt={product.name} />
        <p>{product.name}</p>
        <br />
        <Link href="/products" className={styles.link}>
          商品一覧へ
        </Link>
      </main>
    </div>
  );
};

export default Product;
