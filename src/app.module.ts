import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductModule } from './produto/produto.module';

@Module({
  imports: [
    UsuarioModule, 
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 