import PostsTable from '@/components/posts/PostsTable';
import BackButton from '@/components/BackButton';
import PostsPagination from '@/components/posts/PostsPagination';
import ProductsTable from '@/components/products/ProductsTable';

const PostsPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <ProductsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
