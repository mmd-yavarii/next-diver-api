import Card from '../module/Card';

export default function HomePage({ customers }) {
  return (
    <div>
      {customers.map((i) => (
        <Card key={i._id} customer={i} />
      ))}
    </div>
  );
}
