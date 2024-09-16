import { MinLength } from "class-validator";
import { Organ } from "src/organs/entities/organ.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity()
export class Supplier {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text',{unique:true})
    @MinLength(4)
    email: string;
    @Column('text')
    fullName:string;
    @Column('text')
    @MinLength(8)
    password:string;
    @Column('boolean',{default:true})
    isActive:boolean;
    @Column('text', {nullable:true})
    country: string;
    @Column('text',{array:true,
        default:['supplier', 'admin']})
    @MinLength(1)
    roles:string[];
    @OneToMany(() => Organ, (organ) => organ.supplier, { cascade: true })
    organs: Organ[];
}
