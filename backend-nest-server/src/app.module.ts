import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objectives/objectives.module';

@Module({
  imports: [ObjectivesModule],
})
export class AppModule {}

