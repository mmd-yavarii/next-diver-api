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

  if (req.method === 'DELETE') {
    try {
      await Customer.deleteOne({ _id: id });
      res.status(500).json({ status: 'success', message: 'data deleted successully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ status: 'failed', message: 'error in deleting data' });
    }
  }
}
