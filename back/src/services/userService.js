import passport from "passport";
import bcrypt from "bcrypt";

const createUser = async (email, password, name) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    email,
    password: hashedPassword,
    name,
  });
};

const checkDuplicate = async (email) => {
  const result = await UserModel.find({ email });
  return result.length > 0;
};


export { createUser, checkDuplicate};