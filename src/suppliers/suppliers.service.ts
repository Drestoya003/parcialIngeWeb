import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Client } from 'src/auth/entities/auth.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    private readonly authService: AuthService
  ) {}

  async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    // Crea un nuevo cliente utilizando el servicio de autenticación
    const client: Client = await this.authService.create(createSupplierDto);

    // Verifica que el cliente se haya creado correctamente
    if (!client) {
      throw new NotFoundException('No se pudo crear el cliente');
    }

    // Crea un nuevo proveedor con los datos del DTO y asigna el cliente
    const supplier = this.supplierRepository.create({
      email: createSupplierDto.email,
      fullName: createSupplierDto.fullName,
      password: createSupplierDto.password, // Asegúrate de que la contraseña esté cifrada
      country: createSupplierDto.country,
      isActive: true, // Proveedor activo por defecto
      roles: ['supplier'], // Rol predeterminado
      organs: [], // Inicializa el array de órganos si es necesario
    });

    // Guarda el proveedor en la base de datos
    const savedSupplier = await this.supplierRepository.save(supplier);

    return savedSupplier;
  }

  async findAll(): Promise<Supplier[]> {
    const suppliers = await this.supplierRepository.find();
    return suppliers;
  }

  async findOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOneBy({ id });
    if (!supplier) {
      throw new NotFoundException('Proveedor no encontrado');
    }
    return supplier;
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<Supplier> {
    const supplier = await this.supplierRepository.preload({ id, ...updateSupplierDto });
    if (!supplier) {
      throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    }
    return await this.supplierRepository.save(supplier);
  }

  async remove(id: string) {
    const supplier = await this.supplierRepository.delete({ id });
    if (supplier.affected === 0) {
      throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    }
    return supplier
  }
}
