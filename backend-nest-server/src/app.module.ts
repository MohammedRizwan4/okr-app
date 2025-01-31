import { Module } from '@nestjs/common';
import { KeyResultsModule } from './key-results/key-results.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { HelloWorldModule } from './hello-world/hello-world.module';
import {PrismaService} from "./prisma/prisma.service";

@Module({
  imports: [ObjectivesModule, KeyResultsModule, HelloWorldModule],
  providers: [PrismaService]
})
export class AppModule {}
