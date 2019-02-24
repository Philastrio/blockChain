const sayHi = (name: string, age: number, gender?: string) => {
  console.log(`안녕 ${name}. You are ${age}, ${gender}`);
};

sayHi('Hankang', 34);

export {};
