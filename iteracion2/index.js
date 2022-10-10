// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos
// dos trimestres aprobados y añade la propiedad ***isApproved***
// a true o false en consecuencia. Una vez lo tengas compruébalo con
// un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let index = 0; index < alumns.length; index++) {
  const element = alumns[index];
  let approvedCount = 0;
  approvedCount = element.T1 ? approvedCount + 1 : approvedCount;
  approvedCount = element.T2 ? approvedCount + 1 : approvedCount;
  approvedCount = element.T3 ? approvedCount + 1 : approvedCount;
  element.isApproved = approvedCount >= 2 ? true : false;
}
console.log(alumns);
