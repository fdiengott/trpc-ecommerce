import { trpc } from '~/utils/trpc';

export const useAddProduct = () => {
  const utils = trpc.useUtils();

  const addProduct = trpc.product.add.useMutation({
    async onSuccess() {
      await utils.product.list.invalidate();
    },
  });

  return {
    addProduct,
  };
};
