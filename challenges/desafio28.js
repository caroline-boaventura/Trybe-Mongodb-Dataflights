const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ 
  empresa: LATAM, 
  totalVoosDomesticos:
    db.voos
      .count({ $and: [{ "empresa.nome": LATAM }, { natureza: "Doméstica" }] }),
});

db.resumoVoos
  .find({ 
    empresa: LATAM }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 }).limit(1);
