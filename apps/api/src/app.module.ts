import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [UtilisateursModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
