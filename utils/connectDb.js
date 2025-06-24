import mongoose from 'mongoose';

export default async function connectDb() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.URI);
  console.log('\n✅ db connected\n');
}
