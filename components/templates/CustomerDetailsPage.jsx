import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function CustomerDetailsPage({ data }) {
  const router = useRouter();

  async function deleteHandler() {
    const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/delete/${data._id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.status === 'success') {
        router.push('/');
      } else {
        alert('Failed to delete customer.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  }

  return (
    <div className="customer-detail">
      <h4>Customer's details</h4>

      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>name : </span>
          <p>{data.name}</p>
        </div>

        <div className="customer-detail__item">
          <span>last name : </span>
          <p>{data.lastName}</p>
        </div>

        <div className="customer-detail__item">
          <span>email : </span>
          <p>{data.email}</p>
        </div>

        <div className="customer-detail__item">
          <span>phone : </span>
          <p>{data.phone}</p>
        </div>

        <div className="customer-detail__item">
          <span>address : </span>
          <p>{data.address}</p>
        </div>

        <div className="customer-detail__item">
          <span>postal code : </span>
          <p>{data.postalCode}</p>
        </div>

        <div className="customer-detail__item">
          <span>date : </span>
          <p>{moment(data.date).utc().format('YYYY-MM-DD')}</p>
        </div>
      </div>

      <div className="customer-detail__products">
        <p>Name</p>
        <p>Price</p>
        <p>QTY</p>

        {Array.isArray(data.products) && data.products.length > 0 ? (
          data.products.map((product, index) => (
            <Fragment key={index}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.qty}</p>
            </Fragment>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No products</p>
        )}
      </div>
      <div className="customer-detail__buttons">
        <p>edit or delete ?</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
