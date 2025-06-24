import HomePage from '@/components/templates/HomePage';
import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default function Home({ customers }) {
  return <HomePage customers={customers} />;
}

export async function getServerSideProps(context) {
  try {
    await connectDb();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }
}
