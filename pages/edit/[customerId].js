import CustomerEditPage from '@/components/templates/CustomerEditPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Index() {
  const router = useRouter();
  const { customerId: id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      fetch(`/api/customer/${id}`)
        .then((res) => res.json())
        .then((json) => setData(json.data));
    }
  }, [router.isReady]);

  if (data.name) {
    return <CustomerEditPage data={data} id={id} />;
  }
  return <p>Loading...</p>;
}

export default Index;
