import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product } from '../types/Product';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  addToFavorites: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  );

  const [favoritesItems, setFavoritesItems] = useLocalStorage<CartItem[]>(
    'favorites-items',
    [],
  );

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);

    if (existingCartItem) {
      // If the product is already in the cart, increase the quantity.
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1.
      setCartItems([...cartItems, { id: product.id, quantity: 1 }]);
    }
  };

  const addToFavorites = (product: Product) => {
    const existingCartItem = favoritesItems.find(
      item => item.id === product.id,
    );

    if (existingCartItem) {
      // If the product is already in the cart, increase the quantity.
      setFavoritesItems(
        favoritesItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1.
      setFavoritesItems([...favoritesItems, { id: product.id, quantity: 1 }]);
    }
  };

  const cartQuantity = cartItems.reduce(
    (quantity: any, item: { quantity: any }) => item.quantity + quantity,
    0,
  );

  function getItemQuantity(id: number) {
    return (
      cartItems.find((item: { id: number }) => item.id === id)?.quantity || 0
    );
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems: any[]) => {
      if (!currItems.find((item: { id: number }) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item: { id: number; quantity: number }) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems: any[]) => {
      if (
        currItems.find((item: { id: number }) => item.id === id)?.quantity === 1
      ) {
        return currItems.filter((item: { id: number }) => item.id !== id);
      } else {
        return currItems.map((item: { id: number; quantity: number }) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems: any[]) => {
      return currItems.filter((item: { id: number }) => item.id !== id);
    });
  }

  function removeFromFavorites(id: number) {
    setFavoritesItems((currItems: any[]) => {
      return currItems.filter((item: { id: number }) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        addToCart,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
