import { ProductsDto } from './productos.dto';

describe('ProductsDto', () => {
  it('should be defined', () => {
    expect(new ProductsDto()).toBeDefined();
  });
});