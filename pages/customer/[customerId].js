import CustomerDetailsPage from '@/components/templates/CustomerDetailsPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Details() {
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

  if (data) {
    return <CustomerDetailsPage data={data} />;
  }
}

export default Details;
