module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',                                                             // Esto hace que Jest busque en la carpeta src/
  testMatch: [
    '**/__tests__/**/*.ts',                                                     // Busca en cualquier __tests__ dentro de src
    '**/?(*.)+(spec|test).ts'                                                   // Busca archivos .test.ts o .spec.ts
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.ts',                                                                  // Recoge cobertura de todos los archivos TS
    '!**/*.d.ts',                                                               // Excluye archivos de definición
    '!**/__tests__/**',                                                         // Excluye los tests mismos
    '!**/node_modules/**'                                                       // Excluye node_modules
  ],
  coverageDirectory: './coverage',                                              // Donde guardar los reportes de cobertura
  verbose: true                                                                 // Muestra más información en consola
}; 