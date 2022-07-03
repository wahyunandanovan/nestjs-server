import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig : TypeOrmModuleOptions = {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'wahyunandanovan',
      password: 'Novan1902',
      database: 'belajarbackend',
      entities: [__dirname + '/../**/*.entity.(ts,js)'],
      synchronize: true,
   
    }

export class AppModule {}