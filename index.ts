import "reflect-metadata";

import { container, injectable } from "tsyringe";

class Foo {}

@injectable()
class Bar {
	constructor(public myFoo: Foo) {}
}

const myBar = container.resolve(Bar);
console.log(myBar);
