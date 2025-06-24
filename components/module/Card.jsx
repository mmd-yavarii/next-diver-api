import Link from 'next/link';
import { useRouter } from 'next/router';

function Card({ customer }) {
  const router = useRouter();
  const { name, lastName, email, _id } = customer;

  async function deleteHandler() {
    const response = await fetch(`/api/delete/${_id}`, { method: 'DELETE' });
    const data = await response.json();
    if (data.status === 'success') {
      router.replace(router.asPath);
    }
  }

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {name} {lastName}
        </p>
        <p>{email}</p>
      </div>

      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${_id}`}>Edit</Link>
        <Link href={`/customer/${_id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
