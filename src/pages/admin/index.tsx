import { ChangeEvent, createContext, useState } from 'react';
import SuperJSON from 'superjson';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';

import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Select } from '~/components/ui/select';
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '~/components/ui/table';

import { trpc } from '~/utils/trpc';
import useDebouncedValue from '~/hooks/useDebouncedValue';
import { appRouter } from '../api/trpc/[trpc]';
import useSearchedProducts from '~/hooks/useSearchedProducts';
import { ProductType } from '~/server/routers/product';

const AdminPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const { data, error, refetch, isLoading } = trpc.product.list.useQuery({
        limit: 100,
    });

    const deleteMutation = trpc.product.delete.useMutation();

    const handleDeleteProduct = (id: string) => {
        deleteMutation.mutate(
            { id },
            {
                onSuccess: () => refetch(),
                onError: () => console.log('Error deleting product'),
            },
        );
    };

    //  INFO: if there are many products, this should change to a DB query
    const products = useSearchedProducts(
        data ? (data?.products as ProductType[]) : [],
        debouncedSearchTerm,
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Admin Page</h1>

            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Product Listings</h1>
                    <Link href="/admin/create">Create Product</Link>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="search">Search</Label>
                            <Input
                                id="search"
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Inventory</TableHead>
                                {/* <TableHead>Category</TableHead> */}
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody style={{ color: 'black' }}>
                            {products?.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>
                                        ${product.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell>{product.inventory}</TableCell>
                                    {/* <TableCell>{product.category}</TableCell> */}
                                    <TableCell
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Link
                                            href={`/admin/edit/${product.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-500"
                                            onClick={() =>
                                                handleDeleteProduct(product.id)
                                            }
                                            type="submit"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* <div className="bg-white shadow-md rounded-lg p-6 mt-6"> */}
                {/*     <h2 className="text-xl font-bold mb-4"> */}
                {/*         Create New Product */}
                {/*     </h2> */}
                {/*     <div className="grid grid-cols-2 gap-4"> */}
                {/*         <div> */}
                {/*             <Label htmlFor="name">Name</Label> */}
                {/*             <Input */}
                {/*                 id="name" */}
                {/*                 name="name" */}
                {/*                 type="text" */}
                {/*                 value={newProduct.name} */}
                {/*                 onChange={handleInputChange} */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div> */}
                {/*             <Label htmlFor="description">Description</Label> */}
                {/*             <Textarea */}
                {/*                 id="description" */}
                {/*                 name="description" */}
                {/*                 value={newProduct.description} */}
                {/*                 onChange={handleInputChange} */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div> */}
                {/*             <Label htmlFor="price">Price</Label> */}
                {/*             <Input */}
                {/*                 id="price" */}
                {/*                 name="price" */}
                {/*                 type="number" */}
                {/*                 value={newProduct.price} */}
                {/*                 onChange={handleInputChange} */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div> */}
                {/*             <Label htmlFor="inventory">Inventory</Label> */}
                {/*             <Input */}
                {/*                 id="inventory" */}
                {/*                 name="inventory" */}
                {/*                 type="number" */}
                {/*                 value={newProduct.inventory} */}
                {/*                 onChange={handleInputChange} */}
                {/*             /> */}
                {/*         </div> */}
                {/*         <div> */}
                {/*             <Label htmlFor="category">Category</Label> */}
                {/*             <Select */}
                {/*                 id="category" */}
                {/*                 name="category" */}
                {/*                 value={newProduct.category} */}
                {/*                 onValueChange={handleInputChange} */}
                {/*             > */}
                {/*                 <option value="">Select a category</option> */}
                {/*                 <option value="Home">Home</option> */}
                {/*                 <option value="Kitchen">Kitchen</option> */}
                {/*                 <option value="Accessories">Accessories</option> */}
                {/*             </Select> */}
                {/*         </div> */}
                {/*         <div> */}
                {/*             <Checkbox */}
                {/*                 id="featured" */}
                {/*                 name="featured" */}
                {/*                 checked={newProduct.featured} */}
                {/*                 onCheckedChange={handleInputChange} */}
                {/*             > */}
                {/*                 Featured */}
                {/*             </Checkbox> */}
                {/*         </div> */}
                {/*     </div> */}
                {/*     <div className="flex justify-end mt-4"> */}
                {/*         <Button size="lg" onClick={handleCreateProduct}> */}
                {/*             Create Product */}
                {/*         </Button> */}
                {/*     </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

//  ASK: this might need to be a client component. This is for admin so it'd be ok
export const getStaticProps: GetStaticProps = async (context) => {
    const helpers = createServerSideHelpers({
        router: appRouter,
        ctx: createContext({}),
        transformer: SuperJSON,
    });

    await helpers.product.list.prefetch({ limit: 100 });

    return {
        props: {
            trpcState: helpers.dehydrate(),
            filter: context.params?.filter ?? 'all',
        },
        revalidate: 1,
    };
};

export default AdminPage;
