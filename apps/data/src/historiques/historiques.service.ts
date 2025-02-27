import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Historique } from '../entities/historique.entity';

@Injectable()
export class HistoriquesService {
  constructor(
    @Inject('HISTORIQUE_REPOSITORY')
    private readonly historiqueRepository: Repository<Historique>,
  ) {}

  async create(historique: Historique): Promise<Historique> {
    return this.historiqueRepository.save(historique);
  }

  async findAll(): Promise<Historique[]> {
    return this.historiqueRepository.find();
  }

  async findOne(id: number): Promise<Historique | null> {
    return this.historiqueRepository.findOne({ where: { id } });
  }

  async update(id: number, historique: Partial<Historique>): Promise<void> {
    await this.historiqueRepository.update(id, historique);
  }

  async remove(id: number): Promise<void> {
    await this.historiqueRepository.delete(id);
  }
}
