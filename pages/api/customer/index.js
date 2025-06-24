import Customer from '@/models/Customer';
import connectDb from '@/utils/connectDb';

export default async function handler(req, res) {
  try {
    await connectDb();
  } catch (error) {
    console.log(`\n error in db connecttion : ${error.message}\n`);
    res.status(500).json({ status: 'failed', message: 'error in connection db' });
    return;
  }

  if (req.method === 'POST') {
    const data = req.body;

    if (!data.name || !data.lastName || !data.email) {
      res.status(400).json({ status: 'failed', message: 'invalid data' });
    }

    try {
      const customer = await Customer.create(data);
      res.status(201).json({ status: 'success', message: 'data created successfuly', data: customer });
    } catch (error) {
      res.status(500).json({ status: 'failed', message: 'error in storing data' });
    }
  }
}
