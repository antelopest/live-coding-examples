const calc = (str: string): number | never => {
  throw new Error('Error in Syntax');
  throw new Error('Error in Operands');
  throw new Error('Division by zero');
}