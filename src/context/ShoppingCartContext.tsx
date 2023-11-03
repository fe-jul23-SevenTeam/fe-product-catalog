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
  favoritesItems: CartItem[];
  addToFavorites: (id: number) => void;
  addToCart: (id: number) => void;
  checkInCart: (id: number) => boolean;
  checkInFav: (id: number) => boolean;
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

  const checkInCart = (id: number) => {
    return cartItems.some(item => item.id === id);
  };

  const checkInFav = (id: number) => {
    return favoritesItems.some(item => item.id === id);
  };

  const addToCart = (id: number) => {
    const existingCartItem = cartItems.find((item: CartItem) => item.id === id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item: CartItem) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { id: id, quantity: 1 }]);
    }
  };

  const addToFavorites = (id: number) => {
    const existingCartItem = favoritesItems.find(
      (item: CartItem) => item.id === id,
    );

    if (existingCartItem) {
      setFavoritesItems((favoritesItems: CartItem[]) =>
        favoritesItems.filter(item => item.id !== existingCartItem.id),
      );
    } else {
      setFavoritesItems((favoritesItems: CartItem[]) => [
        ...favoritesItems,
        { id: id, quantity: 1 },
      ]);
    }
  };

  const cartQuantity = cartItems.reduce(
    (quantity: number, item: CartItem) => item.quantity + quantity,
    0,
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems: CartItem[]) => {
      if (!currItems.find((item: CartItem) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item: CartItem) => {
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
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find((item: CartItem) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: CartItem) => item.id !== id);
      } else {
        return currItems.map((item: CartItem) => {
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
    setCartItems((currItems: CartItem[]) => {
      return currItems.filter((item: CartItem) => item.id !== id);
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
        favoritesItems,
        addToCart,
        addToFavorites,
        checkInCart,
        checkInFav,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
