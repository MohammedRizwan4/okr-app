import { Module } from '@nestjs/common';
import { KeyResultsModule } from './key-results/key-results.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [ObjectivesModule, KeyResultsModule, HelloWorldModule],
})
export class AppModule {}

