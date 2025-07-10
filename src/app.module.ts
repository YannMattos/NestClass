import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfig } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule, 
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
 