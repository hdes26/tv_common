import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


export const databasePostgres = TypeOrmModule.forRootAsync({
  imports: [ConfigModule.forRoot({})],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'postgres',
      host: configService.get<string>('PGHOST'),
      port: configService.get<number>('PGPORT'),
      username: configService.get<string>('PGUSER'),
      password: configService.get<string>('PGPASSWORD'),
      database: configService.get<string>('PGDATABASE'),
      logging: false,
      migrations:["migrations/*.{js,ts}"],
      synchronize: false,
      then: Logger.debug(
        `postgres host:${configService.get<string>('PGHOST')}`,
        `DB =>`,
      ),
    };
  },
});
