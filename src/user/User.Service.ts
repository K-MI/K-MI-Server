// UserService.ts

import { Repository } from 'typeorm';
import { User } from './User';
import { UserSource } from '../ormconfig';
export class UserService {
  private repo: Repository<User>;

  constructor(repo: Repository<User>) {
    this.repo = repo;
  }

  create(user_name: string, id: string, password: string, birth: string, email: string) {
    const user = this.repo.create({ user_name, id, password, birth, email });
    return this.repo.save(user);
  }
}
