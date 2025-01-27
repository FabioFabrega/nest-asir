import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
export function IsAccountNumber(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isAccountNumber',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    // Define la lógica de validación aquí, por ejemplo, un formato de cuenta
                    return typeof value === 'string' && /^\d{10,12}$/.test(value); // 10 a 12 dígitos
                },
                defaultMessage(args: ValidationArguments) {
                    return 'El número de cuenta no es válido';
                }
            }
        });
    };
}
class AccountDTO {
    @IsAccountNumber({ message: 'Número de cuenta inválido: solo debe contener entre 10 y 12 dígitos numéricos' })
    numeroCuenta: string;
   }