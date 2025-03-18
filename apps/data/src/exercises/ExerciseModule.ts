import { Module } from '@nestjs/common';
import { ApplicationModule } from '../applications/ApplicationModule';
import { ExerciseController } from './ExerciseController';
import { ApplicationService } from '../applications/ApplicationService';

@Module({
  imports: [ApplicationModule],
  controllers: [ExerciseController],
  providers: [ApplicationService],
})
export class ExerciseModule {}
