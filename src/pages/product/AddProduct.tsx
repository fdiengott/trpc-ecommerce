import { inferProcedureInput } from '@trpc/server';
import { useAddProduct } from './hooks';
import type { FormEvent } from 'react';
import type { AppRouter } from '~/server/routers/_app';

const AddProduct = () => {
  const { addProduct } = useAddProduct();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawForm = e.currentTarget;
    const formData = new FormData(rawForm);
    const values = Object.fromEntries(formData);

    type Input = inferProcedureInput<AppRouter['product']['add']>;
    const input: Input = {
      name: values.name as string,
      description: values.description as string,
      price: Number(values.price),
      // categoryId: '0',
    };

    try {
      await addProduct.mutateAsync(input);

      rawForm.reset();
    } catch (e) {
      console.error({ e }, 'Failed to create product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          disabled={addProduct.isPending}
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          disabled={addProduct.isPending}
          id="description"
          name="description"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          disabled={addProduct.isPending}
          id="price"
          name="price"
          type="number"
        />
      </div>

      <div>
        <button disabled={addProduct.isPending} type="submit">
          Submit
        </button>
        {addProduct.isError && <p>{addProduct.error.message}</p>}
      </div>
    </form>
  );
};

export default AddProduct;
