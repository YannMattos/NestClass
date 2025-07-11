import { Module } from '@nestjs/common';
import { UserModule } from './usuario/user.module';
import { ProductModule } from './produto/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfig } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule, 
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConfig,
      inject: [DataBaseConfig]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 