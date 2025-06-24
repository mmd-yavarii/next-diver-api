import FormInput from './FormInput';
import ItemList from './ItemList';

function Form({ form, setForm }) {
  function hangeHandler(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div>
      <FormInput type="text" name="name" label="Name" value={form.name} onChange={hangeHandler} />
      <FormInput type="text" name="lastName" label="Last Name" value={form.lastName} onChange={hangeHandler} />
      <FormInput type="text" name="email" label="Email" value={form.email} onChange={hangeHandler} />
      <FormInput type="text" name="phone" label="Phone" value={form.phone} onChange={hangeHandler} />
      <FormInput type="text" name="address" label="Address" value={form.address} onChange={hangeHandler} />
      <FormInput type="number" name="postalCode" label="Postal Code" value={form.postalCode} onChange={hangeHandler} />
      <FormInput type="date" name="date" label="Date" value={form.date} onChange={hangeHandler} />

      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
