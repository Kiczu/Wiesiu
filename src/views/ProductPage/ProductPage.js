import React, { useState, useEffect } from 'react';
import axios from 'axios';
import woocommerceServices from '../../services/woocommerceService';
import { useParams } from 'react-router';

// Utwórz instancję axios z domyślnymi ustawieniami
const api = axios.create({
  baseURL: 'http://localhost/wp-json',
  withCredentials: true, // Włącz obsługę cookies
});

const Cart = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [nonce, setNonce] = useState(null);

  const addToCart = async (productId) => {
    try {
      //   const response = await api.post('/cocart/v1/add-item', {
      //     product_id: String(productId),
      //     quantity: String(5),
      //   });
      //   if (response.status === 200) {
      //     getCart(); // Aktualizuj stan koszyka po dodaniu produktu
      //   }
    } catch (error) {
      console.error('Błąd podczas dodawania produktu do koszyka', error);
    }

    try {
      fetch('http://localhost/wp-json/wc/store/v1/cart/add-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Nonce: nonce,
          'X-Wc-Store-Api-Nonce': nonce,
        },
        body: JSON.stringify({
          id: productId,
          quantity: 5,
          varriation: [],
        }),
      })
        .then((r) => r.json())
        .then((r) => console.log(r))
        .catch((error) => console.log(error));
    } catch (error) {
      console.error('Błąd podczas dodawania produktu do koszyka', error);
    }
  };

  const getCart = async () => {
    // try {
    //   const response = await api.get('/cocart/v1/get-cart');

    //   if (response.status === 200) {
    //     setCart(response.data);
    //   }
    // } catch (error) {
    //   console.error('Błąd podczas pobierania koszyka', error);
    // }
    try {
      fetch('http://localhost/wp-json/wc/store/v1/cart', { credentials: 'include' }).then((r) => {
        r.headers.forEach((value, key) => {
          console.log(key, value);
        });

        const nonce = r.headers.get('X-Wc-Store-Api-Nonce');
        setNonce(nonce);

        return r.json();
      });
    } catch (error) {
      console.error('Błąd podczas dodawania produktu do koszyka', error);
    }
  };

  // Pobierz koszyk przy pierwszym renderowaniu
  useEffect(() => {
    getCart();
  }, [product]);

  console.log(cart);

  return (
    <div>
      <button onClick={() => addToCart(product.id)}>Dodaj produkt do koszyka</button>
      <button onClick={getCart}>Pokaż koszyk</button>
    </div>
  );
};
const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [variations, setVatiations] = useState([]);

  useEffect(() => {
    const fetchProductVariations = async () => {
      try {
        const data = await woocommerceServices.getVariations(id);
        setVatiations(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductVariations();
  }, [id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await woocommerceServices.getProduct(id);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!productData) return 'text loading...'; // Tu bedzie szkielet
  return (
    <div>
      <Cart product={productData} />
    </div>
  );
};

export default ProductPage;
