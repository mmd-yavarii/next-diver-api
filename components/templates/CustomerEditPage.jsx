import { useEffect, useState } from 'react';
import Form from '../module/Form';
import { useRouter } from 'next/router';
import moment from 'moment';

function CustomerEditPage({ data, id }) {
  const router = useRouter();
  const date = data.date ? moment(data.date).utc().format('YYYY-MM-DD') : '';
  const [form, setForm] = useState({
    name: data?.name,
    lastName: data?.lastName,
    email: data?.email,
    phone: data?.phone || '',
    address: data?.address || '',
    postalCode: data?.postalCode || '',
    date: date,
    products: data?.products || [],
  });

  // cancel handler
  function cancelHandler() {
    router.push('/');
  }

  // save new customer
  async function saveHandler() {
    const response = await fetch(`/api/edit/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.status === 'success') {
      router.push('/');
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="customer-page">
      <h4>Edit customer</h4>

      <Form form={form} setForm={setForm} />

      <div className="customer-page__buttons">
        <button onClick={cancelHandler} className="first">
          cancel
        </button>
        <button onClick={saveHandler} className="second">
          save
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
