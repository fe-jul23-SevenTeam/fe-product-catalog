import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

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
  addToCart: (product: CartItem) => void;
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

  const addToCart = (product: CartItem) => {
    setCartItems([...cartItems, product]);
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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
