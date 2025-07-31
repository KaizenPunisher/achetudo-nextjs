import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, text, integer } from "drizzle-orm/pg-core";

export const usuariosTable = pgTable("usuarios", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id, { onDelete: "cascade" }),
});
export const usuariosTableRelations = relations(usuariosTable, ({ one }) => ({
  empresa: one(empresasTable, {
    fields: [usuariosTable.empresaId],
    references: [empresasTable.id],
  }),
}));

export const empresasTable = pgTable("empresas", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  enderecoId: uuid("endereco_id")
    .notNull()
    .references(() => enderecosTable.id, { onDelete: "cascade" }),
  telefoneId: uuid("telefone_id")
    .notNull()
    .references(() => telefonesTable.id, { onDelete: "cascade" }),
  anuncioId: uuid("anuncio_id").references(() => anunciosTable.id, {
    onDelete: "cascade",
  }),
});
export const empresasTableRelations = relations(empresasTable, ({ one }) => ({
  endereco: one(enderecosTable, {
    fields: [empresasTable.enderecoId],
    references: [enderecosTable.id],
  }),
  telefone: one(telefonesTable, {
    fields: [empresasTable.telefoneId],
    references: [telefonesTable.id],
  }),
  anuncio: one(anunciosTable, {
    fields: [empresasTable.anuncioId],
    references: [anunciosTable.id],
  }),
}));

export const anunciosTable = pgTable("anuncios", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  imagem1: text("imagem1").notNull(),
  precoEmCentavos: integer("preco_em_centavos").notNull(),
  descricao: text("descricao").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  servicoId: uuid("servico_id")
    .notNull()
    .references(() => servicosTable.id),
  produtoId: uuid("produto_id")
    .notNull()
    .references(() => produtosTable.id),
});
export const anunciosTableRelations = relations(anunciosTable, ({ one }) => ({
  servico: one(servicosTable, {
    fields: [anunciosTable.servicoId],
    references: [servicosTable.id],
  }),
  produto: one(produtosTable, {
    fields: [anunciosTable.produtoId],
    references: [produtosTable.id],
  }),
}));

export const enderecosTable = pgTable("enderecos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const telefonesTable = pgTable("telefones", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const servicosTable = pgTable("servicos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const produtosTable = pgTable("produtos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
