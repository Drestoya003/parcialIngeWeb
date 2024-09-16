import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Organ } from 'src/organs/entities/organ.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService],
  imports: [TypeOrmModule.forFeature([Supplier,Organ]),AuthModule]
})
export class SuppliersModule {}