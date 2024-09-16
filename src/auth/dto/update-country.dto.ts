import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateCountryDto extends PartialType(CreateAuthDto) {
    id: string;
    country: string;
}