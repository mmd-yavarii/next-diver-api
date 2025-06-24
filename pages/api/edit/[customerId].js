import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default async function handler(req, res) {
  const { customerId: id } = req.query;
  const data = req.body;

  try {
    await connectDb();
  } catch (error) {
    console.log(`\n error in db connecttion : ${error.message}\n`);
    res.status(500).json({ status: 'failed', message: 'error in connection db' });
    return;
  }

  if (req.method === 'PATCH') {
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();

      res.status(200).json({ status: 'success', message: 'data edited successully', data: customer });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ status: 'failed', message: 'error in editing data' });
    }
  }
}
