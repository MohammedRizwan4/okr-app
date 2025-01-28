import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectivesService {
  getAll() {
    return [
      {
        id: '001',
        title: 'Improve user authentication',
        keyResults: [
          {
            title: 'Implement Google login',
            initialValue: 0,
            currentValue: 50,
            targetValue: 100,
            metric: '%',
          },
          {
            title: 'Enhance password security',
            initialValue: 0,
            currentValue: 30,
            targetValue: 100,
            metric: '%',
          },
        ],
      },
      {
        id: '002',
        title: 'Optimize database performance',
        keyResults: [
          {
            title: 'Reduce query response time',
            initialValue: 200,
            currentValue: 100,
            targetValue: 50,
            metric: 'ms',
          },
          {
            title: 'Implement caching strategy',
            initialValue: 0,
            currentValue: 1,
            targetValue: 1,
            metric: 'Completed',
          },
        ],
      },
    ];
  }
}
