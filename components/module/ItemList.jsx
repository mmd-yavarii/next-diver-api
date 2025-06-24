import FormInput from './FormInput';

function ItemList({ form, setForm }) {
  const { products } = form;

  function addHandler() {
    setForm({ ...form, products: [...products, { name: '', price: '', qty: '' }] });
  }

  // onchange of all inputs
  function changeHandler(event, index) {
    const { name, value } = event.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  }

  function deleteHandler(index) {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  }

  return (
    <div className="item-list">
      <p>Purchased products</p>

      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <FormInput type="text" name="name" label="product name" value={product.name} onChange={(event) => changeHandler(event, index)} />
          <div>
            <FormInput type="text" name="price" label="price" value={product.price} onChange={(event) => changeHandler(event, index)} />
            <FormInput type="number" name="qty" label="qty" value={product.qty} onChange={(event) => changeHandler(event, index)} />
          </div>
          <button onClick={() => deleteHandler(index)}>remove</button>
        </div>
      ))}

      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
