import { Router, Request, Response } from 'express';
import { User } from './User';
import { UserService } from './User.Service';
import { getRepository } from 'typeorm'; // getRepository를 사용해야 합니다.
import { UserSource } from '../ormconfig';
const router = Router();
//const userRepository = getRepository(User);
const userRepository = UserSource.getRepository(User); // Repository를 얻습니다.
const userService = new UserService(userRepository);

router.post('/post_user', async (req, res, next) => {
  const { user_name, id, password, birth, email } = req.body;
  try {
    const createdUser = await userService.create(user_name, id, password, birth, email);
    res.status(201).json(createdUser);
  } catch (error) {
    // Handle error
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
