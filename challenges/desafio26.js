db.voos.deleteMany({
  $and: [
    { "passageiros.pagos": { $gte: 10, $lte: 5 } },
    { "empresa.nome": "GOL" },
  ],
});
