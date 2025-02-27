import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Application } from '../entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @Inject('APPLICATION_REPOSITORY')
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(application: Application): Promise<Application> {
    return this.applicationRepository.save(application);
  }

  async findAll(): Promise<Application[]> {
    return this.applicationRepository.find();
  }

  async findOne(id: string): Promise<Application | null> {
    return this.applicationRepository.findOne({ where: { id } });
  }

  async update(id: string, application: Partial<Application>): Promise<void> {
    await this.applicationRepository.update(id, application);
  }

  async remove(id: string): Promise<void> {
    await this.applicationRepository.delete(id);
  }
}
