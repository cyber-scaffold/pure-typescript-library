import "reflect-metadata";

export class Foo {
  @Reflect.metadata("hello", "world")
  public say(a: number): string {
    return 'foo';
  };
};

const paramtypes = Reflect.getMetadata("design:paramtypes", Foo.prototype, "say");
console.log("paramtypes", paramtypes);

const returntype = Reflect.getMetadata("design:returntype", Foo.prototype, "say");
console.log("returntype", returntype);

