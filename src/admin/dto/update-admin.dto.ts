import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @ApiProperty({
    description: 'The name of the admin',
    example: 'John Doe',
  })
  readonly name?: string;

  @ApiProperty({
    description: 'The phone number of the admin',
    example: '+1234567890',
  })
  readonly phone?: string;

  @ApiProperty({
    description: 'The password for the admin account',
    example: 'securepassword123',
  })
  readonly password?: string;
}
