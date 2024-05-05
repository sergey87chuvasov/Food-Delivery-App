import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://sergetechno:stereox87@cluster0.yio4jek.mongodb.net/food-delivery-app'
    )
    .then(() => console.log('DB Connected'));
};
