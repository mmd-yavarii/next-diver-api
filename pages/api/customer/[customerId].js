import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default async function handler(req, res) {
  const { customerId: id } = req.query;

  try {
    await connectDb();
  } catch (error) {
    console.log(`\n error in db connecttion : ${error.message}\n`);
    res.status(500).json({ status: 'failed', message: 'error in connection db' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: 'success', message: 'data created successfuly', data: customer });
    } catch (error) {
      res.status(500).json({ status: 'failed', message: 'error in retriving data from db' });
    }
  }
}
