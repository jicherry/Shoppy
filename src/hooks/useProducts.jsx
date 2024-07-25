import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";



export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60,

});

const { mutate: addProduct } = useMutation({
  mutationFn: addNewProduct,
  onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: 'products' });
  }
});
  
  return { productsQuery, addProduct };
}