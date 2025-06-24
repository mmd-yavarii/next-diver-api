import { useState } from 'react';
import Form from '../module/Form';
import { useRouter } from 'next/router';

function AddCustomerPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    date: '',
    products: [],
  });

  // cancel add customer
  function cancelHandler() {
    setForm({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      date: '',
      products: [],
    });

    router.push('/');
  }

  // save new customer
  async function saveHandler() {
    const response = await fetch('/api/customer', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    if (data.status === 'success') {
      router.push('/');
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="customer-page">
      <h4>Add new customer</h4>

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

export default AddCustomerPage;
